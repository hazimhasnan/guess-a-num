import { View, Text, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Header = (props) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		minHeight: 50,
		backgroundColor: "#7F00FF",
		padding: 10,
		// marginTop: 40,
	},
	headerText: {
		color: "#FFF",
		fontSize: 18,
		fontFamily: "open-sans-bold",
	},
});

export default Header;
