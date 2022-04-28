import React, { useEffect } from "react";
import { View, Alert } from "react-native";
import madLibsArray from "../../Utils/madLibsArray";
import RandomGenerator from "../../Utils/RandomGenerator";
import { getGenreName, getPerformerName } from "../../Utils/FetchApi";
import { connect } from "react-redux";
import axios from "axios";
import { Platform } from "expo-modules-core";

const GenerateQuestion = ({ movies, setSelectedMovie, setScene }) => {
  const hasValidValues = (valuesList) =>
    valuesList.every((value) => {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return false;
        } else {
          return hasValidValues(value);
        }
      } else if (typeof value === "object" && value !== null) {
        return hasValidValues(Object.values(value));
      } else if (typeof value === "undefined" || value === "") {
        return false;
      }
      return true;
    });

  useEffect(() => {
    const generateQuestionAndCheckUndefined = async () => {
      let count = 0;
      let isValid = false;
      let newMovie = await fetchNewMovie();

      while (!isValid && count < 2) {
        const movieQueryValues = Object.values(newMovie);
        isValid = hasValidValues(movieQueryValues);
        if (!isValid) {
          newMovie = await fetchNewMovie();
          count++;
        }
      }

      if (count >= 2) {
        if (Platform.OS === "web") {
          alert(`ERROR: Found too much missing data.
Press OK to return to the main screen.`);
          setScene("Main");
        } else {
          Alert.alert(
            "ERROR: Found too much missing data.",
            "Press OK to return to the main screen.",
            [
              {
                text: "OK",
                onPress: () => setScene("Main"),
              },
            ]
          );
        }
      } else {
        let questionObject = madLibsArray(newMovie);
        let randomIndex = RandomGenerator(questionObject.length);
        setSelectedMovie(questionObject[randomIndex]);
      }
    };

    const fetchNewMovie = async () => {
      let movie = movies ? movies[RandomGenerator(movies.length)] : [];

      return await axios
        .all([getPerformerName(movie.id), getGenreName(movie.genre_ids[0])])
        .then(
          axios.spread((castRes, genreRes) => {
            return {
              ...movie,
              cast: castRes.data.cast.slice(0, 10),
              genre: genreRes,
            };
          })
        );
    };

    generateQuestionAndCheckUndefined();
  }, []);

  return <View></View>;
};

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedMovie: (selectedMovie) =>
      dispatch({
        type: "SET_SELECTED_MOVIE",
        selectedMovie,
      }),
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateQuestion);
