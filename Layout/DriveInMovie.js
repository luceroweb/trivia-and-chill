import React from "react";
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import MilkyWay from "../Images/milkyway.jpg";
import DriveInForeground from "../Images/drive-in-movie-foreground.png";

function DriveInMovie({ screen, indicators, answers }) {
  const { width, height } = useWindowDimensions();
  const screenWrapTopPosition = {
    marginTop: width * 0.025 > 16 ? width * 0.025 : 16,
  };

  return (
    <View style={styles.layout}>
      <Image
        source={MilkyWay}
        style={[styles.milkywaybg, { marginBottom: (height - 40) * -1 }]}
        resizeMode="cover"
      ></Image>
      <Image
        source={DriveInForeground}
        style={styles.driveinforeground}
      ></Image>
      <View style={[styles.contentArea, screenWrapTopPosition]}>
        <View style={styles.screenWrap}>{screen}</View>
        <View style={styles.indicators}>{indicators}</View>
        <View style={styles.answersContainer}>{answers}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "black",
    height: "100%",
  },
  milkywaybg: {
    width: "100%",
    height: "60%",
  },
  driveinforeground: {
    position: "absolute",
    top: 20,
    resizeMode: "contain",
    width: Platform.OS !== "web" ? 650 : "100%",
    minWidth: 650,
    height: "auto",
    alignSelf: "center",
    aspectRatio: 468 / 485,
  },
  contentArea: {
    position: "absolute",
    top: 20,
    width: "49.1%",
    minWidth: 320,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 1000,
    marginLeft: -2,
  },
  screenWrap: {
    width: "100%",
    backgroundColor: "#292840",
    padding: 20,
    aspectRatio: 714 / 391,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  indicators: {
    aspectRatio: 120 / 19,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1000,
  },
  answersContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    alignItems: "center",
    marginTop: "10%",
  },
});

export default DriveInMovie;
