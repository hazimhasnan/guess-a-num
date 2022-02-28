import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Card from "./Card";
import Colors from "../constant/Colors";

export default function NumberConfirmationContainer(props) {
	return (
		<Card style={styles.card}>
			<Text style={styles.text}>You Picked:</Text>
			<Card style={styles.innerCard}>
				<Text style={{ ...styles.text, fontWeight: "bold", fontSize: 30 }}>{props.chosenNumber}</Text>
			</Card>
			{/* <Text style={styles.startText}>LET'S START</Text> */}
			<Button
				title="LET'S STARTS"
				color={Colors.primary}
				onPress={() => {
					props.startGameHandler(props.chosenNumber);
				}}
			/>
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
