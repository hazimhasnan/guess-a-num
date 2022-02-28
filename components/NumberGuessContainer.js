import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Card from "./Card";
import Colors from "../constant/Colors";

export default function NumberGuessContainer(props) {
	return (
		<Card style={styles.card}>
			<Text style={styles.text}>{props.title}</Text>
			<Card style={styles.innerCard}>
				<Text style={{ ...styles.text, fontWeight: "bold", fontSize: 30 }}>{props.chosenNumber}</Text>
			</Card>
		</Card>
	);
}

const styles = StyleSheet.create({
	innerCard: {
		marginTop: 20,
		backgroundColor: "lightsteelblue",
		padding: 20,
		marginBottom: 20,
	},
	card: {
		padding: 20,
	},
	text: {
		fontSize: 22,
	},
	startText: {
		fontSize: 22,
		color: "limegreen",
		fontWeight: "bold",
	},
});
