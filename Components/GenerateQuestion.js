import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { connect } from "react-redux";

const GenerateQuestion = ({ movies, setSelectedMovie,movieId}) => {
  let movie = movies ? movies[RandomGenerator(movies.length)] : [];

  let questionObject = movie ? madLibsArray(movie) : {};
  let randomIndex = RandomGenerator(questionObject.length);
 
  useEffect(() => {
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
