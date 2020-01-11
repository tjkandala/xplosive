import React, { FC } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../types/actions";
import { exerciseDictionary } from "../../workoutGenerator/exerciseDictionary";
import QuantifiableExerciseChart from "./components/QuantifiableExerciseChart";
import SelectQuantifiableExercise from "./components/SelectQuantifiableExercise";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

// TODO: two charts:
// 1) Weekly Workout frequency histogram (target is 3 or 4)
// 2) Quantifiable Exercise chart

const ChartsView: FC<Props> = () => (
  <View>
    <QuantifiableExerciseChart />
    <Text>ChartsView</Text>
    <SelectQuantifiableExercise />
  </View>
);

const mapState = (state: AppState) => ({});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  null,
  null
)(ChartsView);
