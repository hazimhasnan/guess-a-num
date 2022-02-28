import { StyleSheet, Text, View, ImageBackground } from "react-native";

import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import MainScreen from "./screens/MainScreen";
import { useEffect, useState } from "react/cjs/react.development";
import FinishScreen from "./screens/FinishScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Dummy from "./components/Dummy";

const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

export default function App() {
	const [userNumber, setUserNumber] = useState(0);
	const [numGuesses, setNumGuesses] = useState(0);
	const [isDataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		fetchFonts().then(() => {
			setDataLoaded(true);
		});
	}, []);

	if (!isDataLoaded) {
		// return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={}/>;
		return <AppLoading />;
	}

	const configureNewGameHandler = () => {
		setUserNumber();
		setNumGuesses(0);
	};

	const startGameHandler = (chosenNumber) => {
		setUserNumber(chosenNumber);
	};

	const finishGameHandler = (numGuesses) => {
		setNumGuesses(numGuesses);
	};

	let mainComponent = <StartScreen startGameHandler={startGameHandler}></StartScreen>;
	let title = "Guess a Number Game";
	if (userNumber && numGuesses <= 0) {
		mainComponent = <MainScreen chosenNumber={userNumber} finishGameHandler={finishGameHandler}></MainScreen>;
		title = "Guess a number";
	} else if (numGuesses > 0) {
		mainComponent = <FinishScreen chosenNumber={userNumber} guessesNum={numGuesses} onRestart={configureNewGameHandler} />;
		title = "Game over";
	}

	return (
		<View style={styles.container}>
			<ImageBackground resizeMode='stretch' source={require("./assets/background.jpg")} style={styles.image}>
				<Header title={title} />
				{mainComponent}
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
