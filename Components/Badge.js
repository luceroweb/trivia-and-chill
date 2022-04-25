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
							color="#F2D379"
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
	badgeWrap: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	badge: {
		position: "relative",
	},  
	badgeText: {
		position: "absolute",
		textAlign: "center",
		lineHeight: 39,
		width: 35,
		height: 39, 
		fontSize: 14,
		color: "#F2D379",
	},
});
