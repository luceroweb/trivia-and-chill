import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

function Footer({setScene}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setScene("Credits")}>
        <Text style={styles.textColor}>Credits</Text>
      </Pressable>
      <Text style={styles.textColor}> | </Text>
      <Pressable onPress={() => setScene("About")}>
        <Text style={styles.textColor}>About</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 5,
    borderColor: "#F2D379",
    backgroundColor: "#EEF525",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#401323",
    height: 50,
    padding: 25,
    marginTop: 15,
  },
  textColor:{
    color:"#F2D379",
    fontSize: 20,
  }
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


