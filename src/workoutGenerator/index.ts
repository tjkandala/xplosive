import { getTemplate } from "./templateProviders";
import {
  ICompletedWorkouts,
  IUserPreferences,
  ICurrentWorkout,
  ICurrentExercise
} from "../types/workout";
import { exerciseDictionary } from "./exerciseDictionary";
import { calculateIntensity } from "./calculateIntensity";

export const generateWorkout = (
  completedWorkouts: ICompletedWorkouts,
  userPreferences: IUserPreferences
): ICurrentWorkout => {
  // workout intensity variables, exercise type variables, sets variables

  const workout_intensity = calculateIntensity(completedWorkouts);
  const workoutTemplate = getTemplate(workout_intensity);

  // TODO: Incorporate userPreferences in generation
  // eliminate exercises by training age and equipment settings

  const workout = {
    started_at: new Date(),
    workout_intensity,
    currentRestSecsLeft: 0,
    current_exercises: workoutTemplate.movements.map((movement, i) => {
      const exercise_id = exerciseDictionary.randomExerciseIdByMovementPattern(
        movement
      );

      const current_exercise: ICurrentExercise = {
        exercise_id,
        selected_exercise: i === 0 ? true : false,
        // add / subtract from sets here!
        current_sets: Array.from({
          length: exerciseDictionary.exercises[exercise_id].baseSets
        }).map(exercise => ({
          quantity: null,
          reps: null,
          notes: ""
        })),
        order: i
      };

      return current_exercise;
    })
  };
  return workout;
};
