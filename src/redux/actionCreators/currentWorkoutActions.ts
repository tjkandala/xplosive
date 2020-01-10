import { AppState } from "../store";
import {
  SetNewWorkoutAction,
  CurrentWorkoutActionTypes,
  GenerateNewWorkoutAction,
  CancelCurrentWorkoutAction,
  UpdateSelectedExerciseQuantityAction,
  UpdateSelectedExerciseRepsAction,
  SetSelectedExerciseAction,
  BeginCompleteCurrentWorkoutAction,
  FinishCompleteCurrentWorkoutAction
} from "../../types/actions";
import { generateWorkout } from "../../workoutGenerator";

export const generateNewWorkout = (): GenerateNewWorkoutAction => ({
  type: CurrentWorkoutActionTypes.GENERATE_NEW_WORKOUT
});

export const startNewWorkout = (state: AppState): SetNewWorkoutAction => ({
  type: CurrentWorkoutActionTypes.SET_NEW_WORKOUT,
  workout: generateWorkout(
    state.workoutHistory.completedWorkouts,
    state.userPreferences
  )
});

export const cancelCurrentWorkout = (): CancelCurrentWorkoutAction => ({
  type: CurrentWorkoutActionTypes.CANCEL_CURRENT_WORKOUT
});

export const beginCompleteCurrentWorkout = (): BeginCompleteCurrentWorkoutAction => ({
  type: CurrentWorkoutActionTypes.BEGIN_COMPLETE_CURRENT_WORKOUT
});

export const finishCompleteCurrentWorkout = (): FinishCompleteCurrentWorkoutAction => ({
  type: CurrentWorkoutActionTypes.FINISH_COMPLETE_CURRENT_WORKOUT
});

export const setSelectedExercise = (
  order: number
): SetSelectedExerciseAction => ({
  type: CurrentWorkoutActionTypes.SET_SELECTED_EXERCISE,
  order
});

export const updateSelectedExerciseQuantity = (
  setIndex: number,
  quantity: number
): UpdateSelectedExerciseQuantityAction => ({
  type: CurrentWorkoutActionTypes.UPDATE_SELECTED_EXERCISE_QUANTITY,
  setIndex,
  quantity
});

export const updateSelectedExerciseReps = (
  setIndex: number,
  reps: number
): UpdateSelectedExerciseRepsAction => ({
  type: CurrentWorkoutActionTypes.UPDATE_SELECTED_EXERCISE_REPS,
  setIndex,
  reps
});
