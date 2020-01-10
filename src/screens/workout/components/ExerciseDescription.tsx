import React, { FC } from "react";
import { View, Text } from "react-native";
import { exerciseDictionary } from "../../../workoutGenerator/exerciseDictionary";

type Props = OwnProps;

type OwnProps = {
  exercise_id: string;
};

const ExerciseDescription: FC<Props> = ({ exercise_id }) => (
  <View>
    <Text>{exercise_id}</Text>
    <Text>{exerciseDictionary.exercises[exercise_id].description}</Text>
  </View>
);

export default ExerciseDescription;
