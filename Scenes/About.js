import { ImageBackground, View, Text, Linking, StyleSheet } from "react-native";
import Footer from "../Components/Footer"
import Header from "../Components/Header"

const About = () => {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Header style={styles.header}/>
      <Text style={styles.headings}>About the "Guess The Movie" Game:</Text>

      <Text style={styles.content}>
        This game was created in order for our developer team to learn more about React-Native, Redux,
        Axios, and dynamic question generation using a live data base. <Text onPress={() => Linking.openURL('https://bitwiseindustries.com/services/workforce-training/classes/')}> Credits</Text>
      </Text>

      <Text style={styles.headings}>About Workforce Training:</Text>

      <Text style={styles.content}>
        Our curriculum doesn’t come from textbooks, it comes directly from
        practicing industry experts. Our system of teaching is hands-on and
        up-to-date with current practices. Learn more <Text onPress={() => Linking.openURL('https://bitwiseindustries.com/services/workforce-training/classes/')}>HERE</Text>
      </Text>
      <Footer style={styles.footer}/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    display: "flex",
    justifyContent: "flex-start",
  },
  footer:{
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  headings:{
    fontSize: 40,
    paddingBottom: 10,
  },
  content:{
    fontSize: 20,
    paddingBottom: 30,
  }
});

export default About;
