import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../../types/actions";
import {
  getSelectedExercise,
  getExerciseCount
} from "../../../redux/selectors/currentWorkout";
import ExerciseTable from "./ExerciseTable";
import {
  setSelectedExercise,
  beginCompleteCurrentWorkout
} from "../../../redux/actionCreators/currentWorkoutActions";
import ExerciseDescription from "./ExerciseDescription";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const SelectedExercise: FC<Props> = ({
  selectedExercise,
  exerciseCount,
  setSelectedExercise,
  beginCompleteCurrentWorkout
}) => (
  <View style={{ flex: 1 }}>
    <ExerciseDescription exercise_id={selectedExercise.exercise_id} />
    <ExerciseTable />
    {exerciseCount === selectedExercise.order + 1 ? (
      <Button title="complete" onPress={() => beginCompleteCurrentWorkout()} />
    ) : (
      <Button
        title="next"
        onPress={() => setSelectedExercise(selectedExercise.order + 1)}
      />
    )}
  </View>
);

const mapState = (state: AppState) => ({
  selectedExercise: getSelectedExercise(state),
  exerciseCount: getExerciseCount(state)
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({
  setSelectedExercise: (order: number) => dispatch(setSelectedExercise(order)),
  beginCompleteCurrentWorkout: () => dispatch(beginCompleteCurrentWorkout())
});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  mapDispatch
)(SelectedExercise);
