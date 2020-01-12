import { AppState } from "../store";
import { createSelector } from "reselect";
import { executeTransducer } from "../../workoutGenerator/calculateIntensity";
import { from } from "rxjs";
import { flatMap, filter, toArray } from "rxjs/operators";

export const getSelectedQuantifiableExercise = (state: AppState) =>
  state.workoutHistory.selectedQuantifiableExercise;

export const getCompletedWorkouts = (state: AppState) =>
  state.workoutHistory.completedWorkouts;

export const getSelectedQuantifiableExerciseHistory = createSelector(
  [getSelectedQuantifiableExercise, getCompletedWorkouts],
  (selectedQuantifiableExercise, completedWorkouts) =>
    executeTransducer(
      from(completedWorkouts).pipe(
        flatMap(workout => workout.completed_exercises),
        filter(
          exercise => exercise.exercise_id === selectedQuantifiableExercise
        )
      )
    )
);
