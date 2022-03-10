import { useState } from "react";
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Platform,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
const TrueFalse = ({
	selectedMovie,
	setScene,
	increaseWinningStreak,
	resetWinningStreak,
}) => {
	const [selectedAnswer, setSelectedAnswer] = useState();
	const answer = selectedMovie?.answer;

	const isCorrect = (selection) => {
		setSelectedAnswer(selection);
		if (selection === answer) {
			setTimeout(() => {
				increaseWinningStreak();
				setScene("CorrectAnswer");
			}, 1000);
		} else {
			setTimeout(() => {
				resetWinningStreak();
				setScene("GameOver");
			}, 1000);
		}
	};

	const getIcon = (button) => {
		if (typeof selectedAnswer === "undefined") {
			return <FontAwesome name="star" size={12} color="#401323" />;
		}
		if (button !== answer) {
			return <FontAwesome name="close" size={16} color="#CA3D45" />;
		}
		if (button === answer) {
			return <FontAwesome name="check" size={16} color="green" />;
		}
	};
	const getColorT = (button) => {
		if (typeof selectedAnswer === "undefined") {
			return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"black"}}>True </Text>;
		}
		if (button !== answer) {
			return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "line-through",color:"red"}}>True </Text>;
		}
		if (button === answer) {
			return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"green"}}>True </Text>;
		}
	};
	const getColorF = (button) => {
		if (typeof selectedAnswer === "undefined") {
			return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"black"}}>False </Text>;
		}
		if (button !== answer) {
			return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "line-through",color:"red"}}>False </Text>;
		}
		if (button === answer) {
			return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"green"}}>False </Text>;
		}
	};
	const getTextDecoration = (button) => {
		if (typeof selectedAnswer === "undefined") {
			return "none";
		}
		if (button !== answer) {
			return "line-through";
	

		}
	};
	

	return (
		<View style={styles.container}>
			<View
				style={{
					margin: Platform.OS === "android" ? 1 : 4,
					flex: 1,
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						marginTop: Platform.OS === "ios" ? 20 : 0,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ImageBackground
						source={require("../Images/ticket2.png")}
						style={{ width: 160, height: 80, padding: 10 }}
					>
						<View
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<TouchableOpacity onPress={() => isCorrect(true)}>
								<View style={{ flexDirection: "row" }}>
									{getIcon(true)}
									{getColorT(true)}
									{getIcon(true)}
								</View>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>
				<View style={{ marginTop: Platform.OS === "ios" ? 80 : 20 }}>
					<ImageBackground
						source={require("../Images/ticket2.png")}
						style={{ width: 160, height: 80, padding: 10 }}
					>
						<View
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<TouchableOpacity onPress={() => isCorrect(false)}>
								<View style={{ flexDirection: "row" }}>
									{getIcon(false)}
									{getColorF(false)}
									{getIcon(false)}
								</View>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>
			</View>
		</View>
	);
};
const mapStateToProps = (state) => ({
	questions: state.questions,
	selectedMovie: state.selectedMovie,
});

function mapDispatchToProps(dispatch) {
	return {
		setScene: (name) =>
			dispatch({
				type: "SET_SCENE",
				name,
			}),
		increaseWinningStreak: () =>
			dispatch({
				type: "INCREASE_WINNING_STREAK",
			}),
		resetWinningStreak: () =>
			dispatch({
				type: "RESET_WINNING_STREAK",
			}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TrueFalse);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		paddingHorizontal: 20,
		flexDirection: "row",
	},
});
