import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";

function GamePlayMode({ gamePlayMode }) {
  return (
    <View style={styles.container}>
        <Text style={styles.gamePlayText}>{gamePlayMode}</Text> 
    </View>
  )
}

const mapStateToProps = (state) => ({
    gamePlayMode: state.gamePlayMode,
    
  });
  
  
  

const styles = StyleSheet.create({
    container: {
     alignSelf: "center",
     alignItems: "center",
     textAlign: "center",
     justifyContent: "center",
     backgroundColor: "#A0947C",
     borderRadius: 25,
     color: "red",
     height: 30,
     width: 150,
     position: "absolute",
     top: 34,
     zIndex: 6,
    },
    gamePlayText: {
        color: "#292840",
        fontWeight: "bold",
        
       },
  
  });

  export default connect(mapStateToProps)(GamePlayMode);