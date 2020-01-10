import React, { FC, useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../types/actions";
import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent
} from "react-navigation-stack";
import CompletedWorkoutsListView from "./CompletedWorkoutsListView";
import { ButtonGroup } from "react-native-elements";
import ChartsView from "./ChartsView";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps &
  NavigationStackScreenProps;

type OwnProps = {};

const TrackScreen: FC<Props> & NavigationStackScreenComponent = ({
  navigation,
  completedWorkouts
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ButtonGroup
        buttons={["charts", "history"]}
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      {selectedIndex === 0 ? <ChartsView /> : <CompletedWorkoutsListView />}
    </SafeAreaView>
  );
};

TrackScreen.navigationOptions = {};

// TODO: Animate state transitions

const mapState = (state: AppState) => ({
  completedWorkouts: state.workoutHistory.completedWorkouts
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  mapDispatch
)(TrackScreen);
