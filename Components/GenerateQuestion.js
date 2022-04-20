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
  let count = 0;
  const checkUndefined = () => {
    let movie = movies ? movies[RandomGenerator(movies.length)] : [];
    
    axios
      .all([getPerformerName(movie.id), getGenreName(movie.genre_ids[0])])
      .then(
        axios.spread((castRes, genreRes) => {
          movie = { ...movie, cast: castRes.data.cast, genre: genreRes };
          let questionObject = movie ? madLibsArray(movie) : {};
          let randomIndex = RandomGenerator(questionObject.length);
          const movieQuestion = questionObject[randomIndex].question;
          const movieAnswer = questionObject[randomIndex].answer;
          if (count > 2) {
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
            return;
          }
          
          if (movieQuestion.includes("undefined")) {
            count++;
            checkUndefined();
            return;
          }
          
          if(typeof movieAnswer === "object") {
            let foundUndefined = false;
            for (let i = 0; i < movieAnswer.length; i++ ){
              if (movieAnswer[i] === "undefined"); {
                foundUndefined = true;
              }
            }

            if (foundUndefined) {              
              count++;
              checkUndefined();
              return;
            }

            count = 0;
            setSelectedMovie(questionObject[randomIndex]);
            return;            
          }

          count = 0;
          setSelectedMovie(questionObject[randomIndex]);
          return;
          
        })
      );
  }

  useEffect(() => {
    checkUndefined();
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
