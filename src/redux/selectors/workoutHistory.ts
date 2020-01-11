import { AppState } from "../store";
import { createSelector } from "reselect";
import { ICompletedExercise } from "../../types/workout";

export const getSelectedQuantifiableExercise = (state: AppState) =>
  state.workoutHistory.selectedQuantifiableExercise;

export const getCompletedWorkouts = (state: AppState) =>
  state.workoutHistory.completedWorkouts;

export const getSelectedQuantifiableExerciseHistory = createSelector(
  [getSelectedQuantifiableExercise, getCompletedWorkouts],
  (selectedQuantifiableExercise, completedWorkouts) =>
    completedWorkouts
      .flatMap(workout => workout.completed_exercises)
      .filter(exercise => exercise.exercise_id === selectedQuantifiableExercise)
);
