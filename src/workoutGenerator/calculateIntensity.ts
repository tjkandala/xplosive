import {
  WorkoutIntensity,
  ICompletedWorkouts,
  MovementPattern
} from "../types/workout";
import { exerciseDictionary } from "./exerciseDictionary";

export const calculateIntensity = (
  completedWorkouts: ICompletedWorkouts
): WorkoutIntensity => {
  const nonRecoveryWorkouts: ICompletedWorkouts = completedWorkouts.filter(
    completedWorkout =>
      completedWorkout.workout_intensity !== WorkoutIntensity.Recovery
  );

  const daysSinceLastWorkout = nonRecoveryWorkouts.length
    ? calculateDaysSinceLastWorkout(nonRecoveryWorkouts)
    : 0;

  switch (nonRecoveryWorkouts.length) {
    // for first ever workout
    case 0:
      return WorkoutIntensity.Productive;
    // for second ever workout
    case 1:
      return daysSinceLastWorkout <= 1
        ? WorkoutIntensity.Recovery
        : WorkoutIntensity.Productive;
    // default intensity logic
    default:
      if (daysSinceLastWorkout <= 1) {
        return WorkoutIntensity.Recovery;
      } else {
        // from workout history (of non recovery workouts), make an array of
        // all quantifiable bilateral jump exercises in chronological order.
        // I'm using bilateral jumps to track progress because
        // they best demonstrate pure explosiveness (unilateral jumps involve more skill)
        const bilateralJumpHistory = nonRecoveryWorkouts.flatMap(workout =>
          workout.completed_exercises.filter(
            exercise =>
              exerciseDictionary.exercises[exercise.exercise_id]
                .movement_pattern === MovementPattern.BilateralJump &&
              exerciseDictionary.exercises[exercise.exercise_id]
                .quantifiable === true
          )
        );

        // make a Set of all bilateral jump exercises in the athletes history
        // so I can make an array of the athlete's performance history for
        // each bilateral jump exercise the athlete has ever performed.
        // Reverse so I can evaluate the most recent valid bilateral jump trend (valid means 2+ bouts)
        const bilateralJumpHistoryExercises = new Set(
          bilateralJumpHistory.map(exercise => exercise.exercise_id)
        );
        const bilateralJumpHistoryByExercise = Array.from(
          bilateralJumpHistoryExercises
        )
          .map(exercise_id =>
            bilateralJumpHistory.filter(
              exercise => exercise.exercise_id === exercise_id
            )
          )
          .reverse();

        // get any bilateral jump exercise that has been recorded more than once
        // (for consistency. don't want to compare e.g. max running vert vs standing vert)
        // and reduce each array of completed sets into the highest recorded vertical jump that day
        // so that I can assess whether the athlete is trending up or down.
        const validBilateralJumpTrend = bilateralJumpHistoryByExercise
          .find(history => history.length > 1)
          .map(exercise =>
            exercise.completed_sets.reduce(
              (acc, v) => (v.quantity > acc ? v.quantity : acc),
              0
            )
          );

        if (validBilateralJumpTrend) {
          // if their vertical jump has been improving, continue to assign
          // "productive" workouts. if it ain't broke, don't fix it.
          // if they haven't been improving, give them a "wallbreaker"
          return validBilateralJumpTrend[validBilateralJumpTrend.length - 1] -
            validBilateralJumpTrend[validBilateralJumpTrend.length - 2] >=
            0
            ? WorkoutIntensity.Productive
            : WorkoutIntensity.WallBreaker;
        } else {
          // If there is insufficient vertical jump history (athletes won't be tesing their standing
          // verticals every workout, so it may take some time to analyze trends), randomly
          // select Productive or WallBreaker workout type. This isn't much different
          // from the heuristic I use to train new clients! If the workout is too much/not enough
          // for them, it will be reflected in their future performance. Once there is enough data
          // you can make a more informed decision on what intensity is required.
          if (daysSinceLastWorkout <= 3) {
            // 1/3rd chance of wallbreaker. Athlete is likely mostly recovered, but at this point,
            // it is better to play it safe most of the time and assign a standard workout
            const rand = Math.floor(Math.random() * 3);
            return rand === 0
              ? WorkoutIntensity.WallBreaker
              : WorkoutIntensity.Productive;
          } else {
            // 1/2 chance of wallbreaker. Athlete is likely fully recovered from previous workout,
            // so they are primed for high intensity
            const rand = Math.floor(Math.random() * 2);
            return rand === 0
              ? WorkoutIntensity.WallBreaker
              : WorkoutIntensity.Productive;
          }
        }
      }
  }
};

// calculate the number of days between the last (non-recovery) workout and now
// TODO: use in the UI as well
const calculateDaysSinceLastWorkout = (
  nonRecoveryWorkouts: ICompletedWorkouts
): number => {
  const now = new Date();
  const lastNonRecoveryWorkoutDate = new Date(
    nonRecoveryWorkouts[nonRecoveryWorkouts.length - 1].completed_at
  );
  const daysSinceLastWorkoutMillis =
    now.getTime() - lastNonRecoveryWorkoutDate.getTime();
  // full days
  const daysSinceLastWorkout = Math.floor(
    daysSinceLastWorkoutMillis / 1000 / 60 / 60 / 24
  );
  return daysSinceLastWorkout;
};
