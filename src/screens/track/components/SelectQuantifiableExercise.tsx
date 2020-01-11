import React, { FC } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../../types/actions";
import { quantifiableExercises } from "../../../workoutGenerator/exerciseDictionary";
import { TouchableOpacity } from "react-native-gesture-handler";
import { setSelectedQuantifiableExercise } from "../../../redux/actionCreators/workoutHistoryActions";
import { getSelectedQuantifiableExercise } from "../../../redux/selectors/workoutHistory";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps;

type OwnProps = {};

const SelectQuantifiableExercise: FC<Props> = ({
  selectedQuantifiableExercise,
  setSelectedQuantifiableExercise
}) => (
  <View>
    <FlatList
      data={quantifiableExercises}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setSelectedQuantifiableExercise(item)}>
          <Text
            style={
              selectedQuantifiableExercise === item
                ? styles.selectedExercise
                : styles.notSelectedExercise
            }
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const mapState = (state: AppState) => ({
  selectedQuantifiableExercise: getSelectedQuantifiableExercise(state)
});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({
  setSelectedQuantifiableExercise: (quantifiableExercise: string) =>
    dispatch(setSelectedQuantifiableExercise(quantifiableExercise))
});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  mapDispatch
)(SelectQuantifiableExercise);

const styles = StyleSheet.create({
  selectedExercise: {
    fontWeight: "bold"
  },
  notSelectedExercise: {
    fontWeight: "normal"
  }
});
