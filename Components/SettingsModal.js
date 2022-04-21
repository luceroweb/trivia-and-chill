import { useEffect } from "react";
import { connect } from "react-redux";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { getGenre } from "../Utils/FetchApi";
const SettingsModal = ({
  scene,
  gamePlayMode,
  setGamePlayMode,
  modalVisible,
  setModalVisible,
  setGenre,
  genreTypes,
  genre,
  setGenreTypes,
}) => {
  useEffect(() => {
    getGenre().then((genreTypes) => {
      setGenreTypes(genreTypes.data.genres);
    });
  }, []);
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
            <Text style={[styles.settingHeader, styles.label]}>Settings</Text>
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

              {/* Genre Picker */}
              <Text style={styles.label}>Select a Genre</Text>
              <Picker
                style={styles.input}
                selectedValue={genre == null ? "" : genre.id}
                onValueChange={(newGenreId) => {
                  const foundGenre = genreTypes.find(
                    (genre) => genre.id == newGenreId
                  );
                  setGenre(foundGenre ? foundGenre : null);
                }}
              >
                <Picker.Item label="All Genres" value="" />
                {genreTypes.map((genre, key) => {
                  return (
                    <Picker.Item
                      label={genre.name}
                      value={genre.id}
                      key={key}
                    />
                  );
                })}
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
    genreTypes: state.genreTypes,
    genre: state.genre,
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
    setGenre: (genre) => {
      dispatch({
        type: "SET_GENRE",
        genre: genre,
      });
    },
    setGenreTypes: (genreTypes) => {
      dispatch({
        type: "SET_GENRE_TYPES",
        genreTypes: genreTypes,
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
    marginTop: -12,
    marginBottom: 10,
  },
  settingHeader: {
    fontSize: 20,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
