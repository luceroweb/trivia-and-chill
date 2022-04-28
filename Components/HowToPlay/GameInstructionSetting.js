import { ImageBackground, StyleSheet, View, Platform } from "react-native";
import gameSettingsAnimation from "../../Images/HowToPlay/Settings/gameSettingsAnimation.gif";
import gameSettingsAnimationMobile from "../../Images/HowToPlay/Settings/gameSettingMobile.gif";

export default function GameInstructionSetting() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={"cover"}
        source={
          Platform.OS === "web"
            ? gameSettingsAnimation
            : gameSettingsAnimationMobile
        }
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: Platform.OS === "web" ? 960 / 540 : 360 / 750,
        }}
      ></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
