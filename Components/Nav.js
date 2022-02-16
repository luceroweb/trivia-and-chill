import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import GameOver from "../Scenes/GameOver";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Question from "../Scenes/Question";
import CorrectAnswer from "../Scenes/CorrectAnswer";

function Nav({ scene }) {
  return (
    <SafeAreaView style={styles.layout}>
      <Header style={styles.header} />
      <ScrollView style={styles.scrollView}>
        {scene === "Main" && <Main />}
        {scene === "GameOver" && <GameOver />}
        {scene === "Question" && <Question />}
        {scene === "CorrectAnswer" && <CorrectAnswer />}
      </ScrollView>
      <Footer style={styles.footer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    overflow: "hidden",
  },
  header: {
    height: "10%",
  },
  scrollView: {
    height: "80%",
  },
  footer: {
    height: "10%",
  },
});

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
