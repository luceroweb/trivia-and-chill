import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { connect } from "react-redux";
import GameOver from "../Scenes/GameOver";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Question from "../Scenes/Question";
import CorrectAnswer from "../Scenes/CorrectAnswer";
import DeveloperCredits from "../Scenes/DeveloperCredits";
import About from "../Scenes/About";
import SettingsModal from "../Components/SettingsModal"

function Nav({ scene }) {
  return (
    <SafeAreaView style={styles.layout}>
      <Header style={styles.header} />
      <SettingsModal/>
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {scene === "Main" && <Main />}
        {scene === "GameOver" && <GameOver />}
        {scene === "Question" && <Question />}
        {scene === "CorrectAnswer" && <CorrectAnswer />}
        {scene === "Credits" && <DeveloperCredits />}
        {scene === "About" && <About />}
      </ScrollView>
      {scene !== "Question" && scene !== "CorrectAnswer" && (
        <Footer style={styles.footer} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flexGrow: 1,
    marginTop: StatusBar.currentHeight,
    overflow: "hidden",
  },
  header: {
    height: "10%",
  },
  scrollView: {
    // height: "80%",
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
