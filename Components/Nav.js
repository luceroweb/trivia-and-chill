import { View } from "react-native";
import { connect } from "react-redux";
import GameOver from "../Scenes/GameOver";
import Home from "../Scenes/Home";

function Nav({ scene }) {
  return (
    <View>
      {scene === "Home" && <Home />}
      {scene === "GameOver" && <GameOver />}
    </View>
  );
}

function mapStateToProps(state) {
  return {
    scene: state.scene,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setScene: () =>
      dispatch({
        type: "SET_SCENE",
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
