import { MovementPattern, WorkoutIntensity } from "../types/workout";

export interface IWorkoutTemplate {
  movements: Array<MovementPattern>;
}

interface IWorkoutTemplateProvider {
  workout_templates: Array<IWorkoutTemplate>;
  getTemplate(): IWorkoutTemplate;
}

const RecoveryWorkoutTemplateProvider: IWorkoutTemplateProvider = {
  workout_templates: [
    {
      movements: [MovementPattern.HipHinge]
    },
    {
      movements: [MovementPattern.Crunch, MovementPattern.AntiExtension]
    }
  ],
  getTemplate() {
    return this.workout_templates[
      Math.floor(Math.random() * this.workout_templates.length)
    ];
  }
};

const ProductiveWorkoutTemplateProvider: IWorkoutTemplateProvider = {
  workout_templates: [
    {
      movements: [
        MovementPattern.BilateralJump,
        MovementPattern.UnilateralJump,
        MovementPattern.Bound,
        MovementPattern.LateralQuickness,
        MovementPattern.Sprint,
        MovementPattern.BilateralSquat,
        MovementPattern.HipHinge,
        MovementPattern.UnilateralSquat,
        MovementPattern.Lunge,
        MovementPattern.KneeFlexion,
        MovementPattern.Crunch,
        MovementPattern.Rotation
      ]
    }
  ],
  getTemplate() {
    return this.workout_templates[
      Math.floor(Math.random() * this.workout_templates.length)
    ];
  }
};

const WallBreakerWorkoutTemplateProvider: IWorkoutTemplateProvider = {
  workout_templates: [
    {
      movements: [
        MovementPattern.BilateralJump,
        MovementPattern.Crunch,
        MovementPattern.BilateralSquat
      ]
    }
  ],
  getTemplate() {
    return this.workout_templates[
      Math.floor(Math.random() * this.workout_templates.length)
    ];
  }
};

export const getTemplate = (intensity: WorkoutIntensity): IWorkoutTemplate => {
  switch (intensity) {
    case WorkoutIntensity.Recovery:
      return RecoveryWorkoutTemplateProvider.getTemplate();
    case WorkoutIntensity.Productive:
      return ProductiveWorkoutTemplateProvider.getTemplate();
    case WorkoutIntensity.WallBreaker:
      return WallBreakerWorkoutTemplateProvider.getTemplate();
  }
};
