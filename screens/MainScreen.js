import { StyleSheet, Text, View, Button, Alert, ScrollView } from "react-native";
import React, { useRef } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import NumberGuessContainer from "../components/NumberGuessContainer";
import Card from "../components/Card";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import GuessedListItem from "../components/GuessedListItem";
import Colors from "../constant/Colors";
import MainButton from "../components/MainButton";

const generateRandomNum = (min, max, exclusion) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNum = Math.floor(Math.random() * (max - min)) + min;
	return randomNum === exclusion ? generateRandomNum(min, max, exclusion) : randomNum;
};

export default function MainScreen(props) {
	const generatedRandomNum = generateRandomNum(1, 100, props.chosenNumber);
	const [randomNum, setRandomNum] = useState(generatedRandomNum);
	const [guessedValues, setGuessedValues] = useState([]);
	const [rounds, setRounds] = useState(0);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		console.log("-----");
		console.log(props.chosenNumber);
		console.log(randomNum);
		console.log("-----");
		if (props.chosenNumber === randomNum) {
			console.log("inside if!!");
			props.finishGameHandler(rounds);
			console.log("inside if!!");
		}
	}, [props.chosenNumber, randomNum, props.finishGameHandler]);

	const guessHandler = (direction) => {
		if ((direction === "lower" && randomNum < props.chosenNumber) || (direction === "higher" && randomNum > props.chosenNumber)) {
			Alert.alert("Cheating Alert!", "Don't try to cheat out of this", [{ text: "Try again", style: "cancel" }]);
			return;
		}

		if (direction === "lower") {
			currentHigh.current = randomNum;
		} else {
			currentLow.current = randomNum + 1;
		}

		const nextNumber = generateRandomNum(currentLow.current, currentHigh.current, randomNum);
		setRandomNum(nextNumber);
		setRounds((curRounds) => curRounds + 1);
		setGuessedValues((currValues) => [randomNum, ...currValues]);
		console.log(rounds);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberGuessContainer chosenNumber={randomNum} title='Opponent guesses'></NumberGuessContainer>
			<Card style={styles.buttonContainer}>
				<MainButton
					onPress={() => {
						guessHandler("lower");
					}}>
					<AntDesign name='down' size={20}></AntDesign>
					<Text>Lower</Text>
				</MainButton>
				<MainButton
					onPress={() => {
						guessHandler("higher");
					}}>
					<Text>Greater</Text>
					<AntDesign name='up' size={20}></AntDesign>
				</MainButton>
			</Card>
			<ScrollView style={styles.listItem}>
				{guessedValues.map((item) => {
					return <GuessedListItem value={item} key={item} />;
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20,
		width: 300,
		paddingVertical: "5%",
		maxWidth: "80%",
	},
	listItem: {
		width: "70%",
	},
});
