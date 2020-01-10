import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { Dispatch } from "redux";
import { AppAction } from "../../types/actions";
import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent
} from "react-navigation-stack";

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  OwnProps &
  NavigationStackScreenProps;

type OwnProps = {};

const FaqScreen: FC<Props> & NavigationStackScreenComponent = ({
  navigation
}) => (
  <View>
    <Text>faq</Text>
  </View>
);

FaqScreen.navigationOptions = {};

const mapState = (state: AppState) => ({});

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({});

export default connect<
  ReturnType<typeof mapState>,
  ReturnType<typeof mapDispatch>,
  OwnProps
>(
  mapState,
  mapDispatch
)(FaqScreen);
