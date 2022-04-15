import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Animated,
  Platform, 
  useWindowDimensions,
} from "react-native";
import { Audio } from 'expo-av';
import clapper from '../Sounds/clapper.wav'
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";

function Main({ setScene, setMovies }) {

  const clapperFade = useRef(new Animated.Value(1)).current;
  const clapperFadeIn = useRef(new Animated.Value(0)).current;
  const textFade = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(clapper);
    setSound(sound);

    await sound.playAsync();
  }

  const { width } = useWindowDimensions();
  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);
  
  
  useEffect(() => {
    setTimeout(()=>{playSound()}, 900);
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
              duration: 1000,
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
      <View 
      style={[styles.container,]}
      >
        <ImageBackground
          style={{
            flex: 1,
            flexDirection: "column",
            aspectRatio: 4 / 3,
            maxWidth: width,
          }}
          source={require("../Images/marquee.jpeg")}
          resizeMode={Platform.OS === "web" ? "contain" : "cover"}
          alt="movie theatre with marquee sign with cars parked in front"
        >
          <Animated.View style={{ opacity: clapperFade, 
            position: 'absolute', 
            width: "85%", 
            alignSelf: 'center' }}>
            <Image
              style={{ 
                aspectRatio: 1280 / 1117, 
                zIndex: 100, 
                maxWidth: Platform.OS !== "web" ? "90%" : width,
             }}
              source={require("../Images/clapper2-open.png")}
              alt="open movie clapper"
              resizeMode="contain"
            />
          </Animated.View>
          <Animated.View style={{ 
            opacity: clapperFadeIn.interpolate({inputRange: [0, .1, .8, 1], outputRange: [0, 1, 1, 0]}),
            position: 'absolute', 
            width: "85%", maxWidth: width, 
            alignSelf: 'center' 
          }}
          >
            <Image
              style={{ 
                aspectRatio: 1280 / 1117, 
                zIndex: 100,
                maxWidth: Platform.OS !== "web" ? "90%" : width, 
              }}
              source={require("../Images/clapper2-closed.png")}
              alt="closed movie clapper"
              resizeMode="contain"
            />


          </Animated.View>
          <Animated.View style={{ opacity: textFade }}>
            <View style={styles.titleContainer}>
              <Text style={styles.fontText}>Trivia &#38; Chill</Text>
              <View style={styles.buttonContainer}>
              <ImageBackground
                source={require("../Images/ticket.png")}
                style={{ width: 160, height: 80, alignSelf: 'center', marginBottom: 30 }}
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
            </View>
          </Animated.View>
        </ImageBackground>
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
    fontSize: Platform.OS === "web" ? 100 : 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    width: "100%",
    marginTop: Platform.OS === "web" ? 50 : 80,
  },
  buttonContainer:{
  flex: 1,
  justifyContent: "center",
  textAlign: "center",
  marginTop: Platform.OS === "web" ? 280 : 390,
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
