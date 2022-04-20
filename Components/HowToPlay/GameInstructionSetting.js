import {
	ImageBackground,
	StyleSheet,
	View,
	Platform,
} from "react-native";
import gameSettingsAnimation from "../../Images/gameSettingsAnimation.gif";


export default function GameInstructionSetting() {
	
return (
	<View style={styles.container}>
		<ImageBackground
			resizeMode={"cover"}
			source={
				gameSettingsAnimation 
			}
			style={{
				width: "100%",
				height: "100%",
				aspectRatio: Platform.OS === "web" ? 960 / 540 : 960 / 540,
			}}
		></ImageBackground>
	</View>
);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
});
