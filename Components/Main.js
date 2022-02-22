import { useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";

function Main({ setScene, setMovies }) {
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
        alt="Guess The Movie"
      />
      <Pressable onPress={() => setScene("Question")} style={styles.start}>
        <Text>Start</Text>
      </Pressable>
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
  };
}

export default connect(null, mapDispatchToProps)(Main);
