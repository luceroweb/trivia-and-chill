import { View, Text, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";

function GamePlayMode({ gamePlayMode }) {

  let currentMode = "";
    switch(gamePlayMode) {
      case "singlePlayer":
        currentMode = "Single Player Mode";
        break;
        // add more cases for each gamePlayMode state
        default: ""; 
    }

  return (
    <View style={[styles.container,
      {top: Platform.OS === "ios" && height === "1334px" 
      ? 40 : Platform.OS === "ios" 
      ? 48 : 30}]
    }>
      <Text style={styles.gamePlayText}>{currentMode}</Text>
    </View>
  
  );
}

const mapStateToProps = (state) => ({
  gamePlayMode: state.gamePlayMode,
});

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#401323",
    borderRadius: 10,
    height: 18,
    width: 150,
    position: "absolute",
    zIndex: 6,
    borderColor: "#F2D379",
    borderWidth: 1,
    top: Platform.OS === "ios" ? 76 : 30,
  },
  gamePlayText: {
    color: "#F2D379",
    fontWeight: "bold", 
    fontSize: 12,
  },
});

export default connect(mapStateToProps)(GamePlayMode);
