import { Animated, View, ImageBackground, Platform } from 'react-native';
import { useRef, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import gameover from "../Images/gameover.png";

export default function GameOverHelp() {
  const translation = useRef(
    new Animated.ValueXY({x: 100, y: 100})
  ).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel(
        [
          Animated.timing(translation.x, {
            toValue: 0,
            duration: 3000,
            delay: 1000,
            useNativeDriver: false,
          })
        ,
          Animated.timing(translation.y, {
            toValue: 35,
            duration: 3000,
            delay: 1000,
            useNativeDriver: false,
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
            maxHeight: 423,
            width: "100%",
            height: "100%",
            aspectRatio: 647/423
        }}
        source={gameover}
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
                <Entypo name="mouse-pointer" size={24} color="black"/>
            </Animated.View>
        </ImageBackground>
    </View>
  );
}