import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import GameBG from "../Images/GamePlay/GameBG.jpg";
import ScreenBG from "../Images/GamePlay/ScreenBG.jpg";

function Theater({ indicators, content, buttons, scene }) {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.layout}>
      <ImageBackground source={GameBG} style={styles.gamebg}>
        <View style={styles.contentArea}>
          <View style={styles.indicators}>
            {indicators ? indicators : null}
          </View>
          <ImageBackground
            source={ScreenBG}
            style={[
              styles.contentWrap,
              height > 650 ? { aspectRatio: 16 / 9 } : null,
              scene !== "CorrectAnswer" ? { padding: 20 } : null,
            ]}
          >
            {content ? content : null}
          </ImageBackground>

          <View style={styles.buttonsContainer}>
            {buttons ? buttons : null}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    scene: state.scene,
  };
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "black",
    height: "100%",
  },
  gamebg: {
    width: "100%",
    height: "100%",
  },
  contentArea: {
    width: "90%",
    maxWidth: 650,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  contentWrap: {
    width: "100%",
    backgroundColor: "#292840",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  indicators: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
});

export default connect(mapStateToProps, null)(Theater);
