import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
    Platform,
} from 'react-native';
import { connect } from 'react-redux';
import BGImage from '../Images/drive-in-movie.jpg';
import BGImageMobile from '../Images/drive-in-movie-mobile.jpg';
import { Audio } from 'expo-av';
import lose from '../Sounds/lose.wav';
// import AppLoading from 'expo-app-loading';
import { useFonts, Limelight_400Regular } from '@expo-google-fonts/limelight';

function GameOver({ setScene, resetWinningStreak }) {
    const [sound, setSound] = useState();
    const { width } = useWindowDimensions();

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(lose);
        setSound(sound);

        await sound.playAsync();
    }

    const backToStartHandler = () => {
        resetWinningStreak();
        setScene('Main');
    };

    let [fontsLoaded] = useFonts({
        Limelight_400Regular,
    });

    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // }

    let myBackgroundImage;
    let gameOverWrapStyle;
    let gameOverStyle;
    let buttonStyle;

    if (width > 860) {
        myBackgroundImage = BGImage;
        gameOverWrapStyle = styles.gameOverWrap;
        gameOverStyle = styles.gameOver;
        buttonStyle = styles.button;
    } else if (width > 580) {
        myBackgroundImage = BGImage;
        gameOverWrapStyle = styles.gameOverWrapMobile;
        gameOverStyle = styles.gameOver;
        buttonStyle = styles.buttonMobile;
    } else if (width > 430) {
        myBackgroundImage = BGImage;
        gameOverWrapStyle = styles.gameOverWrapMini;
        gameOverStyle = styles.gameOverMobile;
        buttonStyle = styles.buttonMini;
    } else {
        myBackgroundImage = BGImage;
        gameOverWrapStyle = styles.gameOverWrapSuperMini;
        gameOverStyle = styles.gameOverMini;
        buttonStyle = styles.buttonSuperMini;
    }
    useEffect(() => {
        playSound();
        return sound
            ? () => {
                  sound.unloadAsync();
              }
            : undefined;
    }, []);

    return (
        <ImageBackground
            source={myBackgroundImage}
            style={[styles.image]}
            resizeMode="cover"
        >
            <View
                style={[
                    gameOverWrapStyle,
                    { alignItems: 'center', paddingVertical: 20 },
                ]}
            >
                <Text style={gameOverStyle}>Game Over</Text>
                <Pressable style={buttonStyle} onPress={backToStartHandler}>
                    <ImageBackground
                        source={require('../Images/ticket.png')}
                        style={[
                            styles.ticket,
                            {
                                alignItems: 'center',
                                justifyContent: 'center',
                            },
                        ]}
                    >
                        {/* <View style={styles.backToStartButton}> */}
                        <Text style={styles.backToStartButtonText}>
                            Back to Start
                        </Text>
                        {/* </View> */}
                    </ImageBackground>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

function mapStateToProps(state) {
    return {
        winningStreak: state.winningStreak,
        scene: state.scene,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetWinningStreak: () =>
            dispatch({
                type: 'RESET_WINNING_STREAK',
            }),
        setScene: (name) =>
            dispatch({
                type: 'SET_SCENE',
                name,
            }),
    };
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'red',
        // height: "127.5%",
    },
    image: {
        // flex: 1,
        // width: "100%",
        // height: "100%",
        // padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // alignSelf: "center",
    },
    imageMobile: {
        flex: 1,
        width: '120%',
        height: '120%',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: "center",
    },
    heading: {
        fontSize: 40,
        marginBottom: 70,
        textAlign: 'center',
    },
    gameOverWrap: {
        backgroundColor: '#292840',
        padding: 20,
        width: '50%',
        aspectRatio: 16 / 9,
        marginTop: '-25%',
        // marginBottom: 30,
        justifyContent: 'center',
    },
    gameOverWrapMobile: {
        backgroundColor: '#292840',
        padding: 20,
        width: '84%',
        aspectRatio: 16 / 9,
        marginTop: '8%',
        // marginBottom: 30,
        justifyContent: 'center',
    },
    gameOverWrapMini: {
        backgroundColor: '#292840',
        padding: 20,
        width: '84%',
        aspectRatio: 16 / 9,
        marginTop: '20%',
        // marginBottom: 30,
        justifyContent: 'center',
    },
    gameOverWrapSuperMini: {
        backgroundColor: '#292840',
        padding: 10,
        width: '85%',
        // aspectRatio: 16 / 9,
        // marginTop: "20%",
        marginBottom: '40%',
        justifyContent: 'center',
        // marginHorizontal: 20
    },
    gameOver: {
        fontSize: 70,
        // marginBottom: 70,
        textAlign: 'center',
        fontFamily: 'Limelight_400Regular',
        color: '#F2D379',
    },
    gameOverMobile: {
        fontSize: 40,
        marginBottom: 70,
        textAlign: 'center',
        fontFamily: 'Limelight_400Regular',
        color: '#F2D379',
    },
    gameOverMini: {
        fontSize: 24,
        marginBottom: Platform.OS === 'android' ? 20 : 70,
        textAlign: 'center',
        fontFamily: 'Limelight_400Regular',
        color: '#F2D379',
    },
    backToStartButton: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backToStartButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#401323',
    },
    ticket: {
        flex: 1,
        // marginTop: 30,
    },
    button: {
        width: '22%',
        height: 75,
        // aspectRatio: 7 / 4,
        // height: 'auto'
    },
    buttonMobile: {
        width: '40%',
        aspectRatio: 7 / 4,
    },
    buttonMini: {
        width: '50%',
        aspectRatio: 7 / 4,
    },
    buttonSuperMini: {
        width: '50%',
        height: 80,
        // aspectRatio: 7 / 4,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);













































































































































































































































