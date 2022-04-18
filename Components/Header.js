import { StyleSheet, View, Text, Platform, } from "react-native";
import { connect } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import SettingsModal from "../Components/SettingsModal"

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
					Trivia & Chill
				</Text>
				<View style={{ position: "absolute", top: 7, right: 6 }}>
					<SettingsModal />
				</View>
			</View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
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

});

export default connect()(Header);
