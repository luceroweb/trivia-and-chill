
import { connect } from "react-redux";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
const SettingsModal = ({
  scene,
  gamePlayMode,
  setGamePlayMode,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <View>
      {scene === "Question" || scene === "CorrectAnswer" ? (
        <View></View>
      ) : (
        <>
          <Modal
            animationType="fade"
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
              {/* GameMode Picker */}
              <Text style={styles.label}>Select a Game Play Mode</Text>
              <Picker
                style={styles.input}
                selectedValue={gamePlayMode}
                onValueChange={(newMode, itemIndex) => {
                  setGamePlayMode(newMode);
                }}
              >
                <Picker.Item label="Single Player" value="singlePlayer" />
                <Picker.Item
                  label="Easy Single Player"
                  value="easySinglePlayer"
                />
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
    gamePlayMode: state.gamePlayMode,
    modalVisible: state.modalVisible,
  };
}
// this is how the picker tells redux that the user has selected a new player mode
// so that other components that use gamePlayMode state, ex GamePlayMode.js, can update with the new player mode
function mapDispatchToProps(dispatch) {
  return {
    setGamePlayMode: (mode) => {
      dispatch({
        // type or action or action type, payload
        type: "SET_GAME_PLAY_MODE",
        gamePlayMode: mode,
      });
    },
    setModalVisible: (visible) => {
      dispatch({
        type: "SET_MODAL_VISIBLE",
        modalVisible: visible,
      });
    },
  };
}

const styles = StyleSheet.create({
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 5,
    paddingRight: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: "center",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    width: 200,
    marginBottom: 10,
  },
  exit: {
    alignSelf: "flex-end",
    marginRight: -10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
