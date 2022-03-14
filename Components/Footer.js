import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

function Footer({ setScene }) {
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
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderTopWidth: 3,
		borderColor: "#F2D379",
		backgroundColor: "#401323",
		flexDirection: "row",
	},
	textColor: {
		color: "#F2D379",
		fontSize: 20,
		textAlign: "center",
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
