import { StyleSheet, View, Text, Image, Pressable, useWindowDimensions } from 'react-native';
import { connect } from 'react-redux';

function Main({ setScene }){
  const windowWidth = useWindowDimensions().width;
  console.log("window", windowWidth);

  return(
    <View style={styles.container}>
      <Image
        style={{ width: "80%", aspectRatio: 7/1 }}
        source={require('../Images/bw-header-logo.png')}
        alt="BitWise Industries" />
      <Image
        style={{ width: "45%", aspectRatio: 5/1 }}
        source={require('../Images/teammvp-header-logo.png')}
        alt="Team MVP" />
      <Image
        style={{ width: "45%", aspectRatio: 5/1 }}
        source={require('../Images/presents-header-logo.png')}
        alt="Presents" />
      <Image
        style={{ width: "75%", aspectRatio: 1 }}
        source={require('../Images/gtm-header-logo.png')}
        alt="Guess The Movie" />
      <Pressable onPress={()=>setScene('Question')} style={styles.start}>
        <Text>Start</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
    },
    start: {
      borderRadius: 5,
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 10,
    }
});

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name
      })
  };
}

export default connect(null, mapDispatchToProps)(Main);