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
<<<<<<< HEAD
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
=======
  container: {
    backgroundColor: "#EEF525",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
>>>>>>> a1c12b7328d8b3b6abf8e9c4040e836eb79b0c04
});

export default connect()(Footer);
