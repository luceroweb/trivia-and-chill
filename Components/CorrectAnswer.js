import { ScrollView, View, Text, Button, StyleSheet, Platform, } from 'react-native';

const CorrectAnswer = ({ videoId }) => {
  const handleNextQuestion = () => {
    // set scene state to question scene
  }

  return (
    <ScrollView
      style={[styles.scrollViewOuter, styles.borderStyleDebug]} 
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={[ styles.videoContainer, styles.boxShadow, styles.borderStyleDebug ]}>
        <Text>Video Trailer Component goes here</Text>
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.h2}>Correct!</Text>
        <Text style={styles.h3}>Here's a trailer for your troubles</Text>
      </View>
     
      <View style={styles.buttonContainer}>
        <Button
          // pressable instead
          title="Next Question!"
          onPress={handleNextQuestion}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  borderStyleDebug: {
    borderWidth: 2,
    borderColor: "black",
  },
  scrollViewOuter: {
    alignSelf: 'center',
    width: Platform.OS === 'web' ? '80%' : '100%' // we should add a horizontalPadding to the content instead
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  boxShadow: {
    shadowOffset: {
      width: 5.0,
      height: 5.0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    shadowColor: 'red',
  },
  videoContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  buttonContainer: {
    flexShrink: 1,
    alignSelf: 'center',
    padding: 10,
  },
  textContainer: {
    flexGrow: 1, // pushes textContainer upwards
    marginVertical: 50,
    alignItems: 'center',
  },
  h2: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  }
});

export default CorrectAnswer;