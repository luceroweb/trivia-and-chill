import {
	View,
	Text,
	Pressable,
	Animated,
	StyleSheet,
	useWindowDimensions,
	ImageBackground,
	Easing,
	Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import main from "../../Images/main.png";
import mainWeb from "../../Images/mainWeb.png";
import React, { useRef, useEffect, useState } from "react";

const MainAnimation = ({ setScene, resetSelectedMovie, lives }) => {
    const translation = useRef(new Animated.Value(0)).current;
	const screenWidth = useWindowDimensions().width;
	

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(translation, {
					toValue:0,
					useNativeDriver: true,
				}),
				Animated.timing(translation, {
					toValue:
						Platform.OS === "web" ? (screenWidth < 581 ? 420 : 600) : 310,
					easing: Easing.bounce,
					duration: 5000,
					useNativeDriver: true,
				}),
			])
		).start();
    }, []);

	
    return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					resizeMode={"cover"}
					style={styles.container}
					source={Platform.OS === "web" ? mainWeb : main}
				>
					<View style={{ alignItems: "center", flex: 1 }}>
						<Animated.View
							style={{
								width: 30,
								height: 30,
								duration: 700,
								transform: [{ translateY: translation }],
								opacity: translation.interpolate({
									inputRange: [0, 350],
									outputRange: [0, 1],
								}),
							}}
						>
							<Text style={styles.animationFontAwesome}>
								<FontAwesome name="arrow-down" size={24} color="#292840" />
							</Text>
						</Animated.View>
					</View>
				</ImageBackground>
			</View>
		);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		alignSelf: "center",
		justifyContent: "center",
		height: "100%",
		width: "100%",
		flexDirection: "column",
	},
	animationText: {
		color: "#F2D379",
		margin: 5,
	},
	animationFontAwesome: {
		alignSelf: "center",
		alignItems: "center",
	},
});

export default MainAnimation;
