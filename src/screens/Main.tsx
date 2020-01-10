import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import WorkoutScreen from "./workout/WorkoutScreen";
import { createAppContainer, NavigationParams } from "react-navigation";
import {
  createStackNavigator,
  NavigationStackScreenComponent
} from "react-navigation-stack";
import TrackScreen from "./track/TrackScreen";
import SettingsScreen from "./settings/SettingsScreen";
import FaqScreen from "./faq/FaqScreen";

type Props = OwnProps;

type OwnProps = {};

const Main: NavigationStackScreenComponent<NavigationParams, Props> = ({
  navigation
}) => (
  <SafeAreaView>
    <Text>Hey</Text>
    <Button title="go to wkts" onPress={() => navigation.navigate("Workout")} />
    <Button title="go to track" onPress={() => navigation.navigate("Track")} />
    <Button title="go to faq" onPress={() => navigation.navigate("Faq")} />
    <Button
      title="go to settings"
      onPress={() => navigation.navigate("Settings")}
    />
  </SafeAreaView>
);

Main.navigationOptions = { headerShown: false };

const MainStack = createStackNavigator({
  Home: Main,
  Workout: WorkoutScreen,
  Track: TrackScreen,
  Faq: FaqScreen,
  Settings: SettingsScreen
});

const MainView = createAppContainer(MainStack);

export default MainView;
