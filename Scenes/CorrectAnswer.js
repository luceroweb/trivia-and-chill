import { ScrollView, View, Text, Pressable, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const VideoSkeleton = () => (
  <View style={skelStyle.container}>
    <View style={skelStyle.video}>
      <Text>Video Trailer Component goes here</Text>
    </View>
    <View style={skelStyle.infoContainer}>
      <View style={skelStyle.avatar}>

      </View>
      <View style={skelStyle.description}>

      </View>
    </View>
  </View>
);

const CorrectAnswer = ({ videoId }) => {
  const { width } = useWindowDimensions();
  const handleNextQuestion = () => {
    // set scene state to question scene
  }

  return (
    <View style={{flex: 1}}>
      <ConfettiCannon
        count={100}
        origin={{x: -10, y: 0}}
        fadeOut={true}
      />
      <ScrollView
        // todo: replace paddingTop value with useSafeAreaInsets
        style={[styles.scrollViewOuter, { paddingTop: 20 }]} 
        contentContainerStyle={[
          styles.scrollViewContent,
          { marginHorizontal: width > 1000 ? 100 : 0 }
        ]}
      >
        <View style={[ styles.videoContainer, Platform.OS === 'web' ? styles.boxShadow: null ]}>
          {/* replace VideoSkeleton with your Trailer component
              or use it for a loading animation... */}
          <VideoSkeleton />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.h2}>Correct!</Text>
          <Text style={styles.h3}>Enjoy this video trailer</Text>
        </View>
      
        <Pressable
          style={[ styles.button, styles.boxShadow ]}
          onPress={handleNextQuestion}
        >
          <Text>Next Question!</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

const skelStyle = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  video: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '100%',
    backgroundColor: '#E0E0E0',
  },
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 100,
    marginRight: 20,
  },
  description: {
    minWidth: '60%',
    height: 25,
    backgroundColor: '#E0E0E0',
  },
})

const styles = StyleSheet.create({
  borderStyleDebug: {
    borderWidth: 2,
    borderColor: "black",
  },
  scrollViewOuter: {
    alignSelf: 'center',
    width: '100%'
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  boxShadow: {
    shadowOffset: {
      width: 2.0,
      height: 5.0,
    },
    shadowRadius: Platform.OS === 'web' ? 8.0 : 2.0,
    shadowOpacity: 0.4,
  },
  videoContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  button: {
    flexShrink: 1,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'lightblue',
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