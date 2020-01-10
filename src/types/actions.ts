import { ICurrentWorkout, ICompletedWorkout } from "./workout";

export enum CurrentWorkoutActionTypes {
  GENERATE_NEW_WORKOUT = "GENERATE_NEW_WORKOUT",
  SET_NEW_WORKOUT = "SET_NEW_WORKOUT",
  CANCEL_CURRENT_WORKOUT = "CANCEL_CURRENT_WORKOUT",
  BEGIN_COMPLETE_CURRENT_WORKOUT = "BEGIN_COMPLETE_CURRENT_WORKOUT",
  FINISH_COMPLETE_CURRENT_WORKOUT = "FINISH_COMPLETE_CURRENT_WORKOUT",
  SET_SELECTED_EXERCISE = "SET_SELECTED_EXERCISE",
  UPDATE_SELECTED_EXERCISE_REPS = "UPDATE_SELECTED_EXERCISE_REPS",
  UPDATE_SELECTED_EXERCISE_QUANTITY = "UPDATE_SELECTED_EXERCISE_QUANTITY"
}

export interface GenerateNewWorkoutAction {
  type: typeof CurrentWorkoutActionTypes.GENERATE_NEW_WORKOUT;
}

export interface SetNewWorkoutAction {
  type: typeof CurrentWorkoutActionTypes.SET_NEW_WORKOUT;
  workout: ICurrentWorkout;
}

export interface CancelCurrentWorkoutAction {
  type: typeof CurrentWorkoutActionTypes.CANCEL_CURRENT_WORKOUT;
}

export interface BeginCompleteCurrentWorkoutAction {
  type: typeof CurrentWorkoutActionTypes.BEGIN_COMPLETE_CURRENT_WORKOUT;
}

export interface FinishCompleteCurrentWorkoutAction {
  type: typeof CurrentWorkoutActionTypes.FINISH_COMPLETE_CURRENT_WORKOUT;
}

export interface SetSelectedExerciseAction {
  type: typeof CurrentWorkoutActionTypes.SET_SELECTED_EXERCISE;
  order: number;
}

export interface UpdateSelectedExerciseRepsAction {
  type: typeof CurrentWorkoutActionTypes.UPDATE_SELECTED_EXERCISE_REPS;
  setIndex: number;
  reps: null | number;
}

export interface UpdateSelectedExerciseQuantityAction {
  type: typeof CurrentWorkoutActionTypes.UPDATE_SELECTED_EXERCISE_QUANTITY;
  setIndex: number;
  quantity: null | number;
}

export type CurrentWorkoutAction =
  | GenerateNewWorkoutAction
  | SetNewWorkoutAction
  | CancelCurrentWorkoutAction
  | BeginCompleteCurrentWorkoutAction
  | FinishCompleteCurrentWorkoutAction
  | SetSelectedExerciseAction
  | UpdateSelectedExerciseRepsAction
  | UpdateSelectedExerciseQuantityAction;

export enum WorkoutHistoryActionTypes {
  ADD_COMPLETED_WORKOUT = "ADD_COMPLETED_WORKOUT"
}

export interface AddCompletedWorkoutAction {
  type: typeof WorkoutHistoryActionTypes.ADD_COMPLETED_WORKOUT;
  completedWorkout: ICompletedWorkout;
}

export type WorkoutHistoryAction = AddCompletedWorkoutAction;

export enum UserPreferencesActionTypes {}

export type AppAction = CurrentWorkoutAction | WorkoutHistoryAction;
