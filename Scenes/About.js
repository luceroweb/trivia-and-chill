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

const About = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.subContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.headings}>
              About the "Guess The Movie" Game:
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
              Our curriculum doesn’t come from textbooks, it comes directly from
              practicing industry experts. Our system of teaching is hands-on
              and up-to-date with current practices. Learn more
              <Text
                onPress={() =>
                  Linking.openURL(
                    "https://bitwiseindustries.com/services/workforce-training/classes/"
                  )
                }
              >
                HERE
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
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#A0947C",
    // borderWidth: 10,
    // borderColor: "#A0947C",
    marginBottom: 30,
    marginTop: 30,
    maxWidth: "73%",
    alignSelf: "center",
    width: "80%",
    padding: 30,
    borderRadius: 8,
  },
  headings: {
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
    flex: 1,
    marginBottom: 10,
    width: 200,
    aspectRatio: 18 / 9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default About;
