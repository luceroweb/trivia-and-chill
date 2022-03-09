import { StyleSheet, View, Text, Platform, } from "react-native";
import { connect } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import SettingsModal from "../Utils/SettingsModal"

function Header() {

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "#F2D379",
            fontFamily: "Limelight_400Regular",
            fontSize: 30,
          }}
        >
          The Movie Game
        </Text>
        <SettingsModal/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#EEF525",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderColor: "#F2D379",
    backgroundColor: "#401323",
    flexDirection: "row",
  },
  movieGame: {
    fontSize: 60,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },
  movieGameMobile: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },

  movieGameMini: {
    fontSize: 24,
    marginBottom: Platform.OS === "android" ? 20 : 70,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },
  gear:{
  },

  // testing modal
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default connect()(Header);
