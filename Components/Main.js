import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  scrollView,
  Animated,
  Platform
} from "react-native";
import { Audio } from 'expo-av';
import clapper from '../Sounds/clapper.wav'
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";

function Main({ setScene, setMovies }) {

  const clapperFade = useRef(new Animated.Value(1)).current;
  const clapperFadeIn = useRef(new Animated.Value(0)).current;
  // const sound = useRef(new Animated.Value(0)).current;
  const textFade = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(clapper);
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);
  
  
  useEffect(() => {
    playSound();
    Animated.sequence(
      [
        Animated.timing(clapperFade, {
          toValue: 0,
          duration: 100,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.parallel(
          [
            Animated.timing(clapperFadeIn, {
              toValue: 1,
              duration: 100,
              useNativeDriver: false,
            
            }),
            
          ]
        ),
        Animated.timing(textFade, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start()
  }, [])

  let [fontsLoaded] = useFonts({ Limelight_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {



    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            flex: 1,
            flexDirection: "column",
            // width: "100%",
            aspectRatio: 4 / 3,
          }}
          source={require("../Images/marquee.jpeg")}
          resizeMode="contain"
          alt="movie theatre with marquee sign with cars parked in front"
        >
          <Animated.View style={{ opacity: clapperFade, position: 'absolute', width: "85%", alignSelf: 'center' }}>
            <Image
              style={{ aspectRatio: 1280 / 1117, zIndex: 100 }}
              source={require("../Images/clapper2-open.png")}
              alt="BitWise Industries"
              resizeMode="cover"
            />
          </Animated.View>
          <Animated.View style={{ opacity: clapperFadeIn, position: 'absolute', width: "85%", alignSelf: 'center' }}>
            <Image
              style={{ aspectRatio: 1280 / 1117, zIndex: 100 }}
              source={require("../Images/clapper2-closed.png")}
              alt="BitWise Industries"
              resizeMode="cover"
            />


          </Animated.View>
          <Animated.View style={{ opacity: textFade }}>



          </Animated.View>
        </ImageBackground>

        {/* <Text style={styles.fontText}>
        Bitwise Industries Presents:
      </Text> */}
        {/* <Image
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
      /> */}

        {/* <Text style={styles.fontText}>
        The Movie Game
      </Text> */}

        {/* <ImageBackground
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
      </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#401323",
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
  fontText: {
    fontFamily: "Limelight_400Regular",
    textAlign: "center",
    color: "#F2D379",
    fontSize: 30,
  }
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
