import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";
import { connect } from "react-redux";

const Credits = ({ setscene }) => {
  let [fontsLoaded] = useFonts({ Limelight_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.credits}>
          <Text style={styles.headerStyle}>CREDITS</Text>
        </View>
        <View style={styles.contentLayout}>
          <View style={styles.titles}>
            <Text style={styles.textStyle}>Owner/Client</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text>.</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
          </View>
          <View style={styles.names}>
            <Text style={styles.textStyle}>Juan Lucero (he/him)</Text>
            <Text style={styles.textStyle}>Hiwot Beshe (she/her)</Text>
            <Text style={styles.textStyle}>Garet Hough (he/him)</Text>
            <Text style={styles.textStyle}>Xavier Mercado (he/him)</Text>
            <Text style={styles.textStyle}>Sam Rosenberg (he/him)</Text>
            <Text style={styles.textStyle}>Grace Aranico (she/her)</Text>
            <Text style={styles.textStyle}>Paidamoyo-Janet "Myles"</Text>
            <Text style={styles.textStyle}>Azehko (she/her/they/them)</Text>
            <Text style={styles.textStyle}>Darla Brown (she/her)</Text>
            <Text style={styles.textStyle}>Habteab Firezgi (he/him)</Text>
            <Text style={styles.textStyle}>Eyob Legese (he/him)</Text>
            <Text style={styles.textStyle}>Albert Martinez (he/him)</Text>
            <Text style={styles.textStyle}>Jason Smith (he/him)</Text>
            <Text style={styles.textStyle}>Tesfa Worku (he/him)</Text>
          </View>
        </View>
        <Pressable onPress={() => setscene("Main")}>
          <ImageBackground
            source={require("../Images/ticket.png")}
            style={styles.ticket}
          >
            <Text>Home</Text>
          </ImageBackground>
        </Pressable>
      </View>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    setscene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name: name,
      }),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292840",
    alignItems: "center",
  },
  credits: {
    alignItems: "center",
    padding: 10,
    borderColor: "#F2D379",
  },
  contentLayout: {
    textAlign: "center",
    flexDirection: "row",
  },
  titles: {
    textAlign: "right",
    marginRight: 10,
  },
  names: {
    textAlign: "left",
  },
  headerStyle: {
    color: "#F2D379",
    fontFamily: "Limelight_400Regular",
    fontSize: 25,
  },
  textStyle: {
    color: "#F2D379",
    fontSize: 15,
  },
  ticket: {
    margin: 10,
    padding: 10,
    width: 100,
    aspectRatio: 18 / 9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(null, mapDispatchToProps)(Credits);
