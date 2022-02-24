import {
  ImageBackground,
  Image,
  View,
  Text,
  Linking,
  StyleSheet,
} from "react-native";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const About = () => {
  return (
    <>
      <Header style={styles.headerComponent} />
      <View style={styles.mainContainer}>
        <ImageBackground source={require("../images/film-strip.jpg")} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.headings}>About the "Guess The Movie" Game:</Text>

          <Text style={styles.content}>
            This game was created in order for our developer team to learn more
            about React-Native, Redux, Axios, and dynamic question generation
            using a live data base.
            <Text
              onPress={() =>
                Linking.openURL(
                  "https://bitwiseindustries.com/services/workforce-training/classes/"
                )
              }
            >
              Credits
            </Text>
          </Text>

          <Text style={styles.headings}>About Workforce Training:</Text>

          <Text style={styles.content}>
            Our curriculum doesn’t come from textbooks, it comes directly from
            practicing industry experts. Our system of teaching is hands-on and
            up-to-date with current practices. Learn more{" "}
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
        <Image
          source={require("../images/ticket.png")}
          style={styles.ticketImage}
        />
        </ImageBackground>
        <Footer style={styles.footer} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A0947C",
    marginBottom: 30,
    marginTop: 30,
    maxWidth: "73%",
    alignSelf: "center",
  },
  header: {
    justifyContent: "flex-start",
  },
  footer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  headings: {
    borderRadius: 8,
    padding: 20,
    justifyContent: "center",
    color: "#F2D379",
    fontSize: 40,
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
  },
  image: {
    alignSelf: "center",
    height: "100%",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#401323",
    height: "100%",
  },
  ticketImage: {
    marginTop: 100,
    height: "25%",
    width: "28%",
    alignSelf: "center",
  },
  headerComponent: {
    width: "100%",
    height: "30%",
  },
});

export default About;
