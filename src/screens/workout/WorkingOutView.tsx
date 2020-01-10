import React, { FC } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../types/actions";
import { cancelCurrentWorkout } from "../../redux/actionCreators/currentWorkoutActions";
import SelectedExercise from "./components/SelectedExercise";
import ExercisesBottomSheet from "./components/ExercisesBottomSheet";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const WorkingOutScreen: FC<Props> = ({ cancelCurrentWorkout }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>Working Out</Text>
    <Button title="cancel wkt" onPress={cancelCurrentWorkout} />
    <SelectedExercise />
    <ExercisesBottomSheet />
  </SafeAreaView>
);

const mapState = (state: AppState) => ({});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({
  cancelCurrentWorkout: () => dispatch(cancelCurrentWorkout())
});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  null,
  mapDispatch
)(WorkingOutScreen);
