import { useState } from "react";
import { connect } from "react-redux";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const SettingsModal = ({ scene, gamePlayMode, setGamePlayMode }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {scene === "Question" || scene === "CorrectAnswer" ? (
        <View></View>
      ) : (
        <>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalView}>
              <Pressable
                style={styles.exit}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign
                  style={styles.exit}
                  name="closecircle"
                  size={24}
                  color="black"
                />
              </Pressable>
              <Text>Select a Game Play Mode</Text>
              <Picker
                style={{width: 200}}
                selectedValue={gamePlayMode}
                onValueChange={(newMode, itemIndex) => {
                
                  setGamePlayMode(newMode)
                }}
              >
                <Picker.Item label="Single Player" value="singlePlayer" />
                <Picker.Item label="Easy Single Player" value="easySinglePlayer" />
              </Picker>
            </View>
          </Modal>
          <Pressable onPress={() => setModalVisible(true)}>
            <AntDesign name="setting" size={24} color="#F2D379" />
          </Pressable>
        </>
      )}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    scene: state.scene,
    gamePlayMode: state.gamePlayMode
  };
}
// this is how the picker tells redux that the user has selected a new player mode
// so that other components that use gamePlayMode state, ex GamePlayMode.js, can update with the new player mode
function mapDispatchToProps(dispatch) {
  return {
    setGamePlayMode: (mode) => {
      dispatch({
        // type or action or action type, payload
        type: 'SET_GAME_PLAY_MODE',
        gamePlayMode: mode
      })
    }
  }
}

const styles = StyleSheet.create({
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  exit: {
    alignSelf: "flex-end",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
