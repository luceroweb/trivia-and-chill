import { useState } from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SettingsModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
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
            <AntDesign style={styles.exit} name="closecircle" size={24} color="black" />
          </Pressable>
          <Text style={styles.modalText}>Settings</Text>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <AntDesign style={styles.gear} name="setting" size={24} color="#F2D379"/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  exit:{
    alignSelf: "flex-end",
  },
  gear:{
    alignSelf: "flex-end",
  },
});

export default SettingsModal;
