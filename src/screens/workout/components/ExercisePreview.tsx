import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../../types/actions";
import { setSelectedExercise } from "../../../redux/actionCreators/currentWorkoutActions";
import {
  getCurrentExercises,
  getExerciseCount
} from "../../../redux/selectors/currentWorkout";
import { exerciseDictionary } from "../../../workoutGenerator/exerciseDictionary";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {
  order: number;
};

const ExercisePreview: FC<Props> = ({ order, exercise, exerciseCount }) => (
  <View style={styles.exercisePreviewContainer}>
    <View style={styles.leftSideContainer}>
      <Text
        style={
          exercise.selected_exercise
            ? styles.selectedTitle
            : styles.notSelectedTitle
        }
      >
        {exercise.exercise_id}
      </Text>
      <View style={styles.setsContainer}>
        {exerciseDictionary.exercises[exercise.exercise_id].quantifiable
          ? exercise.current_sets.map((set, i) => (
              <View
                style={
                  set.reps && set.quantity
                    ? { ...styles.set, ...styles.finishedSet }
                    : styles.set
                }
                key={i.toString()}
              >
                <Text>{i + 1}</Text>
              </View>
            ))
          : exercise.current_sets.map((set, i) => (
              <View
                style={
                  set.reps
                    ? { ...styles.set, ...styles.finishedSet }
                    : styles.set
                }
                key={i.toString()}
              >
                <Text>{i + 1}</Text>
              </View>
            ))}
      </View>
    </View>
    <Text>
      {exercise.order + 1} of {exerciseCount}
    </Text>
  </View>
);

const mapState = (state: AppState, ownProps: OwnProps) => ({
  exercise: getCurrentExercises(state)[ownProps.order],
  exerciseCount: getExerciseCount(state)
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  null
)(ExercisePreview);

const styles = StyleSheet.create({
  exercisePreviewContainer: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  leftSideContainer: {
    flexDirection: "column"
  },
  selectedTitle: {
    fontWeight: "bold"
  },
  notSelectedTitle: {
    fontWeight: "normal"
  },
  setsContainer: {
    flexDirection: "row"
  },
  set: {
    backgroundColor: "lightgray",
    height: 24,
    width: 24,
    borderRadius: 12
  },
  finishedSet: {
    backgroundColor: "gray"
  }
});
