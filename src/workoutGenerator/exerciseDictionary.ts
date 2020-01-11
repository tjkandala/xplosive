import {
  IExercise,
  Genre,
  BaseReps,
  Equipment,
  MovementPattern,
  TrainingAge,
  Unit
} from "../types/workout";

interface IExerciseDictionary {
  randomExerciseIdByMovementPattern(movement_pattern: MovementPattern): string;
  readonly exercises: { [exercise_id: string]: Readonly<IExercise> };
}

export const exerciseDictionary: Readonly<IExerciseDictionary> = {
  randomExerciseIdByMovementPattern: function(movement_pattern) {
    const movementPatternList: Array<string> = Object.keys(
      this.exercises
    ).filter(key => this.exercises[key].movement_pattern === movement_pattern);

    return movementPatternList[
      Math.floor(Math.random() * movementPatternList.length)
    ];
  },

  exercises: {
    "Broad Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Broad Jump",
      genre: Genre.Explosive,
      description:
        "From a standing position, jump as far (horizontally) as you can while landing softly.",
      movement_pattern: MovementPattern.BilateralJump,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Vertical Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Vertical Jump",
      genre: Genre.Explosive,
      description:
        "From a standing position, jump as high (vertically) as you can while landing softly.",
      movement_pattern: MovementPattern.BilateralJump,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: true,
      unit: Unit.Inches,
      video: "todo"
    },
    "Short-Approach Vertical Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Short-Approach Vertical Jump",
      genre: Genre.Explosive,
      description:
        "Off a two-step approach, jump as high (vertically) as you can off of two feet while landing softly.",
      movement_pattern: MovementPattern.BilateralJump,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: true,
      unit: Unit.Inches,
      video: "todo"
    },
    "Max 2-foot Vertical Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Max 2-foot Vertical Jump",
      genre: Genre.Explosive,
      description:
        "From a running approach, jump as high (vertically) as you can off of two feet while landing softly.",
      movement_pattern: MovementPattern.BilateralJump,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: true,
      unit: Unit.Inches,
      video: "todo"
    },
    "Single-Leg Standing Vertical Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Single-Leg Standing Vertical Jump",
      genre: Genre.Explosive,
      description:
        "From a stationary position, jump as high (vertically) as you can off of one foot while landing softly.",
      movement_pattern: MovementPattern.UnilateralJump,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: true,
      unit: Unit.Inches,
      video: "todo"
    },
    "Single-Leg Short-Approach Vertical Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Single-Leg Short-Approach Vertical Jump",
      genre: Genre.Explosive,
      description:
        "Off a three-step approach, jump as high as you can off of one foot while landing softly.",
      movement_pattern: MovementPattern.UnilateralJump,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: true,
      unit: Unit.Inches,
      video: "todo"
    },
    "Single-Leg Max Vertical Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Single-Leg Max Vertical Jump",
      genre: Genre.Explosive,
      description:
        "From a running approach, jump as high as you can off of one foot while landing softly.",
      movement_pattern: MovementPattern.UnilateralJump,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: true,
      unit: Unit.Inches,
      video: "todo"
    },
    "Speed Skaters": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Speed Skaters",
      genre: Genre.Explosive,
      description:
        "From a stationary position, jump as far laterally (sideways) with one leg as you can while landing softly with the other leg. Repeat with the leg you just landed on to complete a rep (you should land where you started).",
      movement_pattern: MovementPattern.LateralQuickness,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Defensive Slides": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Defensive Slides",
      genre: Genre.Explosive,
      description:
        "Get into an athletic stance and slide laterally as fast as possible for approximately 10 yards. Decelerate quickly, but with control, and repeat in the opposite direction to complete a rep",
      movement_pattern: MovementPattern.LateralQuickness,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Speed Skater with Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Speed Skater with Jump",
      genre: Genre.Explosive,
      description:
        "From a stationary position, jump as far laterally (sideways) with one leg as you can while landing softly with the other leg. Jump as high as you can with the leg you just landed on, and then jump in the opposite direction again. Repeat with the leg you just landed on to complete a rep (you should land where you started).",
      movement_pattern: MovementPattern.LateralQuickness,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Double-Leg Bound": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Double-Leg Bound",
      genre: Genre.Explosive,
      description:
        "Jump as far (horizontally) as possible. Land in a half-squat position and immediately jump forwards again. Do not rest in between reps; imagine that your body is a spring",
      movement_pattern: MovementPattern.Bound,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Skips for Distance": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Skips for Distance",
      genre: Genre.Explosive,
      description: "Skip, but with the aim of jumping as far as possible.",
      movement_pattern: MovementPattern.Bound,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Single-Leg Bound": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Single-Leg Bound",
      genre: Genre.Explosive,
      description:
        "Off a short approach, jump far off one leg. Land and jump again with the same leg. Do not rest in between jumps; imagine that your leg is a spring.",
      movement_pattern: MovementPattern.Bound,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Depth Jump": {
      baseSets: 3,
      baseReps: BaseReps.Jump,
      exercise_id: "Depth Jump",
      genre: Genre.Explosive,
      description:
        "Drop from a 12-24 inch platform, land in a partial squat position, then jump as high as you can. Control your landing, but do not rest at the bottom; imagine that your body is a spring.",
      movement_pattern: MovementPattern.Bound,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "20 Yard Sprint": {
      baseSets: 3,
      baseReps: BaseReps.Sprint,
      exercise_id: "20 Yard Sprint",
      genre: Genre.Explosive,
      description:
        "Sprint as fast as you can for 20 yards. Rest until you feel explosive before performing your next set",
      movement_pattern: MovementPattern.Sprint,
      equipment: Equipment.Field,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Seconds,
      video: "todo"
    },
    "40 Yard Sprint": {
      baseSets: 3,
      baseReps: BaseReps.Sprint,
      exercise_id: "40 Yard Sprint",
      genre: Genre.Explosive,
      description:
        "Sprint as fast as you can for 40 yards. Rest until you feel explosive before performing your next set",
      movement_pattern: MovementPattern.Sprint,
      equipment: Equipment.Field,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 120,
      quantifiable: true,
      unit: Unit.Seconds,
      video: "todo"
    },
    "60 Yard Sprint": {
      baseSets: 3,
      baseReps: BaseReps.Sprint,
      exercise_id: "60 Yard Sprint",
      genre: Genre.Explosive,
      description:
        "Sprint as fast as you can for 60 yards. Rest until you feel explosive before performing your next set",
      movement_pattern: MovementPattern.Sprint,
      equipment: Equipment.Field,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 120,
      quantifiable: true,
      unit: Unit.Seconds,
      video: "todo"
    },
    Suicides: {
      baseSets: 3,
      baseReps: BaseReps.Sprint,
      exercise_id: "Suicides",
      genre: Genre.Explosive,
      description:
        "Suicide sprinting drill on basketball court. Use cones (or water bottles, shoes, etc.) as markers if you are sprinting on a field. Run and change directions as fast as possible; we are not running suicides as a conditioning drill in this workout.",
      movement_pattern: MovementPattern.Sprint,
      equipment: Equipment.Field,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Seconds,
      video: "todo"
    },
    "Single-Leg Box Squat": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Single-Leg Box Squat",
      genre: Genre.Strength,
      description:
        "On one leg, slowly (3 seconds) squat down to a box/chair. Ideally, the top of your thigh will be parallel with your knee when you sit on the box/chair. Stand up explosively and focus on your glutes. Hold dumbbells or other heavy things in your hands when you can easily perform over 15 reps.",
      movement_pattern: MovementPattern.BilateralSquat,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Barbell Box Squat": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Barbell Box Squat",
      genre: Genre.Strength,
      description:
        "With a barbell on your back, squat down to a box/bench. Ideally, the top of your thigh will be parallel with, or slightly above, your knee when you sit on the box/bench. Stand up explosively and focus on your glutes. Use a weight that is challenging when performing 6-12 reps. Push yourself, but stop the set when you think you would not be able to complete the next rep (don't get pinned by the barbell).",
      movement_pattern: MovementPattern.BilateralSquat,
      equipment: Equipment.Barbell,
      training_age: TrainingAge.Intermediate,
      restTimeSecs: 180,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Barbell Back Squat": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Barbell Back Squat",
      genre: Genre.Strength,
      description:
        "With a barbell on your back, squat down to 'about parallel'. Ideally, the top of your thigh will be parallel with, or slightly above, your knee at the bottom of your squat. Stand up explosively and focus on your glutes. Use a weight that is challenging when performing 6-12 reps. Push yourself, but stop the set when you think you would not be able to complete the next rep (don't get pinned by the barbell).",
      movement_pattern: MovementPattern.BilateralSquat,
      equipment: Equipment.Barbell,
      training_age: TrainingAge.Intermediate,
      restTimeSecs: 180,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Trap Bar Deadlift": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Trap Bar Deadlift",
      genre: Genre.Strength,
      description:
        "Load the trap bar with weights. Step inside, and stand up with the trap bar. Focus on keeping your back straight and squeezing your glutes.  If you do not have access to a trap bar, replace this exercise with goblet squats.",
      movement_pattern: MovementPattern.BilateralSquat,
      equipment: Equipment.TrapBar,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 180,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Goblet Squat": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Goblet Squat",
      genre: Genre.Strength,
      description:
        "Hold a dumbbell in front of you and keep your back tight. As you squat down, drive your knees out. Descend until your elbows reach your knees. Stand up explosively; focus on your glutes.",
      movement_pattern: MovementPattern.BilateralSquat,
      equipment: Equipment.Dumbbell,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 120,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Barbell Romanian Deadlift": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Barbell Romanian Deadlift",
      genre: Genre.Strength,
      description:
        "Hold the barbell while your feet are shoulder-width apart. Bend slightly at the knees, then move your hips back until you feel a deep stretch in your hamstrings. Keep the bar close to your body; the majority of the movement should be done at your hips. Return to a standing position with emphasis on your glutes.",
      movement_pattern: MovementPattern.HipHinge,
      equipment: Equipment.Barbell,
      training_age: TrainingAge.Intermediate,
      restTimeSecs: 120,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Dumbbell Romanian Deadlift": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Dumbbell Romanian Deadlift",
      genre: Genre.Strength,
      description:
        "Hold dumbbells while your feet are shoulder-width apart. Bend slightly at the knees, then move your hips back until you feel a deep stretch in your hamstrings. Keep the dumbbells close to your body; the majority of the movement should be done at your hips. Return to a standing position with emphasis on your glutes.",
      movement_pattern: MovementPattern.HipHinge,
      equipment: Equipment.Barbell,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 120,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Single-Leg Romanian Deadlift": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Single-Leg Romanian Deadlift",
      genre: Genre.Strength,
      description:
        "Stand on one leg, bend slightly at the knee, then move your hips back until you feel a deep stretch in your hamstrings. Return to a standing position with emphasis on your glutes. Try to perform equal reps on both legs. Once you can perform 15 reps on each leg, hold heavy things to continue progressing.",
      movement_pattern: MovementPattern.HipHinge,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Split Squat": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Split Squat",
      genre: Genre.Strength,
      description:
        "Stand with your feet shoulder-width apart. Move one leg (working leg) one step forwards, and move the other leg one step backwards. From this position, squat as low as you can for as many reps as you can. Try to descend slowly (3 seconds). Switch legs and repeat. Once you can easily perform 15 reps on each leg, hold heavy things to continue progress",
      movement_pattern: MovementPattern.UnilateralSquat,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Bulgarian Split-Squat": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Bulgarian Split-Squat",
      genre: Genre.Strength,
      description:
        "Stand with one leg on the ground, and one leg resting behind you on a bench or box. Squat as low as you can without touching your suspended knee to the ground. You can load with exercise with dumbbells or barbells",
      movement_pattern: MovementPattern.UnilateralSquat,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Side Lunges": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Side Lunges",
      genre: Genre.Strength,
      description:
        "Stand with your feet shoulder-width apart. Lunge to the side (laterally) with control, absorbing most of the weight with your gluteus medius. Perform each set on both legs (e.g. 12 reps for left leg, 12 reps for right leg). You can load this exercise with dumbbells",
      movement_pattern: MovementPattern.UnilateralSquat,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Glute Bridge Hamstring Walkout": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Glute Bridge Hamstring Walkout",
      genre: Genre.Strength,
      description:
        "Perform a glute bridge and hold the top position. Lift one leg off the ground, then place it a little bit farther away from your body. Do the same with your other leg. Repeat until your legs are almost fully extended. You should feel this in your hamstrings (if you keep your butt off the floor). 'Walk' back to the starting position, and repeat until you can't anymore.",
      movement_pattern: MovementPattern.KneeFlexion,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Machine Hamstring Curl": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Machine Hamstring Curl",
      genre: Genre.Strength,
      description:
        "Use the hamstring curl machine. Choose a weight that is hard to perform 8-15 reps with.",
      movement_pattern: MovementPattern.KneeFlexion,
      equipment: Equipment.GymMachines,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Walking Lunges": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Walking Lunges",
      genre: Genre.Strength,
      description:
        "Start with your feet shoulder-width apart. Lunge forward, then stand up using the leg you lunged forward with. Continue while alternating legs. You can load this exercise with dumbbells or barbells. You should feel this in both your glutes and your quads, along with a stretch in your hip flexors.",
      movement_pattern: MovementPattern.Lunge,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Reverse Lunges": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Reverse Lunges",
      genre: Genre.Strength,
      description:
        "Start with your feet shoulder-width apart. Lunge backwards, then stand up with your front leg. Complete a set on one leg, then complete it with the other leg (e.g. 12 reps for left leg and 12 reps for right leg in one set). You can load this exercise with dumbbells or barbells.",
      movement_pattern: MovementPattern.Lunge,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 90,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Pallof Press": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Pallof Press",
      genre: Genre.Core,
      description:
        "Hold a band or cable handle that is applying force perpendicular to your body. Push the handle forward while engaging your core. Make sure that none of your body moves, other than your arms.",
      movement_pattern: MovementPattern.Rotation,
      equipment: Equipment.GymMachines,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: true,
      unit: Unit.Pounds,
      video: "todo"
    },
    "Russian Twists": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Russian Twists",
      genre: Genre.Core,
      description:
        "Perform russian twists. Load with dumbbells or medicine balls when it gets too easy.",
      movement_pattern: MovementPattern.Rotation,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Dead Bugs": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Dead Bugs",
      genre: Genre.Core,
      description:
        "Perform dead bugs. You can load this with light dumbbells or kettlebells.",
      movement_pattern: MovementPattern.AntiExtension,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    Plank: {
      baseSets: 3,
      baseReps: BaseReps.Sprint,
      exercise_id: "Plank",
      genre: Genre.Core,
      description:
        "Perform planks for up to 45 seconds. Once it gets easy, try advanced variations.",
      movement_pattern: MovementPattern.AntiExtension,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: true,
      unit: Unit.None,
      video: "todo"
    },
    "Ab Wheel": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Ab Wheel",
      genre: Genre.Core,
      description:
        "Perform as many ab wheel reps as you can. If you don't have access to an ab wheel, perform planks.",
      movement_pattern: MovementPattern.AntiExtension,
      equipment: Equipment.GymMachines,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 60,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Hanging Leg Raise": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Hanging Leg Raise",
      genre: Genre.Core,
      description:
        "Perform leg raises while hanging on a pull-up bar. If you don't have access to a pull-up bar, perform lying leg raises",
      movement_pattern: MovementPattern.LegRaise,
      equipment: Equipment.Barbell,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Lying Leg Raise": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Lying Leg Raise",
      genre: Genre.Core,
      description: "Perform leg raises while lying on the ground.",
      movement_pattern: MovementPattern.LegRaise,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "Lying Alternate Leg Raise": {
      baseSets: 3,
      baseReps: BaseReps.Strength,
      exercise_id: "Lying Alternate Leg Raise",
      genre: Genre.Core,
      description:
        "Perform leg raises one leg at a time while lying on the ground.",
      movement_pattern: MovementPattern.LegRaise,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    Crunches: {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "Crunches",
      genre: Genre.Core,
      description:
        "Perform crunches. Focus on your abs, not range of motion. If it gets too easy, add weight with dumbbells or plates.",
      movement_pattern: MovementPattern.Crunch,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    },
    "V-Sit Crunches": {
      baseSets: 3,
      baseReps: BaseReps.Hypertrophy,
      exercise_id: "V-Sit Crunches",
      genre: Genre.Core,
      description: "Perform V-Sit Crunches until you can't.",
      movement_pattern: MovementPattern.Crunch,
      equipment: Equipment.Bodyweight,
      training_age: TrainingAge.Beginner,
      restTimeSecs: 45,
      quantifiable: false,
      unit: Unit.None,
      video: "todo"
    }
  }
};

export const quantifiableExercises = Object.keys(
  exerciseDictionary.exercises
).filter(exercise => exerciseDictionary.exercises[exercise].quantifiable);
