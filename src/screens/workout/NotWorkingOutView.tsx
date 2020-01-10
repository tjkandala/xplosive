import React, { FC } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../types/actions";
import { generateNewWorkout } from "../../redux/actionCreators/currentWorkoutActions";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const NotWorkingOutScreen: FC<Props> = ({ generateNewWorkout }) => (
  <SafeAreaView>
    <Text>Not Working Out</Text>
    <Button title="gen new wkt" onPress={generateNewWorkout} />
  </SafeAreaView>
);

const mapState = (state: AppState) => ({});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({
  generateNewWorkout: () => dispatch(generateNewWorkout())
});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  null,
  mapDispatch
)(NotWorkingOutScreen);
