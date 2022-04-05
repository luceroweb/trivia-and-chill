import { Animated, View, ImageBackground, Platform, useWindowDimensions } from 'react-native';
import { useRef, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import WrongAnswerScreen from "../../Images/WrongAnswerScreen.png";
import WrongAnswerScreenMobile from "../../Images/WrongAnswerScreenMobile.png";

export default function WrongAnswerHelp() {
    const translation = useRef(
        new Animated.ValueXY({x: Platform.OS === "web" ? 100 : 50, y: Platform.OS === "web" ? 100 : 50})
    ).current;

    const fade = useRef(
        new Animated.Value(1)
    ).current;

    const screenWidth= useWindowDimensions().width;

    useEffect(() => {
        Animated.loop(
        Animated.parallel(
            [
            Animated.timing(translation.x, {
                toValue: 6,
                duration: 3000,
                delay: 1000,
                useNativeDriver: false,                
            })
            ,
            Animated.timing(translation.y, {
                toValue: Platform.OS === "web" ? ( screenWidth<550 ? 130 : 160) : 185,                
                duration: 3000,
                delay: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(fade, {
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
            source= {Platform.OS === 'web' ? WrongAnswerScreen : WrongAnswerScreenMobile}
            >
                <Animated.View
                style={{
                    transform: [
                    { translateX: translation.x },
                    { translateY: translation.y },
                    ],
                    marginBottom: 10,
                }} 
                >
                    <Entypo
                    name={Platform.OS === 'web' ? "mouse-pointer" : "circle"}
                    size={24}
                    color={Platform.OS === 'web' ? "black" : "#A0947C"}
                    />
                </Animated.View>

                <Animated.View
                style={{
                    transform: [
                        { translateX: Platform.OS === "web" ? ( screenWidth < 550 ? -45 : -48) : -63 },
                        { translateY: Platform.OS === "web" ? ( screenWidth < 550 ? 45 : 40) : 60 },
                        ],
                    opacity:fade
                    ,
                    marginBottom: 10,
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