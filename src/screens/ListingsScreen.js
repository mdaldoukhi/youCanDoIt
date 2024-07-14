import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
export default function ListingsScreen() {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      Image: require("../assets/redj.jpg"),
    },
    {
      id: 2,
      title: " Couch for sale",
      price: 1000,
      Image: require("../assets/couch.jpeg"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.Image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    pading: 20,
    backgroundColor: colors.Light,
  },
});
