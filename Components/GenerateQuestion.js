import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { getGenreName } from "../Utils/FetchApi";
import { connect } from "react-redux";

const GenerateQuestion = ({ movies, setSelectedMovie, setGenreName }) => {

  useEffect(() => {
    let movie = movies ? movies[RandomGenerator(movies.length)] : [];
    getGenreName(movie.genre_ids[0])
      .then((res) => {
        setGenreName(res);
        let questionObject = movie ? madLibsArray(movie, res) : {};
        let randomIndex = RandomGenerator(questionObject.length);
        setSelectedMovie(questionObject[randomIndex]);
      });
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
