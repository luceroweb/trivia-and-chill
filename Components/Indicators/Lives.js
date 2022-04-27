import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Lives({ lives }) {
  let displayLives = [];

  for (let i = 0; i < lives; i++) {
    displayLives.push(
      <MaterialCommunityIcons
        style={styles.livesIcon}
        name="popcorn"
        size={28}
        key={i}
      />
    );
  }

  return (
    <View style={styles.livesDisplay}>
      <Text style={styles.livesText}>LIVES</Text>
      <View style={styles.livesWrap}>{displayLives}</View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    lives: state.lives,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    decreaseLives: () =>
      dispatch({
        type: "DECREASE_LIVES",
      }),
    resetLives: () =>
      dispatch({
        type: "RESET_LIVES",
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lives);

const styles = StyleSheet.create({
  livesDisplay: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 8,
  },
  livesWrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  livesIcon: {
    color: "#F2D379",
  },
  livesText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#F2D379",
    // backgroundColor: "#F2D379",
    // borderRadius: 8,
    padding: 2,
  },
});
