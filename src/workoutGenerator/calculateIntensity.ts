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

  // TODO: Comment all this code before moving on to next feature!

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
        const bilateralJumpHistory = nonRecoveryWorkouts.flatMap(workout =>
          workout.completed_exercises.filter(
            exercise =>
              exerciseDictionary.exercises[exercise.exercise_id]
                .movement_pattern === MovementPattern.BilateralJump &&
              exerciseDictionary.exercises[exercise.exercise_id]
                .quantifiable === true
          )
        );

        const bilateralJumpHistoryExercises = new Set(
          bilateralJumpHistory.map(exercise => exercise.exercise_id)
        );

        const bilateralJumpHistoryByExercise = Array.from(
          bilateralJumpHistoryExercises
        ).map(exercise_id =>
          bilateralJumpHistory.filter(
            exercise => exercise.exercise_id === exercise_id
          )
        );

        const validBilateralJumpTrend = bilateralJumpHistoryByExercise
          .find(history => history.length > 1)
          .map(exercise =>
            exercise.completed_sets.reduce(
              (acc, v) => (v.quantity > acc ? v.quantity : acc),
              0
            )
          );

        console.log(bilateralJumpHistoryExercises);
        console.log(bilateralJumpHistoryByExercise);
        console.log(validBilateralJumpTrend);

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
          //  If there is insufficient vertical jump history (athletes won't be tesing their standing
          //  verticals every workout, so it may take some time to analyze trends), randomly
          // select Productive or WallBreaker workout type. This isn't much different
          // from the heuristics I use to train new clients!
          if (daysSinceLastWorkout <= 3) {
            // 1/3rd chance of wallbreaker
            const rand = Math.floor(Math.random() * 3);

            return rand === 0
              ? WorkoutIntensity.WallBreaker
              : WorkoutIntensity.Productive;
          } else {
            // 1/2 chance of wallbreaker
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
  console.log(`daysSinceLastWorkout: ${daysSinceLastWorkout}`);
  return daysSinceLastWorkout;
};
