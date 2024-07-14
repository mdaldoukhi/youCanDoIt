import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native";
import colors from "../config/colors";
console.log(Constants);
const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 50,
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
  },
});
