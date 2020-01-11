import { AppState } from "../store";
import {
  AddCompletedWorkoutAction,
  WorkoutHistoryActionTypes,
  SetSelectedQuantifiableExerciseAction
} from "../../types/actions";
import { ICompletedExercise, ICompletedWorkout } from "../../types/workout";
import { exerciseDictionary } from "../../workoutGenerator/exerciseDictionary";

export const addCompletedWorkout = (
  state: AppState
): AddCompletedWorkoutAction => {
  const completedExercises: Array<
    ICompletedExercise
  > = state.currentWorkout.workout.current_exercises.map(exercise => ({
    exercise_id: exercise.exercise_id,
    order: exercise.order,
    completed_sets: exercise.current_sets.filter(set => {
      if (exerciseDictionary.exercises[exercise.exercise_id].quantifiable) {
        return set.reps && set.quantity;
      } else {
        return set.reps;
      }
    })
  }));

  const completedWorkout: ICompletedWorkout = {
    completed_at: new Date(),
    workout_intensity: state.currentWorkout.workout.workout_intensity,
    completed_exercises: completedExercises
  };

  // confirming that the state value passed from epic (state$.value)
  // is a snapshot of state, not a reference (prevents race conditions)
  //   setTimeout(() => {
  //     console.log(state);
  //   }, 2000);

  return {
    type: WorkoutHistoryActionTypes.ADD_COMPLETED_WORKOUT,
    completedWorkout: completedWorkout
  };
};

export const setSelectedQuantifiableExercise = (
  quantifiableExercise: string
): SetSelectedQuantifiableExerciseAction => ({
  type: WorkoutHistoryActionTypes.SET_SELECTED_QUANTIFIABLE_EXERCISE,
  quantifiableExercise: quantifiableExercise
});
