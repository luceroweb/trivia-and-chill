import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

<<<<<<< HEAD
function Header(){
    return(
        <View style={styles.container}>
            <Text>
            ABOUT TEAM  |  PROJECT GITHUB  |  BITWISE WORFORCE TRAINING WEBSITE  |  BITWISE WORKFORCE TRAINING TWITTER
            </Text>
        </View>
    )
=======
function Header() {
  return (
    <View style={styles.container}>
      <Text>
        PROJECT GITHUB | BITWISE WORFORCE TRAINING WEBSITE | BITWISE WORKFORCE
        TRAINING TWITTER
      </Text>
    </View>
  );
>>>>>>> a1c12b7328d8b3b6abf8e9c4040e836eb79b0c04
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

export default connect()(Header);
