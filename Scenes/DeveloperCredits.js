import { View, Text, StyleSheet } from "react-native";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";

const DeveloperCredits = () => {
  let [fontsLoaded] = useFonts({ Limelight_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.credits}>
          <Text style={styles.headerStyle}>CREDITS</Text>
        </View>
        <View style={styles.contentLayout}>
          <View style={styles.names}>
            <Text style={styles.textStyle}>Juan Lucero (he/him)</Text>
            <Text style={styles.textStyle}>Hiwot Beshe (she/her)</Text>
            <Text style={styles.textStyle}>Garet Hough (he/him)</Text>
            <Text style={styles.textStyle}>Xavier Mercado (he/him)</Text>
            <Text style={styles.textStyle}>Sam Rosenberg (he/him)</Text>
            <Text style={styles.textStyle}>Grace Aranico (she/her)</Text>
            <Text style={styles.textStyle}>
              Paidamoyo-Janet "Myles" Azehko (she/her/they/them)
            </Text>
            <Text style={styles.textStyle}>Darla Brown (she/her)</Text>
            <Text style={styles.textStyle}>Habteab Firezgi (he/him)</Text>
            <Text style={styles.textStyle}>Eyob Legese (he/him)</Text>
            <Text style={styles.textStyle}>Albert Martinez (he/him)</Text>
            <Text style={styles.textStyle}>Jason Smith (he/him)</Text>
            <Text style={styles.textStyle}>Tesfa Worku (he/him)</Text>
          </View>
          <View style={styles.titles}>
            <Text style={styles.textStyle}>Owner/Client</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Team Lead</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
            <Text style={styles.textStyle}>Developer</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292840",
    borderStyle: "dashed",
  },
  credits: {
    alignItems: "center",
    padding: 20,
    borderStyle: "dashed",
    borderColor: "#F2D379",
  },
  contentLayout: {
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row-reverse",
  },
  names: {
    textAlign: "left",
    marginLeft: "10px",
  },
  titles: {
    textAlign: "right",
    marginRight: "10px",
    paddingLeft: "200px",
  },
  headerStyle: {
    color: "#F2D379",
    fontFamily: "Limelight_400Regular",
    fontSize: 30,
  },
  textStyle: {
    color: "#F2D379",
    fontSize: 20,
  },
});

export default DeveloperCredits;
