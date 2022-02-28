import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import Card from "../components/Card";
import NumberGuessContainer from "../components/NumberGuessContainer";
import Colors from "../constant/Colors";
import Fonts from "../constant/Fonts";
import MainButton from "../components/MainButton";

export default function FinishScreen(props) {
	return (
		<View style={styles.screen}>
			<Card style={{ justifyContent: "center" }}>
				<Text style={{ ...Fonts.title, fontSize: 20 }}>Opponent has chosen well</Text>
				<NumberGuessContainer chosenNumber={props.chosenNumber} title='Your Number was'></NumberGuessContainer>
				<Text style={{ ...Fonts.body, textAlign: "center", fontSize: 20 }}>
					Opponent took <Text style={styles.highlight}>{props.guessesNum}</Text> rounds to guess your number correctly
				</Text>
				<View style={styles.buttonView}>
					<MainButton style={styles.button} backgroundColor={Colors.accent} title='Restart Game' onPress={props.onRestart.bind(this)}>
						Restart Game
					</MainButton>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "flex-start", //this is default
		justifyContent: "center",
	},
	buttonView: {
		marginTop: 40,
	},
	highlight: {
		color: Colors.primary,
		fontWeight: "bold",
	},
	button: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		borderRadius: 10,
	},
});
