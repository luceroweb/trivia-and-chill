import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

function GamePlayMode({ gamePlayMode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.gamePlayText}>{gamePlayMode}</Text>
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
    borderRadius: 25,
    color: "red",
    height: 25,
    width: 150,
    position: "absolute",
    top: 30,
    zIndex: 6,
  },
  gamePlayText: {
    color: "#F2D379",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default connect(mapStateToProps)(GamePlayMode);
