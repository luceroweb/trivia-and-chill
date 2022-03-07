import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import getGenreName from "../Utils/FetchApi";
import { connect } from "react-redux";

const GenerateQuestion = ({ movies, setSelectedMovie,movieId}) => {
  let movie = movies ? movies[RandomGenerator(movies.length)] : [];

  let questionObject = movie ? madLibsArray(movie) : {};
  let randomIndex = RandomGenerator(questionObject.length);
 
  useEffect(() => {
    getGenreName(movieId)
    .then((response) => {
      movie={...movie, name: response.data?.genre_ids[0]}
      console.log('MOVIE', movie);
      console.log('NAME', response.data?.genre_ids[0]);
    });

    setSelectedMovie(questionObject[randomIndex]);
  }, []);
  
console.log(movies)
console.log(movieId)
  return <View></View>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateQuestion);
