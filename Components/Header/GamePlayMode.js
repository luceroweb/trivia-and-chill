import { View, Text, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import { useSafeAreaInsets} from "react-native-safe-area-context";

function GamePlayMode({ gamePlayMode }) {

  const insets = useSafeAreaInsets();  

  let currentMode = "";
  switch (gamePlayMode) {
    case "singlePlayer":
      currentMode = "Single Player Mode";
      break;
    case "easySinglePlayer":
      currentMode = "Easy Single Player Mode ";
      break;
    default:
      "singlePlayer";
  }

  return (
    <View style={[styles.container,
      Platform.select({
        ios: {
          top: insets.top + 30
        },
        android: {
          top: 30
        },
        default: {
          top: 30,
        },
      }),     
    ]
    }>
      <Text style={styles.gamePlayText}>
        {currentMode}
      </Text>
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
    paddingLeft:4
  },
  gamePlayText: {
    color: "#F2D379",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default connect(mapStateToProps)(GamePlayMode);
