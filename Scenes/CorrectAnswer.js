import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  Platform,
  ImageBackground,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { connect } from "react-redux";
import Trailer from "../Components/Trailer";
import { useFonts, Limelight_400Regular } from '@expo-google-fonts/limelight';
import ticket from '../Images/ticket.png';
import drivein from '../Images/drive-in-movie.jpg';

const CorrectAnswer = ({ selectedMovie, setScene }) => {
  const { width } = useWindowDimensions();
  const handleNextQuestion = () => {
    setScene("Question");
  };

const [font] = useFonts({
  Limelight_400Regular,
});

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={styles.drivein} source={drivein} resizeMode='cover'>
      <ConfettiCannon count={100} origin={{ x: -10, y: 0 }} fadeOut={true} />
      <ScrollView
        // todo: replace paddingTop value with useSafeAreaInsets
        style={[styles.scrollViewOuter, { paddingTop: 20 }]}
        contentContainerStyle={[
          styles.scrollViewContent,
          { marginHorizontal: width > 1000 ? 100 : 0 },
        ]}
      >
          <View
            style={[
              styles.videoContainer,
            ]}
          >
            <Trailer movieId={selectedMovie?.movieId} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.h2}>Correct!</Text>
            <Text style={styles.h3}>Enjoy this video trailer</Text>
          </View>

          <Pressable
            style={[styles.button]}
            onPress={handleNextQuestion}
          >
            <ImageBackground style={styles.ticketButton} source={ticket}>
              <Text style={styles.ticketText}>Next Question!</Text>
            </ImageBackground>
          </Pressable>
      </ScrollView>
      </ImageBackground>
    </View>
  );
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
  };
}

const styles = StyleSheet.create({
  borderStyleDebug: {
    borderWidth: 2,
    borderColor: "black",
  },
  scrollViewOuter: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 20,
  },
  videoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
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
    flexGrow: 1, // pushes textContainer upwards
    marginVertical: 50,
    alignItems: "center",
  },
  h2: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: 'Limelight_400Regular',
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: 'Limelight_400Regular',
  },
  ticketButton: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 224,
    height: 116,
    justifyContent: 'center',
  },
  ticketText: {
    fontFamily: 'Limelight_400Regular',
    position: 'absolute',
    alignSelf: 'center',
  },
  drivein: {
    justifyContent: 'center',
    height: '100%',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
