import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constant/Colors";

export default function MainButton(props) {
	return (
		<TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
			<View style={{ ...styles.button, backgroundColor: props.backgroundColor || styles.button.backgroundColor, ...props.style }}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 12,
	},
	buttonText: {
		flexDirection: "row",
		textAlign: "center",
		color: "white",
		fontFamily: "open-sans",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
