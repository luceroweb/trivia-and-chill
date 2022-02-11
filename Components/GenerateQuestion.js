import React, { useEffect } from "react";
import { View, Text } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { connect } from "react-redux";

const GenerateQuestion = ({ movies, selectedMovie, setSelectedMovie }) => {
  let movie = movies ? movies[RandomGenerator(movies.length)] : [];

  let questionObject = movie ? madLibsArray(movie) : {};

  useEffect(() => {
    if (questionObject) {
      let randomIndex = RandomGenerator(questionObject.length);
      console.log(
        "Mad Libs",
        questionObject[randomIndex],
        questionObject[randomIndex]?.movieId,
        questionObject[randomIndex]?.answer,
        questionObject[randomIndex]?.question
      );
      movies ? setSelectedMovie(questionObject[randomIndex]) : null;
    }
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateQuestion);
