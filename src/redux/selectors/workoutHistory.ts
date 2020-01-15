import { AppState } from "../store";
import { createSelector } from "reselect";

import { from } from "rxjs";
import { flatMap, filter, toArray } from "rxjs/operators";
import { executeObsducer } from "obsducer/build";

export const getSelectedQuantifiableExercise = (state: AppState) =>
  state.workoutHistory.selectedQuantifiableExercise;

export const getCompletedWorkouts = (state: AppState) =>
  state.workoutHistory.completedWorkouts;

export const getSelectedQuantifiableExerciseHistory = createSelector(
  [getSelectedQuantifiableExercise, getCompletedWorkouts],
  (selectedQuantifiableExercise, completedWorkouts) =>
    executeObsducer(
      from(completedWorkouts).pipe(
        flatMap(workout => workout.completed_exercises),
        filter(
          exercise => exercise.exercise_id === selectedQuantifiableExercise
        )
      )
    )
);

// export const getSelectedQuantifiableExerciseHistory = createSelector(
//   [getSelectedQuantifiableExercise, getCompletedWorkouts],
//   (selectedQuantifiableExercise, completedWorkouts) =>
//     completedWorkouts
//       .flatMap(workout => workout.completed_exercises)
//       .filter(exercise => exercise.exercise_id === selectedQuantifiableExercise)
// );
