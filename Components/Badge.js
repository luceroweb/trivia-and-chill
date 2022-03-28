import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { SimpleLineIcons } from "@expo/vector-icons";
// import { useState } from 'react';

function Badge({ winningStreak }) {
	return (
		<View style={styles.badgeDisplay}>
			{winningStreak > 0 && (
				<View style={styles.badgeWrap}>
					<View style={styles.badge}>
						<SimpleLineIcons
							name="film"
							size={35}
							color="black"
							style={styles.badgeIcon}
						/>
						<Text style={styles.badgeText}>{winningStreak}</Text>
					</View>
				</View>
			)}
		</View>
	);
}

function mapStateToProps(state) {
	return {
		winningStreak: state.winningStreak,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		increaseWinningStreak: () =>
			dispatch({
				type: "INCREASE_WINNING_STREAK",
			}),
		resetWinningStreak: () =>
			dispatch({
				type: "RESET_WINNING_STREAK",
			}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Badge);

const styles = StyleSheet.create({
	// badgeDisplay: {
	// 	position: "absolute",
	// 	right: 0,
	// 	top: 0,
	// 	flex: 1,
	// 	zIndex: 5,
	// 	elevation: 5,
	// },
	badgeWrap: {
		// position: "absolute",
		// right: 0,
		// top: 0,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// marginTop: 40,
		// marginRight: 10,
		// backgroundColor: 'black',
		// padding: 5,
		// borderRadius: 100,
		// borderColor: 'red',
		// borderStyle: 'solid',
		// borderWidth: 3,
	},
	badge: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		maxHeight: 31,
		maxWidth: 35,
		minHeight: 31,
		minWidth: 35,

		// borderRadius: 100,
	},  
	badgeText: {
		position: "relative",
		top: -28,
		fontSize: 14,
	},
	badgeIcon: {
		// paddingTop: 10,
		paddingLeft: 2,
		paddingRight: 2,
		borderWidth: 2,
		borderColor: "white",
		borderRadius: 3,
		backgroundColor: "white",
	},
});
