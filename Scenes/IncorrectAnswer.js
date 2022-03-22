import {
    View,
    Text,
    Pressable,
    StyleSheet,
    useWindowDimensions,
    ImageBackground,
  } from "react-native";
  import { connect } from "react-redux";
  import Lives from "../Components/Lives";
  import AppLoading from "expo-app-loading";
  import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
  import ticket from "../Images/ticket.png";
  import drivein from "../Images/drive-in-movie.jpg";
  import driveinMobile from '../Images/drive-in-movie-mobile.jpg';
  import driveinMobileMini from '../Images/drive-in-movie-mobile-mini.jpg';
  import Badge from "../Components/Badge";
  
  const IncorrectAnswer = ({ selectedMovie, setScene, resetSelectedMovie, lives }) => {
    const { width: currentWidth, height: currentHeight } = useWindowDimensions();
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
    let aspectRatio;
    let textSize;
    let topMargin;
    let badgeSize;
    let badgeMargin;
    
    if (currentWidth > 1000) {
      backgroundImage = drivein;
      contentViewStyle = styles.wrap;
      answerWidth = "50%";
      answerHeight = "65%";
      badgeMargin=11;
      badgeSize=1.7;
      textSize=28;
    } else if (currentWidth > 580) {
      backgroundImage = driveinMobile;
      contentViewStyle = styles.wrapMobile;
      answerWidth = "75%";
      answerHeight="60%";
      badgeMargin=11;
      badgeSize=1.7;
      textSize=28;
      // aspectRatio = 16/9;
    } else if (currentWidth > 430) {
      backgroundImage = driveinMobileMini;
      contentViewStyle = styles.wrapMini;
      answerWidth = "75%";
      answerHeight = "65%";
      textSize=25;
      badgeSize=1.4;
      badgeMargin=10;
    } else {
      backgroundImage = driveinMobileMini;
      contentViewStyle = styles.wrapSuperMini;
      answerWidth = "90%";
      answerHeight = "33%";
      textSize=17;
      topMargin=40;
      badgeSize=1;
      // top:40
      
    }
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={styles.drivein}
            source={backgroundImage}
            resizeMode="cover"
          >
            <View
              style={[styles.scrollViewContent, contentViewStyle]}
            >
              <View style={{ alignItems: 'center', flex: 1 }}>
                <View
                  style={[
                    styles.answerContainer,
                    { width: answerWidth, height: answerHeight,marginTop:topMargin }
                  ]}
                >
                    <Text style={[styles.h2,{fontSize:textSize}]}>
                        Oh no!  You got the wrong answer.{"\n"}{"\n"} You have 
                        <View style={[styles.badge,{marginLeft:badgeMargin,marginRight:badgeMargin,transform:[{scale:badgeSize}]}]}>
                            <Lives />
                        </View> 
                        lives left. {"\n"}{"\n"}Try again!
                        <Badge />
                    </Text>              
                </View>
              </View>
  
              <Pressable style={[styles.button]} onPress={handleNextQuestion} accessibilityRole="button" accesibilityLabel="Go to Next Question" accessibilityHint="This button takes you to the next question">
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
    wrap: {
     marginTop:"1%",
    },
    wrapMobile: {
      marginTop: "10%",
    },
    wrapMini: {
      marginTop: "25%",
    },
    wrapSuperMini: {
      marginTop: 115,
    },
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
      minWidth: 375, // 320px is iPhone 5/SE size
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
    badge: {
        
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
    drivein: {
      justifyContent: "center",
      height: "100%",
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(IncorrectAnswer);