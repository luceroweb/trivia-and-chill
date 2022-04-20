import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { getGenreName } from "../Utils/FetchApi";
import { connect } from "react-redux";
import { getMovieChanges, getPerformerName } from "../Utils/FetchApi";
import axios from "axios";

const GenerateQuestion = ({ movies, setSelectedMovie }) => {
  let count = 0;
  const checkUndefined = () => {
    console.log("RUNNING checkUndefined ", count);
    let movie = movies ? movies[RandomGenerator(movies.length)] : [];
    
    movie.release_date = "";
    axios
      .all([getPerformerName(movie.id), getGenreName(movie.genre_ids[0])])
      .then(
        axios.spread((castRes, genreRes) => {
          movie = { ...movie, cast: castRes.data.cast, genre: genreRes };
          let questionObject = movie ? madLibsArray(movie) : {};
          let randomIndex = RandomGenerator(questionObject.length);
          const movieQuestion = questionObject[randomIndex].question;
          console.log("QUESTION 1: ", movieQuestion);
          const movieAnswer = questionObject[randomIndex].answer;
          console.log("ANSWER 1: ", movieAnswer);
          if (count > 2) {
            console.error("Count equals 3");
            // add alert in here
            return;
          }
          
          if (movieQuestion.includes("undefined")) {
            count++;
            console.log("QUESTION MISSING DATA");
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
              console.log("ANSWER MISSING DATA");
              checkUndefined();
              return;
            } else {
              count = 0;
              setSelectedMovie(questionObject[randomIndex]);
              return;
            }
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateQuestion);
