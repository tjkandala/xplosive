import React, { FC } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../../types/actions";
import {
  getSelectedQuantifiableExercise,
  getSelectedQuantifiableExerciseHistory
} from "../../../redux/selectors/workoutHistory";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const QuantifiableExerciseChart: FC<Props> = ({
  selectedQuantifiableExercise,
  selectedQuantifiableExerciseHistory
}) => (
  <View>
    <Text>{selectedQuantifiableExercise}</Text>
  </View>
);

const mapState = (state: AppState) => ({
  selectedQuantifiableExercise: getSelectedQuantifiableExercise(state),
  selectedQuantifiableExerciseHistory: getSelectedQuantifiableExerciseHistory(
    state
  )
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  null
)(QuantifiableExerciseChart);
