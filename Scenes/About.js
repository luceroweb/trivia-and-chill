import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable
} from "react-native";
import React from "react";
import {connect} from "react-redux";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";

const About = ({setScene}) => {
  let [fontsLoaded] = useFonts({ Limelight_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.subContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.headings}>
              About the "Trivia & Chill" Game:
            </Text>
            <Text style={styles.content}>
              This game was created in order for our developer team to learn
              more about React-Native, Redux, Axios, and dynamic question
              generation using a live data base.
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.headings}>About Workforce Training:</Text>

            <Text style={styles.content}>
              Our curriculum doesn't come from textbooks, it comes directly from
              practicing industry experts. Our system of teaching is hands-on
              and up-to-date with current practices.
              <Text
              style={{ textDecorationLine: "underline", color: "white"}}
                onPress={() =>
                  Linking.openURL(
                    "https://bitwiseindustries.com/services/workforce-training/classes/"
                  )
                }
              >
                Learn more about Workforce Training
              </Text>
            </Text>
          </View>
        </View>
        <ImageBackground
          source={require("../Images/ticket.png")}
          style={styles.ticketImage}
        >
          <Pressable onPress={() => setScene("Main")}>
            <Text>Home</Text>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </View>
   );
  }
};

function mapDispatchToProps(dispatch){
  return{
    setScene: (name) => dispatch({
      type: "SET_SCENE",
      name: name
    })
  }
}


const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#A0947C",
    // borderWidth: 3,
    // borderColor: "#A0947C",
    // marginBottom: 30,
    marginTop: 10,
    maxWidth: "90%",
    alignSelf: "center",
    // width: "80%",
    padding: 5,
    borderRadius: 8,
  },
  headings: {
    fontFamily: "Limelight_400Regular",
    borderRadius: 8,
    padding: 20,
    textAlign: "center",
    color: "#F2D379",
    fontSize: 30,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: "#292840",
  },
  content: {
    borderRadius: 8,
    padding: 20,
    fontSize: 20,
    backgroundColor: "#292840",
    marginBottom: 15,
    color: "#F2D379",
  },
  mainContainer: {
    backgroundColor: "#401323",
    height: "100%",
  },
  ticketImage: {
    marginTop: 10,
    flex: 1,
    marginBottom: 10,
    width: 200,
    aspectRatio: 18 / 9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(null, mapDispatchToProps)(About);
