import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/redj.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jaket for sale</AppText>
        <AppText style={styles.price}>$1000</AppText>
        <View style={styles.usercontainer}>
          <ListItem
            image={require("../assets/bebe.png")}
            title="Bashayer Almutairi"
            subTitle="4 listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },

  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontWeight: "500",
    color: colors.primary,
  },
  usercontainer: {
    marginVertical: 40,
  },
});
