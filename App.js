import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import AppText from "./src/components";
import Card from "./src/components/Card";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./src/components/Icon";
import Screen from "./src/components/Screen";
import ListItem from "./src/components/ListItem";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import { useState } from "react";
import AppTextInput from "./src/components/AppTextInput";
import AppPicker from "./src/components/AppPicker";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  //    <GestureHandlerRootView>

  return (
    <GestureHandlerRootView>
      <Screen>
        <LoginScreen />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          onChangeText={(text) => setPassword(text)}
          placeholder="bshor"
          secureTextEntry={true}
          textContentType="password"
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "D3D3D3",
  },
});
