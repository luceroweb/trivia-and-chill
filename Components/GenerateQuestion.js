import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { connect } from "react-redux";
import { getMovieChanges, getPerformerName } from "../Utils/FetchApi";
import axios from "axios";

const GenerateQuestion = ({ movies, setSelectedMovie }) => {
  let movie = movies ? movies[RandomGenerator(movies.length)] : {};


  useEffect(() => {
    getPerformerName(movie.id)
  .then(response => {
    movie={...movie, name: response.data.cast[0].name}
  let questionObject = movie ? madLibsArray(movie) : {};
  let randomIndex = RandomGenerator(questionObject.length);
  setSelectedMovie(questionObject[randomIndex]);
  }) 
  }, []);

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
