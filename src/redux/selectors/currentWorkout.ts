import { createSelector } from "reselect";
import { AppState } from "../store";

export const getCurrentExercises = (state: AppState) =>
  state.currentWorkout.workout.current_exercises;

export const getSelectedExercise = createSelector(
  getCurrentExercises,
  currentExercises =>
    currentExercises.find(exercise => exercise.selected_exercise)
);

export const getExerciseCount = (state: AppState) =>
  state.currentWorkout.workout.current_exercises.length;
