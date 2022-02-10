import {
	View,
	StyleSheet,
	Text,
	Pressable,
	useWindowDimensions,
	TouchableHighlight,
	Linking,
} from "react-native";

function Question() {
	
	 return (
			<View style={styles.container}>
				<View style={styles.title}>
					<Text>Question</Text>
				</View>
				<View style={styles.titleWrap}>
					<View style={styles.btn}>
						<Pressable>
							<Text>True</Text>
						</Pressable>
					</View>
					<View style={styles.btn}>
						<Pressable>
							<Text>False</Text>
						</Pressable>
					</View>
				</View>
			</View>
		);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		height: "60%",
		width: "100%",
		flexDirection: "column",
	},
	titleWrap: {
		
		flexDirection: "row",
	},
	title: {
		shadowColor: "#1a1a1a",
		shadowRadius: 10,
		textAlign: "center",
		color: "#fff",
		backgroundColor: "#de4e45",
		fontWeight: "bold",
		marginTop: 5,
		padding: 5,
		fontSize: 20,
        height: 250,
        width:300,
	},
	subtitle: {
		textAlign: "center",
		borderWidth: 2,
		borderHeight: "50%",
		borderStyle: "dashed",
		borderTopColor: "#de4e45",
		color: "#fff",
		shadowColor: "#de4e45",
		shadowRadius: 10,
		backgroundColor: "#1a1a1a",
		fontWeight: "bold",
		padding: 5,
		fontSize: 10,
		paddingHorizontal: 70,
		height: 150,
	},
	btn: {
		padding: 10,
		margin: 50,
		backgroundColor: "#de4e45",
		textAlign: "center",
	},
});
export default Question;
