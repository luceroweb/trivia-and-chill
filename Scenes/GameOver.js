import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import BGImage from "../Images/drive-in-movie.jpg";
import BGImageMobile from "../Images/drive-in-movie (mobile).jpg";

function GameOver({ setScene, resetWinningStreak }) {
  const { width } = useWindowDimensions();
  const backToStartHandler = () => {
    resetWinningStreak();
    setScene("Main");
  };

  let myBackgroundImage;
  let gameOverWrapStyle;
  let gameOverStyle;
  // let buttonStyle;

  if (width > 860) {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrap;
    gameOverStyle = styles.gameOver;
    // buttonStyle = styles.button;
  } else if (width > 580) {
    myBackgroundImage = BGImageMobile;
    gameOverWrapStyle = styles.gameOverWrapMobile;
    gameOverStyle = styles.gameOver;
    // buttonStyle = styles.buttonMobile;
  } else if (width > 430) {
    myBackgroundImage = BGImageMobile;
    gameOverWrapStyle = styles.gameOverWrapMini;
    gameOverStyle = styles.gameOverMobile;
    // buttonStyle = styles.buttonMini;
  } else {
    myBackgroundImage = BGImageMobile;
    gameOverWrapStyle = styles.gameOverWrapSuperMini;
    gameOverStyle = styles.gameOverMini;
    // buttonStyle = styles.buttonSuperMini;
  }
  return (
    <View style={styles.layout}>
      <ImageBackground source={myBackgroundImage} style={styles.image}>
        <View style={gameOverWrapStyle}>
          <Text style={gameOverStyle}>Game Over</Text>
        </View>
        {/* <Pressable style={buttonStyle} onPress={backToStartHandler}>
          <ImageBackground
            source={require("../Images/ticket.png")}
            style={styles.ticket}
          >
            <View style={styles.backToStartButton}>
              <Text style={styles.backToStartButtonText}>Back to Start</Text>
            </View>
          </ImageBackground>
        </Pressable> */}
      </ImageBackground>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    scene: state.scene,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

const styles = StyleSheet.create({
  layout: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "red",
    height: "97.5vh",
  },
  image: {
    width: "100%",
    height: "100%",
    padding: 40,
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
  },
  gameOverWrap: {
    backgroundColor: "#12121C",
    padding: 20,
    width: "52%",
    marginTop: "14vh",
    marginBottom: 30,
  },
  gameOverWrapMobile: {
    backgroundColor: "#12121C",
    padding: 20,
    width: "80%",
    marginTop: "14vh",
    marginBottom: 30,
  },
  gameOverWrapMini: {
    backgroundColor: "#12121C",
    padding: 20,
    width: "80%",
    marginTop: "19vh",
    marginBottom: 30,
  },
  gameOverWrapSuperMini: {
    backgroundColor: "#12121C",
    padding: 10,
    width: "80%",
    marginTop: "24vh",
    marginBottom: 30,
  },
  gameOver: {
    fontSize: 70,
    marginBottom: 70,
    textAlign: "center",
    color: "#F2D379",
  },
  gameOverMobile: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
    color: "#F2D379",
  },
  gameOverMini: {
    fontSize: 24,
    marginBottom: 70,
    textAlign: "center",
    color: "#F2D379",
  },
  backToStartButton: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  backToStartButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#401323",
  },
  ticket: {
    flex: 1,
    marginTop: 30,
  },
  button: {
    width: "22%",
    height: "32%",
  },
  buttonMobile: {
    width: "40%",
    height: "26%",
  },
  buttonMini: {
    width: "50%",
    height: "28%",
  },
  buttonSuperMini: {
    width: "60%",
    height: "32%",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
