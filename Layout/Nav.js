import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
} from "react-native";
import { connect } from "react-redux";
import GameOver from "../Scenes/GameOver";
import Header from "./Header";
import Main from "../Scenes/Main";
import Footer from "./Footer";
import Question from "../Scenes/Question";
import CorrectAnswer from "../Scenes/CorrectAnswer";
import Credits from "../Scenes/Credits";
import About from "../Scenes/About";
import GamePlayMode from "../Components/GamePlayMode";
import WrongAnswer from "../Scenes/WrongAnswer";
import HowToPlay from "../Scenes/HowToPlay";

function Nav({ scene, modalVisible }) {
  return (
    <SafeAreaView style={styles.layout}>
      <Header style={styles.header} />
      <GamePlayMode style={styles.gamePlayMode} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {scene === "Main" && <Main />}
        {scene === "GameOver" && <GameOver />}
        {scene === "Question" && <Question />}
        {scene === "CorrectAnswer" && <CorrectAnswer />}
        {scene === "Credits" && <Credits />}
        {scene === "About" && <About />}
        {scene === "WrongAnswer" && <WrongAnswer />}
        {scene === "HowToPlay" && <HowToPlay />}
      </ScrollView>
      {scene !== "Question" &&
        scene !== "CorrectAnswer" &&
        scene !== "WrongAnswer" && <Footer style={styles.footer} />}
      {modalVisible && (
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: 0.9,
            backgroundColor: "gray",
            zIndex: 100,
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flexGrow: 1,
    overflow: "hidden",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    height: "10%",
  },
  gamePlayMode: {
    alignSelf: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    height: "100%",
  },
  footer: {
    height: "10%",
  },
});

function mapStateToProps(state) {
  return {
    scene: state.scene,
    modalVisible: state.modalVisible,
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
