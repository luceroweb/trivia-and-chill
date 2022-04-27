import React, { useEffect } from "react";
import { View, Alert } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { getGenreName } from "../Utils/FetchApi";
import { connect } from "react-redux";
import { getMovieChanges, getPerformerName } from "../Utils/FetchApi";
import axios from "axios";
import { Platform } from "expo-modules-core";

const GenerateQuestion = ({ movies, setSelectedMovie, setScene}) => {
  const hasValidValues = (valuesList) => {
    return valuesList.every((value) => {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return false;
        } else {
          return hasValidValues(value);
        }
      } else if (typeof value === 'object' && value !== null) {
        return hasValidValues(Object.values(value));
      } else if (typeof value === 'undefined' || value === '') {
        return false;
      }
      return true
    });
  }
  
  useEffect(() => {
    let count = 0;
    
    const generateQuestionAndCheckUndefined = async () => {
      let isValid = false;
      let newMovie = await fetchNewMovie();

      while (!isValid && count < 2) {
        if (isValid) {
          isValid = true;
        } else {
          const movieQueryValues = Object.values(newMovie);

          isValid = hasValidValues(movieQueryValues);
          if (!isValid) {
            newMovie = await fetchNewMovie();
            count++;
          }
        }
      }

      if (count >= 2) {
        if (Platform.OS === "web") {
          alert(`ERROR: Found too much missing data.
Press OK to return to the main screen.`);
          setScene("Main");
        }

        if (Platform.OS !== "web") {
          Alert.alert(
            "ERROR: Found too much missing data.",
            "Press OK to return to the main screen.",
            [
              {
                text: "OK",
                onPress: () => setScene("Main"),
              }
            ]
          )
        }
      } else {
        let questionObject = madLibsArray(newMovie);
        let randomIndex = RandomGenerator(questionObject.length);
        setSelectedMovie(questionObject[randomIndex]);
      }
    }

    const fetchNewMovie = async () => {
      let movie = movies ? movies[RandomGenerator(movies.length)] : [];

      return await axios
        .all([getPerformerName(movie.id), getGenreName(movie.genre_ids[0])])
        .then(
          axios.spread((castRes, genreRes) => {
            movie = { ...movie, cast: castRes.data.cast.slice(0, 2), genre: genreRes };
            return movie;
      }))
    };
    
    generateQuestionAndCheckUndefined();  
  }, []);

  return <View></View>;
};

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
    genreName: state.genreName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedMovie: (selectedMovie) =>
      dispatch({
        type: "SET_SELECTED_MOVIE",
        selectedMovie,
      }),
    setGenreName: (genreName) =>
      dispatch({
        type: "SET_GENRE_NAME",
        genreName,
      }),
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateQuestion);
