import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constant/Colors";
import Fonts from "../constant/Fonts";

export default function GuessedListItem(props) {
	return (
		<View style={{ borderWidth: 1, borderRadius: 4, borderStyle: "dotted", marginVertical: 8, padding: 5, paddingHorizontal: 20 }}>
			<Text style={styles.text}># {props.value}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "black",
		fontFamily: Fonts.body.fontFamily,
		fontSize: 20,
	},
});
