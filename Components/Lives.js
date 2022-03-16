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
                    size={24}
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
        padding: 6,
    },
    livesWrap: {
        flex: 1,
		justifyContent: "center",
		alignItems: "center",
    },
    livesIcon: {
        color: "#F2D379",
    },
    livesText: {
		position: "relative",
        top: -20,
		left: 20,
		fontSize: 16,
		color: "white",
    },
});
