import axios from "axios";
import { useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";

function Main({ setScene, setMovies,  }) {

  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  //   // axios.all([
  //   //   FetchApi(),
  //   //   getPerformerName(550),
  //   // ]).then(
  //   //    axios.spread((...allData) => {
  //   //     const allDataMovieTitle = allData[0];
  //   //     const allDataPerformerName = allData[1].cast[0].name;
  //   //     setMovies(allDataMovieTitle);
  //   //     setPerformerName(allDataPerformerName);
  //   //   })
  //   // )
  // }, []);

  
  

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
      setPerformerName: (performerName) =>
      dispatch({
        type: "SET_PERFORMER_NAME",
        performerName,
      }),
  };
}

export default connect(null, mapDispatchToProps)(Main);
