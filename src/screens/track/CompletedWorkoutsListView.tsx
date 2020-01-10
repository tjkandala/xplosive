import React, { FC } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../types/actions";
import { ICompletedWorkout, WorkoutIntensity } from "../../types/workout";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const CompletedWorkoutsListView: FC<Props> = ({ completedWorkouts }) => (
  <FlatList<ICompletedWorkout>
    data={completedWorkouts}
    keyExtractor={item => item.completed_at.toString()}
    ListEmptyComponent={<Text>No Completed Workouts Yet!</Text>}
    renderItem={({ item }) => (
      <View style={styles.completedWorkoutPreview}>
        <Text>{item.completed_at.toString()}</Text>
        <Text>{WorkoutIntensity[item.workout_intensity]}</Text>
        <Text>{item.completed_exercises.length} exercises</Text>
      </View>
    )}
  />
);

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
)(CompletedWorkoutsListView);

const styles = StyleSheet.create({
  completedWorkoutPreview: {
    borderRadius: 6,
    padding: 6,
    margin: 6,
    borderWidth: 1,
    borderColor: "gray"
  }
});
