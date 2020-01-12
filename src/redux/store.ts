import { createStore, combineReducers, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { currentWorkout } from "./reducers/currentWorkout";
import { workoutHistory } from "./reducers/workoutHistory";
import { userPreferences } from "./reducers/userPreferences";
import {
  generateWorkoutEpic$,
  beginCompleteWorkoutEpic$,
  finishCompleteWorkoutEpic$
} from "./epics/workoutEpics";

// had to use any, try not to use any anywhere else!
const rootEpic = combineEpics<any>(
  generateWorkoutEpic$,
  beginCompleteWorkoutEpic$,
  finishCompleteWorkoutEpic$
);
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  currentWorkout: currentWorkout,
  workoutHistory: workoutHistory,
  userPreferences: userPreferences
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [""],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [""]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

let persistor = persistStore(store);

export { store, persistor };
