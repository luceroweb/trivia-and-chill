import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";
import Timer from "../Components/Timer";
import TrueFalse from "../Components/TrueFalse";
import MultipleChoice from "../Components/MultipleChoice";
import Drive from "../Images/drive-in-movie.jpg";
import Badge from "../Components/Badge";

function Question({ selectedMovie, movies, setMovies }) {
  const [timerCount, setTimerCount] = useState(10);
  const { width, height } = useWindowDimensions();
  const widthBreakpoint = 700;

  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground
        resizeMode={"cover"}
        source={Drive}
        style={[width > widthBreakpoint ? styles.image : styles.imageMobile]}
      >
        <Text>
          <View
            style={[
              width > widthBreakpoint
                ? styles.container
                : styles.containerMobile,
            ]}
          >
            <View
              style={[
                width > widthBreakpoint ? styles.title : styles.titleMobile,
              ]}
            >
              {/* <Timer timerCount={timerCount} setTimerCount={setTimerCount} /> */}
              <View style={styles.heading}>
                <Text
                  style={{
                    color: "#F2D379",
                    fontFamily: "Limelight_400Regular",
                    fontSize: 30,
                  }}
                >
                  Question
                </Text>
              </View>
              <Text style={styles.q}>
                <GenerateQuestion movies={movies} />
              </Text>
              <Text style={styles.q}>{movies && selectedMovie?.question}</Text>
            </View>
            <View
              style={[
                width > widthBreakpoint
                  ? styles.titleWrap
                  : styles.titleWrapMobile,
              ]}
            >
              <Text>
                <TrueFalse />
              </Text>
            </View>
          </View>
        </Text>
      </ImageBackground>
    );
  }
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
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    width: "100%",
    flexDirection: "column",
  },
  containerMobile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    width: "100%",
    flexDirection: "column",
  },
  titleWrap: {
    flexDirection: "row",
    padding: 20,
  },
  titleWrapMobile: {
    flexDirection: "row",
    paddingTop: 100,
    paddingBottom: 3,
    // marginHorizontal: 10,
  },
  title: {
    shadowColor: "#1a1a1a",
    shadowRadius: 10,
    textAlign: "center",
    color: "#F2D379",
    backgroundColor: "#292840",
    fontWeight: "bold",
    fontSize: 20,
    height: 300,
    width: 615,
  },
  titleMobile: {
    shadowColor: "#1a1a1a",
    shadowRadius: 10,
    textAlign: "center",
    color: "#F2D379",
    backgroundColor: "#292840",
    fontWeight: "bold",
    fontSize: 20,
    height: 390,
    width: 300,
    marginHorizontal: 30,
  },
  heading: {
    // marginBottom: 8,
    color: "#F2D379",
    paddingTop: 10,
    paddingRight: 20,
    alignSelf: "center",
  },
  q: {
    // marginBottom: 8,
    color: "#F2D379",
    // paddingTop: 10,
    marginHorizontal: 20,
  },

  image: {
    justifyContent: "center",
    paddingBottom: 75,
    // margin: 10,
    paddingTop: 10,
  },
  imageMobile: {
    justifyContent: "center",
    paddingBottom: 100,
    paddingTop: 25,
    // margin: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
