import axios from "axios";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  scrollView,
} from "react-native";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import { FontAwesome5 } from "@expo/vector-icons";

function Main({ setScene, setMovies}) {

  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  return (
		<View style={styles.container}>
			<Image
				style={{ width: "80%", aspectRatio: 7 / 1 }}
				source={require("../Images/bw-header-logo.png")}
				alt="BitWise Industries"
			/>
			<Image
				style={{ width: "45%", aspectRatio: 5 / 1 }}
				source={require("../Images/teammvp-header-logo.png")}
				alt="Team MVP"
			/>
			<Image
				style={{ width: "45%", aspectRatio: 5 / 1 }}
				source={require("../Images/presents-header-logo.png")}
				alt="Presents"
			/>
			<Image
				style={{ width: "75%", aspectRatio: 1 }}
				source={require("../Images/gtm-header-logo.png")}
				alt="Trivia & Chill"
			/>

			<ImageBackground
				source={require("../Images/ticket.png")}
				style={{ width: 160, height: 80 }}
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
					<Pressable onPress={() => setScene("Question")}>
						<Text>Start</Text>
					</Pressable>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  start: {
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    position: "relative",
    top: -78,
    marginLeft: 42,
    fontSize: 24,
  },
  border: {
    borderWidth: 4,
    borderColor: "#401323",
    width: 85,
    marginLeft: 27,
    height: 54,
    top: -123,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
    setMovies: (movies) =>
      dispatch({
        type: "SET_MOVIES",
        movies,
      }),
      setPerformerName: (performerName) =>
      dispatch({
        type: "SET_PERFORMER_NAME",
        performerName,
      }),
  };
}

export default connect(null, mapDispatchToProps)(Main);
