import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

function Header() {
  return (
    <View style={styles.container}>
      <Text>
        PROJECT GITHUB | BITWISE WORFORCE TRAINING WEBSITE | BITWISE WORKFORCE
        TRAINING TWITTER
      </Text>
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

export default connect()(Header);
