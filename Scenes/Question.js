import { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	Pressable,
  ImageBackground,
  useWindowDimensions
} from "react-native";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";
import Timer from "../Components/Timer";
import TrueFalse from "../Components/TrueFalse";
import Drive from "../Images/drive-in-movie.jpg";

function Question({ selectedMovie, movies, setMovies }) {
  const [timerCount, setTimerCount] = useState(10);
  const { width, height } = useWindowDimensions();
	const widthBreakpoint = 500;

	useEffect(() => {
		FetchApi().then((res) => setMovies(res));
	}, []);

	return (
		// <ImageBackground source={Drive}  style={styles.image}>
		<View style={styles.container}>
			{/* <View style={styles.container}> */}
			<View style={[width > widthBreakpoint ? styles.title : styles.titleMobile]}>
				{/* <Timer timerCount={timerCount} setTimerCount={setTimerCount} /> */}
				<View style={styles.heading}>
					<Text style={styles.heading}>Question</Text>
				</View>
				<GenerateQuestion movies={movies} />
				<Text style={styles.heading}>{movies && selectedMovie?.question}</Text>
			</View>
			<View style={styles.titleWrap}>
				<TrueFalse />
			</View>
		</View>
		// {/* </View> */}
		// </ImageBackground>
	);
}

function mapStateToProps(state) {
	return {
		winningStreak: state.winningStreak,
		movies: state.movies,
		selectedMovie: state.selectedMovie,
		scene: state.scene,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		increaseWinningStreak: () =>
			dispatch({
				type: "INCREASE_WINNING_STREAK",
			}),
		resetWinningStreak: () =>
			dispatch({
				type: "RESET_WINNING_STREAK",
			}),
		setMovies: (movies) =>
			dispatch({
				type: "SET_MOVIES",
				movies,
			}),
		setScene: (name) =>
			dispatch({
				type: "SET_SCENE",
				name,
			}),
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#401323",
		alignItems: "center",
		justifyContent: "center",
		height: "60%",
		width: "100%",
		flexDirection: "column",
		paddingTop: 50,
	},
	titleWrap: {
		flexDirection: "row",
		paddingTop: 100,
	},
	title: {
		shadowColor: "#1a1a1a",
		shadowRadius: 10,
		textAlign: "center",
		color: "#F2D379",
		backgroundColor: "#292840",
		fontWeight: "bold",
		fontSize: 20,
		height: 335,
		width: 500,
	},
	titleMobile: {
		shadowColor: "#1a1a1a",
		shadowRadius: 10,
		textAlign: "center",
		color: "#F2D379",
		backgroundColor: "#292840",
		fontWeight: "bold",
		fontSize: 20,
		height: 225,
		width: 375,
	},
	heading: {
		marginBottom: 8,
		color: "#F2D379",
		paddingTop: 20,
	},
	// subtitle: {
	// 	textAlign: "center",
	// 	borderWidth: 2,
	// 	borderStyle: "dashed",
	// 	color: "#F2D379",
	// 	shadowRadius: 10,
	// 	fontWeight: "bold",
	// 	padding: 5,
	// 	fontSize: 10,
	// 	paddingHorizontal: 70,
	// 	// height: 150,
	// },
	image: {
		justifyContent: "center",
		paddingTop: 20,
		margin: 10,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
