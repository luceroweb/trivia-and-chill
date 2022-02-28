import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

function Footer({setScene}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setScene("Credits")}>
        <Text>Credits</Text>
      </Pressable>
      <Text> | </Text>
      <Pressable onPress={() => setScene("About")}>
        <Text>About</Text>
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
    flexDirection: "row"
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


