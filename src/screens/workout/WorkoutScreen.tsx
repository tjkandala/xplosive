import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../types/actions";
import {
  generateNewWorkout,
  cancelCurrentWorkout
} from "../../redux/actionCreators/currentWorkoutActions";
import WorkingOutView from "./WorkingOutView";
import NotWorkingOutView from "./NotWorkingOutView";
import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent
} from "react-navigation-stack";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps &
  NavigationStackScreenProps;

type OwnProps = {};

const WorkoutScreen: FC<Props> & NavigationStackScreenComponent = ({
  workingOut,
  navigation
}) => (workingOut ? <WorkingOutView /> : <NotWorkingOutView />);

WorkoutScreen.navigationOptions = {};

// TODO: Animate state transitions

const mapState = (state: AppState) => ({
  workingOut: state.currentWorkout.workingOut
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  mapDispatch
)(WorkoutScreen);
