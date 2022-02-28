import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {},
});
