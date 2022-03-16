import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
// import ConfettiCannon from "react-native-confetti-cannon";
import { connect } from "react-redux";
import Trailer from "../Components/Trailer";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import ticket from "../Images/ticket.png";
import drivein from "../Images/drive-in-movie.jpg";
import driveinMobile from '../Images/drive-in-movie-mobile.jpg';
import driveinMobileMini from '../Images/drive-in-movie-mobile-mini.jpg';
import Badge from "../Components/Badge";

const CorrectAnswer = ({ selectedMovie, setScene, resetSelectedMovie }) => {
  const { width: currentWidth, height: currentHeight } = useWindowDimensions();
  const handleNextQuestion = () => {
    setScene("Question");
    resetSelectedMovie();
  };

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  let backgroundImage;
  let contentViewStyle;
  let videoWidth;
  
  if (currentWidth > 860) {
    backgroundImage = drivein;
    contentViewStyle = styles.wrap;
    videoWidth = "50%";
  } else if (currentWidth > 580) {
    backgroundImage = driveinMobile;
    contentViewStyle = styles.wrapMobile;
    videoWidth = "75%";
  } else if (currentWidth > 430) {
    backgroundImage = driveinMobileMini;
    contentViewStyle = styles.wrapMini;
    videoWidth = "75%";
  } else {
    backgroundImage = driveinMobileMini;
    contentViewStyle = styles.wrapSuperMini;
    videoWidth = "75%";
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.drivein}
          source={backgroundImage}
          resizeMode="cover"
        >
          {/* <ConfettiCannon
            count={100}
            origin={{ x: -10, y: 0 }}
            fadeOut={true}
          /> */}
          <View
            style={[styles.scrollViewContent, contentViewStyle]}
          >
            <View style={{ alignItems: 'center', }}>
              <View
                style={[
                  styles.videoContainer,
                  { width: videoWidth },
                  videoContainer
                ]}
              >
                <Trailer movieId={selectedMovie?.movieId} />
              </View>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.h2}>
                Correct! <Badge />
              </Text>

              <Text style={styles.h3}>Enjoy this video trailer</Text>
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
  wrap: {
    // marginTop: 10,
  },
  wrapMobile: {
    marginTop: "10%",
  },
  wrapMini: {
    marginTop: "25%",
  },
  wrapSuperMini: {
    marginTop: 115,
  },
  borderStyleDebug: {
    borderWidth: 2,
    borderColor: "black",
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  videoContainer: {
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "transparent",
    minWidth: 375, // 320px is iPhone 5/SE size
    width: '50%',
  },
  button: {
    flexShrink: 1,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "transparent",
    marginTop: 50,
  },
  textContainer: {
    // flexGrow: 1, // pushes textContainer upwards
    // marginVertical: 50,
    alignSelf: 'center',
    alignItems: "center",
    backgroundColor: 'azure',
    opacity: 0.8,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
    marginTop: 50,
  },
  h2: {
    fontSize: 36,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
