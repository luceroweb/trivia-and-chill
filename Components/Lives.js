import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Lives({ lives }) {
  return (
    <View style={styles.livesDisplay}>
        {lives > 0 && 
            (<View style={styles.livesWrap}>
                <MaterialCommunityIcons
                    style={styles.livesIcon}
                    name="popcorn"
                    size={35}
                />
                <Text style={styles.livesText}>
                    {lives}
                </Text>
            </View>
        )}
    </View>
  );
}

function mapStateToProps(state) {
  return {
    lives: state.lives,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    decreaseLives: () =>
        dispatch({
            type: "DECREASE_LIVES"
        }),
    resetLives: () =>
        dispatch({
            type: "RESET_LIVES"
        }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lives);

const styles = StyleSheet.create({
    livesDisplay: {
        flex: 1,
        flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
    },
    livesWrap: {
        flex: 1,
		justifyContent: "center",
		alignItems: "center",
        position: "relative",
    },
    livesIcon: {
        color: "#F2D379",
    },
    livesText: {
		position: "absolute",
		fontSize: 16,
		color: "black",
        backgroundColor: "#F2D379",
        borderRadius: 8,
        padding: 2,
    },
});
