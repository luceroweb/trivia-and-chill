import {
    View,
    Text,
    Pressable,
    StyleSheet,
    useWindowDimensions,
    ImageBackground,
    Platform
  } from "react-native";
  import { connect } from "react-redux";
  import Lives from "../Components/Lives";
  import AppLoading from "expo-app-loading";
  import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
  import ticket from "../Images/ticket.png";
  import driveIn from "../Images/drive-in-movie.jpg";
  import driveInMobile from '../Images/drive-in-movie-mobile.jpg';
  import driveInMobileMini from '../Images/drive-in-movie-mobile-mini.jpg';
  import Badge from "../Components/Badge";
  import { useState, useEffect} from "react";


  
  const WrongAnswer = ({ setScene, resetSelectedMovie, lives }) => {
    const { width: currentWidth ,height:currentHeight } = useWindowDimensions();
    const handleNextQuestion = () => {
      setScene("Question");
      resetSelectedMovie();
    };


  
    let [fontsLoaded] = useFonts({
      Limelight_400Regular,
    });
  
    let backgroundImage;
    let contentViewStyle;
    let answerWidth;
    let answerHeight;
    let textSize;
    let topMargin;
    
    if (currentWidth >1300 && currentHeight > 1200) {
			backgroundImage = driveIn;
			answerWidth = "50%";
			answerHeight = "70%";
			textSize = 28;
		} else if (currentWidth > 900 && currentHeight > 1200) {
			backgroundImage = driveInMobile;
			answerWidth = "75%";
			answerHeight = "65%";
			textSize = 28;
		} else if (currentWidth > 900 && currentHeight < 700) {
			backgroundImage = driveInMobile;
			answerWidth = "75%";
			answerHeight = "95%";
			textSize = 28;
		} else if (currentWidth < 800 && currentHeight > 900) {
			backgroundImage = driveInMobile;
			answerWidth = "75%";
			answerHeight = "65%";
			textSize = 28;
		} 
		 else if (currentWidth >500 && currentHeight < 700) {
			backgroundImage = driveInMobile;
			answerWidth = "75%";
			answerHeight = "90%";
			textSize = 28;
		} else if (currentWidth < 430 && currentHeight > 700) {
			backgroundImage = driveInMobile;
			answerWidth = "75%";
			answerHeight = "75%";
			textSize = 28;
		} else if (currentWidth < 370 && currentHeight > 500) {
			backgroundImage = driveInMobile;
			answerWidth = "75%";
			answerHeight = "86%";
			textSize = 28;
		} else if (currentWidth < 600 && currentHeight > 500) {
			backgroundImage = driveInMobile;
			answerWidth = "75%";
			answerHeight = "90%";
			textSize = 28;
		} else if (currentWidth > 700) {
			backgroundImage = driveInMobile;
			answerWidth = "80%";
			answerHeight = "80%";
			textSize = 28;
		} else if (currentWidth > 580) {
			backgroundImage = driveInMobile;
			answerWidth = "80%";
			answerHeight = "80%";
			textSize = 28;
		} else {
			backgroundImage = driveInMobileMini;
			answerWidth = "100%";
			answerHeight = "65%";
			textSize = 17;
		} 
    if(!fontsLoaded){
      return <AppLoading />;
    } else {
      return (
				<View style={{ flex: 1 }}>
					<ImageBackground
						style={styles.driveIn}
						source={backgroundImage}
						resizeMode="cover"
					>
						<View style={[styles.scrollViewContent, contentViewStyle]}>
							<View style={{ alignItems: "center", flex: 1 }}>
								<View
									style={[
										styles.answerContainer,
										{
											width: answerWidth,
											height: answerHeight,
											marginTop: topMargin,
										},
									]}
								>
									<Text style={[styles.h2, { fontSize: textSize }]}>
										Incorrect Answer!
									</Text>
								</View>
								<View style={styles.indicators}>
									<View style={{ minWidth: 45 }}>
										<Lives />
									</View>
									<View >
										<Badge />
									</View>
								</View>
							</View>

							<Pressable
								style={[styles.button]}
								onPress={handleNextQuestion}
								accessibilityRole="button"
								accessibilityHint="This button takes you to the next question"
							>
								<ImageBackground style={styles.ticketButton} source={ticket}>
									<Text style={styles.ticketText}>Next Question!</Text>
								</ImageBackground>
							</Pressable>
						</View>
					</ImageBackground>
				</View>
			);
    }
  };
  
  function mapStateToProps(state) {
    return {
      scene: state.scene,
      selectedMovie: state.selectedMovie,
      lives: state.lives
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      setScene: (name) =>
        dispatch({
          type: "SET_SCENE",
          name,
        }),
      resetSelectedMovie: () =>
        dispatch({
          type: "RESET_SELECTED_MOVIE",
        }),
    };
  }
  
  const styles = StyleSheet.create({
  borderStyleDebug: {
      borderWidth: 2,
      borderColor: "#000",
    },
    scrollViewContent: {
      flex: 1,
      justifyContent: "space-between",
      marginBottom: 20,
    },
    answerContainer: {
      justifyContent: "center",    
      backgroundColor: "#292840",
      minWidth: 325, // 320px is iPhone 5/SE size
      width: '50%',
      height: '100%',
      alignItems:"center",
      textAlign:'center',
    },
    button: {
      flexShrink: 1,
      alignSelf: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      backgroundColor: "transparent",
      marginTop: 50,
    },
    textContainer: {
      alignSelf: 'center',
      alignItems: "center",
      borderRadius: 10,
      width: '80%',
      maxWidth: 400,
      marginTop: 50,
    },
    h2: {
      fontSize: 36,
      marginVertical: 10,
      fontFamily: "Limelight_400Regular",
      color: "#F2D379", 
      alignSelf: "center",
      
      
    },
    ticketButton: {
      maxWidth: "100%",
      maxHeight: "100%",
      width: 224,
      height: 116,
      justifyContent: "center",
    },
    ticketText: {
      fontFamily: "Limelight_400Regular",
      position: "absolute",
      alignSelf: "center",
    },
    driveIn: {
      justifyContent: "center",
      height: "100%",
    },
    indicators: {
      marginTop: Platform.OS === "web" ? 30 : 10,
      minWidth: 375, // 320px is iPhone 5/SE size
      width: '50%',
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(WrongAnswer);