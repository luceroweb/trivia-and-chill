import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { getGenreName } from "../Utils/FetchApi";
import { connect } from "react-redux";
import { getMovieChanges, getPerformerName } from "../Utils/FetchApi";
import axios from "axios";

const GenerateQuestion = ({ movies, setSelectedMovie }) => {
  useEffect(() => {
    let movie = movies ? movies[RandomGenerator(movies.length)] : [];
    axios.all([getPerformerName(movie.id), getGenreName(movie.genre_ids[0])])
      .then(axios.spread ((castRes, genreRes) => {
        movie={...movie, name: castRes.data.cast[0].name}
        let questionObject = movie ? madLibsArray(movie, castRes) : {};
        let randomIndex = RandomGenerator(questionObject.length);
        setSelectedMovie(questionObject[randomIndex]);

        let questionObj = movie ? madLibsArray(movie, genreRes) : {};
        let randomInd = RandomGenerator(questionObj.length);
        setSelectedMovie(questionObj[randomInd]);
      }))
    }, []);

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