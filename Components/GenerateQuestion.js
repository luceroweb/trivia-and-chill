import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { getGenreName, genreName, getGenreFromId } from "../Utils/FetchApi";
// import setGenreName from ""
import { connect } from "react-redux";

const GenerateQuestion = ({ movies, setSelectedMovie, selectedMovie }) => {
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

  // useEffect(() => {
  //   getGenreName(movieId).then((res) => setGenreName(res));
  // }, []);

  useEffect(() => {
    getGenreFromId(movie.genre_ids[0]);
  }, []);

  // console.log(genreName); // Trying to get the genre name
  // console.log("Genre Id", movie.genre_ids[0]);
  // console.log("Movie", movie)
  // console.log("Selected", selectedMovie)
  return <View></View>
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
