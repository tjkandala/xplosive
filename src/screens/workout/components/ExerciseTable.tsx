import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../../types/actions";
import {
  updateSelectedExerciseReps,
  updateSelectedExerciseQuantity
} from "../../../redux/actionCreators/currentWorkoutActions";
import { getSelectedExercise } from "../../../redux/selectors/currentWorkout";
import { exerciseDictionary } from "../../../workoutGenerator/exerciseDictionary";
import { TextInput } from "react-native-gesture-handler";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const ExerciseTable: FC<Props> = ({
  selectedExercise,
  updateSelectedExerciseQuantity,
  updateSelectedExerciseReps
}) => {
  switch (
    exerciseDictionary.exercises[selectedExercise.exercise_id].quantifiable
  ) {
    case true:
      return (
        <View style={styles.tableContainer}>
          {selectedExercise.current_sets.map((set, i) => (
            <View key={`set-${i}`} style={styles.setRow}>
              <Text>Set #{i + 1}</Text>
              <TextInput
                style={styles.textInput}
                value={set.quantity ? set.quantity.toString() : null}
                placeholder="qty"
                keyboardType="number-pad"
                returnKeyType={"done"}
                onChangeText={text =>
                  updateSelectedExerciseQuantity(i, parseFloat(text))
                }
              />
              <Text>{set.quantity}</Text>
              <TextInput
                style={styles.textInput}
                placeholder="reps"
                keyboardType="number-pad"
                returnKeyType={"done"}
                value={set.reps ? set.reps.toString() : null}
                onChangeText={text =>
                  updateSelectedExerciseReps(i, parseFloat(text))
                }
              />
            </View>
          ))}
        </View>
      );
    case false:
      return (
        <View style={styles.tableContainer}>
          {selectedExercise.current_sets.map((set, i) => (
            <View key={`set-${i}`} style={styles.setRow}>
              <Text>Set #{i + 1}</Text>
              <TextInput
                style={styles.textInput}
                placeholder="reps"
                keyboardType="number-pad"
                returnKeyType={"done"}
                value={set.reps ? set.reps.toString() : null}
                onChangeText={text =>
                  updateSelectedExerciseReps(i, parseFloat(text))
                }
              />
            </View>
          ))}
        </View>
      );
  }
};

const mapState = (state: AppState) => ({
  selectedExercise: getSelectedExercise(state)
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({
  updateSelectedExerciseReps: (setIndex: number, reps: number) =>
    dispatch(updateSelectedExerciseReps(setIndex, reps)),
  updateSelectedExerciseQuantity: (setIndex: number, quantity: number) =>
    dispatch(updateSelectedExerciseQuantity(setIndex, quantity))
});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  mapDispatch
)(ExerciseTable);

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 12
  },
  setRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 8
  },
  textInput: {
    backgroundColor: "lightgray",
    width: 36
  }
});
