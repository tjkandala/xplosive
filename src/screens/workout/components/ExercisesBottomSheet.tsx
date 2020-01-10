import React, { FC } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../../types/actions";
import BottomSheet from "reanimated-bottom-sheet";
import { setSelectedExercise } from "../../../redux/actionCreators/currentWorkoutActions";
import ExercisePreview from "./ExercisePreview";
import { getCurrentExercises } from "../../../redux/selectors/currentWorkout";

const deviceHeight = Dimensions.get("window").height;

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const ExercisesBottomSheet: FC<Props> = ({
  current_exercises,
  setSelectedExercise
}) => {
  const bottomSheetHeight =
    current_exercises.length * 50 > deviceHeight * 0.8
      ? deviceHeight * 0.8
      : current_exercises.length * 50;

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        snapPoints={[bottomSheetHeight + 50, 50]}
        initialSnap={1}
        renderContent={() => {
          const currentSelectedIndex = current_exercises.indexOf(
            current_exercises.find(exercise => exercise.selected_exercise)
          );
          const upcomingExercises = current_exercises.slice(
            currentSelectedIndex
          );
          const previousExercises = current_exercises.slice(
            0,
            currentSelectedIndex
          );

          return (
            <View
              style={{
                ...styles.bottomSheetContent,
                height: current_exercises.length * 50 + 50
              }}
            >
              {upcomingExercises.map(exercise => (
                <TouchableHighlight
                  onPress={() => setSelectedExercise(exercise.order)}
                  key={exercise.exercise_id}
                >
                  <ExercisePreview order={exercise.order} />
                </TouchableHighlight>
              ))}
              {previousExercises.map(exercise => (
                <TouchableHighlight
                  onPress={() => setSelectedExercise(exercise.order)}
                  key={exercise.exercise_id}
                >
                  <ExercisePreview order={exercise.order} />
                </TouchableHighlight>
              ))}
            </View>
          );
        }}
      />
    </View>
  );
};

const mapState = (state: AppState) => ({
  current_exercises: getCurrentExercises(state)
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({
  setSelectedExercise: (order: number) => dispatch(setSelectedExercise(order))
});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  mapDispatch
)(ExercisesBottomSheet);

const styles = StyleSheet.create({
  bottomSheetContent: {
    backgroundColor: "white"
  }
});
