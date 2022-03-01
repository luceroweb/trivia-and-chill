import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

function Footer({ setScene }) {
  return (
    <View style={styles.container}>
      <Text>SETTINGS | INSTRUCTIONS</Text>
      <Pressable onPress={() => setScene("Credits")}>
        <Text>Credits</Text>
      </Pressable>
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

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

export default connect(null, mapDispatchToProps)(Footer);
