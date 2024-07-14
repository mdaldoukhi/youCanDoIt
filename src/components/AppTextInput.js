import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTextInput = ({ icon, placeholder, ...otherProps }) => {
  console.log("Placeholder:", placeholder);

  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
        placeholder={{ placeholder }}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.Light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center", // Ensure children are centered vertically
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: defaultStyles.colors.dark,
  },
});
