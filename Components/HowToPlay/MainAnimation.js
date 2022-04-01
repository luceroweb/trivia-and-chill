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
import main from "../Images/main.png";
import driveInMobile from "../Images/drive-in-movie-mobile.jpg";
import driveInMobileMini from "../Images/drive-in-movie-mobile-mini.jpg";
import Badge from "../Badge";
import React, { useRef, useEffect, useState } from "react";

const MainAnimation = ({ setScene, resetSelectedMovie, lives }) => {
    const translation = useRef(new Animated.Value(0)).current;
	
	

    useEffect(() => {
        Animated.timing(translation, {
            toValue: Platform.OS === "web" ? 310 : 310,
            easing: Easing.bounce,
            delay: 2000,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, []);

	
    return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					resizeMode={"cover"}
					style={styles.container}
					source={main}
				>
					<View style={{ alignItems: "center", flex: 1 }}>
						<Animated.View
							style={{
								width: 230,
								height: 30,
								duration: 700,
								backgroundColor: "#292840",
								transform: [{ translateY: translation }],
								opacity: translation.interpolate({
									inputRange: [0, 350],
									outputRange: [0, 1],
								}),
							}}
						>
							<Text style={styles.animationText}>
								Select “Start" to begin the game
							</Text>
							<Text style={styles.animationFontAwesome}>
								<FontAwesome name="arrow-down" size={24} color="#401323" />
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
