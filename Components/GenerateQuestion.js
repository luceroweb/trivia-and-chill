import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { getGenreName } from "../Utils/FetchApi";
import { connect } from "react-redux";
import { getMovieChanges, getPerformerName } from "../Utils/FetchApi";
import axios from "axios";

const GenerateQuestion = ({ movies, setSelectedMovie, setGenreName }) => {
  let movie = movies ? movies[RandomGenerator(movies.length)] : [];

  useEffect(() => {
    getGenreName(movie.genre_ids[0])
      .then((res) => {
        setGenreName(res);
        let questionObject = movie ? madLibsArray(movie, res) : {};
        let randomIndex = RandomGenerator(questionObject.length);
        setSelectedMovie(questionObject[randomIndex]);
      });

  useEffect(() => {
    getPerformerName(movie.id)
  .then(response => {
    movie={...movie, name: response.data.cast[0].name}
  let questionObject = movie ? madLibsArray(movie, response) : {};
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
