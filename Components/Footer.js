import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

function Footer() {
  return (
    <View style={styles.container}>
      <Text>SETTINGS | INSTRUCTIONS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF525",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect()(Footer);
