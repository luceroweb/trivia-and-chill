import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Alert,
  Modal,
} from "react-native";

import { useState } from "react";
// import ConfettiCannon from "react-native-confetti-cannon";
import { connect } from "react-redux";
import Trailer from "../Components/Trailer";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import ticket from "../Images/ticket.png";
import drivein from "../Images/drive-in-movie.jpg";
import Badge from "../Components/Badge";

const CorrectAnswer = ({ selectedMovie, setScene, resetSelectedMovie }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const { width: currentWidth, height: currentHeight } = useWindowDimensions();
  const handleNextQuestion = () => {
    setScene("Question");
    resetSelectedMovie();
  };

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  const maxWidth = 2000;
  const minWidth = 560;
  const optimalHeight = 1080;
  // calculates how much margin should be added on top of the video trailer based on the current width size
  const currentMarginSize = (maxWidth - currentWidth) / 4;
  // video margin size will not increase above maxWidth - minWidth
  const maxMarginSize = (maxWidth - minWidth) / 4;

  // currently calculated margin size will not decrease below 0 as the current width size gets bigger than the maxWidth
  const minMarginBound = Math.max(currentMarginSize, 0);
  // video margin will not increase above the calculated maxMarginSize
  const maxMarginBound = Math.min(minMarginBound, maxMarginSize);

  let videoMarginTop = maxMarginBound;
  videoMarginTop += (currentHeight - optimalHeight) / 2;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.drivein}
          source={drivein}
          resizeMode="cover"
        >
          {/* <ConfettiCannon
            count={100}
            origin={{ x: -10, y: 0 }}
            fadeOut={true}
          /> */}
          <View
            style={[styles.scrollViewContent, { marginTop: videoMarginTop }]}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={{ alignItems: "center" }}>
                <View style={[styles.videoContainer]}>
                  <Trailer movieId={selectedMovie?.movieId} />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Continue</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <View style={styles.textContainer}>
              <Text style={styles.h2}>
                Correct! <Badge />
              </Text>
            </View>

            <Pressable style={[styles.button]} onPress={handleNextQuestion}>
              <ImageBackground style={styles.ticketButton} source={ticket}>
                <Text style={styles.ticketText}>Next Question!</Text>
              </ImageBackground>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

function mapStateToProps(state) {
  return {
    scene: state.scene,
    selectedMovie: state.selectedMovie,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
    resetSelectedMovie: () =>
      dispatch({
        type: "RESET_SELECTED_MOVIE",
      }),
  };
}

const styles = StyleSheet.create({
  borderStyleDebug: {
    borderWidth: 2,
    borderColor: "black",
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 20,
  },
  videoContainer: {
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "transparent",
    minWidth: 320, // 320px is iPhone 5/SE size
    width: "50%",
  },
  button: {
    flexShrink: 1,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  textContainer: {
    // flexGrow: 1, // pushes textContainer upwards
    // marginVertical: 50,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "azure",
    opacity: 0.8,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400,
  },
  h2: {
    fontSize: 36,
    justifyContent: "center",
    alignItems: "center",
    // fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "Limelight_400Regular",
  },
  h3: {
    fontSize: 24,
    // fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "Limelight_400Regular",
  },
  ticketButton: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: 224,
    height: 116,
    justifyContent: "center",
  },
  ticketText: {
    fontFamily: "Limelight_400Regular",
    position: "absolute",
    alignSelf: "center",
  },
  drivein: {
    justifyContent: "center",
    height: "100%",
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
