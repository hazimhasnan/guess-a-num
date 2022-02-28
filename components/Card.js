import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "red",
    shadowColor: "black",
    backgroundColor: "white",
    padding: 40,
    elevation: 10,
    marginVertical: 10,
  },
});
