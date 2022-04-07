import { Animated, View, ImageBackground, Platform, useWindowDimensions } from 'react-native';
import { useRef, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import GameStartEasy from "../../Images/gameStartEasy.png";
import GameStartEasyMobile from "../../Images/gameStartEasyMobile.png";

export default function EasyModeLivesHelp() {
    const lifePointerCircle = useRef(
        new Animated.Value(1)
    ).current;

    const screenWidth= useWindowDimensions().width;

    useEffect(() => {
        Animated.loop(
            Animated.parallel(
                [
                    Animated.timing(lifePointerCircle, {
                        toValue: 0,
                        duration: 3000,
                        useNativeDriver: false
                    })
                ]
            )
        ).start() 
    }, []);

    return (
        <View>
            <ImageBackground resizeMode={Platform.OS === "web" ? "contain" : "cover"} style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                maxWidth:647,
                maxHeight: Platform.OS === 'web' ? 423 : "100%",
                width: "100%",
                height: "100%",
                aspectRatio: Platform.OS === 'web' ? 647/423 : 1170/2532,
            }}
            source= {Platform.OS === 'web' ? GameStartEasy : GameStartEasyMobile}
            >
                <Animated.View
                    style={{
                        transform: [
                                { translateX: Platform.OS === "web" ? -50 : -63 },
                                { translateY: Platform.OS === "web" ? (screenWidth < 800 ? 41 : 33) : 35 },
                        ],
                        opacity:lifePointerCircle                    
                    }} 
                >
                    <Entypo
                        name="circle"
                        size={40}
                        color= "white" 
                    />
                </Animated.View>
            </ImageBackground>
        </View>
    );
}