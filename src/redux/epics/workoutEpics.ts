import { ofType, Epic } from "redux-observable";
import {
  AppAction,
  CurrentWorkoutActionTypes,
  WorkoutHistoryActionTypes
} from "../../types/actions";
import { AppState } from "../store";
import { map, tap, ignoreElements } from "rxjs/operators";
import {
  startNewWorkout,
  finishCompleteCurrentWorkout
} from "../actionCreators/currentWorkoutActions";
import { addCompletedWorkout } from "../actionCreators/workoutHistoryActions";

export const generateWorkoutEpic$: Epic<AppAction, AppAction, AppState> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(CurrentWorkoutActionTypes.GENERATE_NEW_WORKOUT),
    // don't change to mapTo, it's for constant values only (will only evalute startNewWorkout() once)
    map(_ => startNewWorkout(state$.value))
  );

// listens for 'begin complete workout' actions, emits 'add completed workout' actions
// purpose of this epic is to send currentWorkout state to a workoutHistory action creator
export const beginCompleteWorkoutEpic$: Epic<AppAction, AppAction, AppState> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(CurrentWorkoutActionTypes.BEGIN_COMPLETE_CURRENT_WORKOUT),
    map(_ => addCompletedWorkout(state$.value))
  );

// listens for 'add completed workout' actions, emits 'finish complete workout' actions
// purpose of this epic is to tell currentWorkout that it can clear its state now
export const finishCompleteWorkoutEpic$: Epic<
  AppAction,
  AppAction,
  AppState
> = (action$, state$) =>
  action$.pipe(
    ofType(WorkoutHistoryActionTypes.ADD_COMPLETED_WORKOUT),
    map(_ => finishCompleteCurrentWorkout())
  );
