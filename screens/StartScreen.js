import { View, Text, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import React, { useState } from "react";
import Colors from "../constant/Colors";
import Input from "../components/Input";
import Card from "../components/Card";
import NumberConfirmationContainer from "../components/NumberConfirmationContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isConfirmed, setIsConfirmed] = useState(false);
	const [chosenNumber, setChosenNumber] = useState(0);

	const inputHandler = (value) => {
		setEnteredValue(value.replace(/[^0-9]/g, ""));
	};

	const resetInputHandler = () => {
		setEnteredValue("");
		setIsConfirmed(false);
	};

	const confirmInputHandler = () => {
		if (isNaN(enteredValue) || enteredValue < 0 || enteredValue > 99 || enteredValue === "") {
			Alert.alert("Input Error", "Number cannot be blank, less than 0 or more than 99", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
		} else {
			setEnteredValue("");
			setChosenNumber(parseInt(enteredValue));
			Keyboard.dismiss();
			setIsConfirmed(true);
		}
	};

	let ConfirmedComponent;
	if (isConfirmed) {
		ConfirmedComponent = <Card></Card>;
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card>
					<Text style={styles.body}>Select a Number</Text>
					<Input
						style={styles.input}
						autoCorrect={false}
						keyboardType='number-pad'
						maxLength={2}
						autoCapitalize='none'
						blurOnSubmit
						onChangeText={inputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<MainButton
								backgroundColor={Colors.accent}
								onPress={() => {
									resetInputHandler();
								}}>
								Reset
							</MainButton>
						</View>
						<View style={styles.button}>
							<MainButton onPress={confirmInputHandler}>Confirm</MainButton>
						</View>
					</View>
				</Card>
				{isConfirmed && (
					<NumberConfirmationContainer
						style={styles.NumberConfirmationContainer}
						chosenNumber={chosenNumber}
						startGameHandler={props.startGameHandler}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "flex-start", //this is default
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		fontFamily: "open-sans-bold",
	},
	body: {
		fontFamily: "open-sans",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 0,
	},
	button: {
		marginHorizontal: 10,
		width: 90,
	},
	input: {
		width: 100,
		borderColor: "#7F00FF",
		borderWidth: 1,
		borderRadius: 10,
		maxWidth: "80%",
		alignItems: "center",
		paddingVertical: 5,
		paddingHorizontal: 20,
		marginVertical: 10,
		textAlign: "center",
	},
	NumberConfirmationContainer: {
		marginTop: 100,
	},
});

export default StartGameScreen;
