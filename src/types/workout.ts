export enum TrainingAge {
  Beginner = 1,
  Intermediate,
  Advanced
}

export enum Genre {
  Explosive = 1,
  Strength,
  Core
}

export enum Equipment {
  Bodyweight = 1,
  Barbell,
  Dumbbell,
  PlyoBox,
  Field,
  GymMachines,
  TrapBar
}

export enum MovementPattern {
  BilateralJump = 1,
  UnilateralJump,
  LateralQuickness,
  Bound,
  Sprint,
  BilateralSquat,
  HipHinge,
  UnilateralSquat,
  KneeFlexion,
  Lunge,
  Rotation,
  AntiExtension,
  LegRaise,
  Crunch,
  FrenchContrast,
  Widowmakers
}

export enum BaseReps {
  Sprint = 1,
  Jump = 3,
  Strength = 6,
  Hypertrophy = 10
}

export enum Unit {
  Pounds = 1,
  Inches,
  Seconds,
  None
}

export enum WorkoutIntensity {
  Recovery = 1,
  Productive,
  WallBreaker
}

export interface IExercise {
  exercise_id: string;
  equipment: Equipment;
  training_age: TrainingAge;
  genre: Genre;
  description: string;
  movement_pattern: MovementPattern;
  baseSets: number;
  baseReps: BaseReps;
  restTimeSecs: number;
  quantifiable: boolean;
  unit: Unit;
  // path to video
  video: string;
}

export interface ICompletedSet {
  // quantity, e.g. the '150' in 150 lbs
  // null if it isn't quantifiable
  quantity: number | null;
  reps: number | null;
  notes: string;
}

export interface ICompletedExercise {
  exercise_id: string;
  completed_sets: Array<ICompletedSet>;
  order: number;
}

export interface ICompletedWorkout {
  completed_at: Date;
  workout_intensity: WorkoutIntensity;
  // index signature
  // completed_exercises: { [exercise_id: string]: ICompletedExercise };
  completed_exercises: Array<ICompletedExercise>;
}

export interface ICurrentSet extends ICompletedSet {}

export interface ICurrentExercise {
  exercise_id: string;
  current_sets: Array<ICurrentSet>;
  selected_exercise: boolean;
  order: number;
}

export interface ICurrentWorkout {
  started_at: Date;
  workout_intensity: WorkoutIntensity;
  currentRestSecsLeft: number;
  current_exercises: Array<ICurrentExercise>;
  // current_exercises: { [exercise_id: string]: ICurrentExercise };
}

export interface ICompletedWorkouts extends Array<ICompletedWorkout> {}

export interface IUserPreferences {
  training_age: TrainingAge;
  equipment: Array<Equipment>;
}
