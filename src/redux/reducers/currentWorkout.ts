import {
  ICurrentWorkout,
  ICompletedExercise,
  ICompletedWorkout
} from "../../types/workout";
import { AppAction, CurrentWorkoutActionTypes } from "../../types/actions";

import { produce } from "immer";
import { exerciseDictionary } from "../../workoutGenerator/exerciseDictionary";

interface ICurrentWorkoutState {
  workingOut: boolean;
  workout: ICurrentWorkout | null;
}

const currentWorkoutDefaultState: ICurrentWorkoutState = {
  workingOut: false,
  workout: null
};

export const currentWorkout = (
  state = currentWorkoutDefaultState,
  action: AppAction
): ICurrentWorkoutState => {
  switch (action.type) {
    case CurrentWorkoutActionTypes.SET_NEW_WORKOUT:
      return produce(state, draftState => {
        draftState.workingOut = true;
        draftState.workout = action.workout;
      });

    case CurrentWorkoutActionTypes.CANCEL_CURRENT_WORKOUT:
      return produce(state, draftState => {
        draftState.workingOut = false;
        draftState.workout = null;
      });

    case CurrentWorkoutActionTypes.BEGIN_COMPLETE_CURRENT_WORKOUT:
      return state;

    case CurrentWorkoutActionTypes.FINISH_COMPLETE_CURRENT_WORKOUT:
      return produce(state, draftState => {
        draftState.workingOut = false;
        draftState.workout = null;
      });

    case CurrentWorkoutActionTypes.SET_SELECTED_EXERCISE:
      return produce(state, draftState => {
        draftState.workout.current_exercises = state.workout.current_exercises.map(
          exercise => ({
            ...exercise,
            selected_exercise: exercise.order === action.order ? true : false
          })
        );
      });

    case CurrentWorkoutActionTypes.UPDATE_SELECTED_EXERCISE_QUANTITY: {
      const selectedExerciseIndex = state.workout.current_exercises
        .map(exercise => exercise.selected_exercise)
        .indexOf(true);
      return produce(state, draftState => {
        draftState.workout.current_exercises[
          selectedExerciseIndex
        ].current_sets[action.setIndex].quantity = action.quantity
          ? action.quantity
          : null;
      });
    }

    case CurrentWorkoutActionTypes.UPDATE_SELECTED_EXERCISE_REPS: {
      const selectedExerciseIndex = state.workout.current_exercises
        .map(exercise => exercise.selected_exercise)
        .indexOf(true);
      return produce(state, draftState => {
        draftState.workout.current_exercises[
          selectedExerciseIndex
        ].current_sets[action.setIndex].reps = action.reps ? action.reps : null;
      });
    }

    default:
      return state;
  }
};
