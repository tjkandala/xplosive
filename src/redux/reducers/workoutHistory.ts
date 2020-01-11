import { ICompletedWorkouts, WorkoutIntensity } from "../../types/workout";
import { AppAction, WorkoutHistoryActionTypes } from "../../types/actions";
import produce from "immer";

interface IWorkoutHistoryState {
  selectedQuantifiableExercise: string;
  completedWorkouts: ICompletedWorkouts;
}

const workoutHistoryDefaultState: IWorkoutHistoryState = {
  selectedQuantifiableExercise: "Short-Approach Vertical Jump",
  completedWorkouts: [
    {
      completed_at: new Date("December 22, 2019"),
      workout_intensity: WorkoutIntensity.Productive,
      completed_exercises: [
        {
          exercise_id: "Short-Approach Vertical Jump",
          order: 0,
          completed_sets: [{ quantity: 44, reps: 3, notes: "" }]
        }
      ]
    },
    {
      completed_at: new Date("January 1, 2020"),
      workout_intensity: WorkoutIntensity.Productive,
      completed_exercises: [
        {
          exercise_id: "Vertical Jump",
          order: 0,
          completed_sets: [{ quantity: 39, reps: 3, notes: "" }]
        }
      ]
    },
    {
      completed_at: new Date("January 3, 2020"),
      workout_intensity: WorkoutIntensity.Productive,
      completed_exercises: [
        {
          exercise_id: "Short-Approach Vertical Jump",
          order: 0,
          completed_sets: [{ quantity: 45, reps: 3, notes: "" }]
        }
      ]
    },
    {
      completed_at: new Date("January 5, 2020"),
      workout_intensity: WorkoutIntensity.Productive,
      completed_exercises: [
        {
          exercise_id: "Vertical Jump",
          order: 0,
          completed_sets: [{ quantity: 40, reps: 3, notes: "" }]
        }
      ]
    }
  ]
};

export const workoutHistory = (
  state = workoutHistoryDefaultState,
  action: AppAction
) => {
  switch (action.type) {
    case WorkoutHistoryActionTypes.ADD_COMPLETED_WORKOUT:
      return produce(state, draftState => {
        draftState.completedWorkouts.push(action.completedWorkout);
      });

    case WorkoutHistoryActionTypes.SET_SELECTED_QUANTIFIABLE_EXERCISE:
      return produce(state, draftState => {
        draftState.selectedQuantifiableExercise = action.quantifiableExercise;
      });

    default:
      return state;
  }
};
