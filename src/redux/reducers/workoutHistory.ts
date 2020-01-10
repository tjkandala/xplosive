import { ICompletedWorkouts, WorkoutIntensity } from "../../types/workout";
import { AppAction, WorkoutHistoryActionTypes } from "../../types/actions";
import produce from "immer";

interface IWorkoutHistoryState {
  completedWorkouts: ICompletedWorkouts;
}

const workoutHistoryDefaultState: IWorkoutHistoryState = {
  completedWorkouts: [
    {
      completed_at: new Date("January 2, 2020"),
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

    default:
      return state;
  }
};
