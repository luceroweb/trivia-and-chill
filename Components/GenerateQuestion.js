import React, { useEffect } from "react";
import { View } from "react-native";
import madLibsArray from "../Utils/madLibsArray";
import RandomGenerator from "../Utils/RandomGenerator";
import { getGenreName } from "../Utils/FetchApi";
import { connect } from "react-redux";
import { getMovieChanges, getPerformerName } from "../Utils/FetchApi";

const GenerateQuestion = ({ movies, setSelectedMovie }) => {
  useEffect(() => {
    let mov = movies ? movies[RandomGenerator(movies.length)] : [];
    getGenreName(mov.genre_ids[0])
      .then((res) => {
        let questionObj = mov ? madLibsArray(mov, res) : {};
        let randomInd = RandomGenerator(questionObj.length);
        setSelectedMovie(questionObj[randomInd]);
      })
    }, []);

  // useEffect(() => {
  //   let movie = movies ? movies[RandomGenerator(movies.length)] : [];
  //   getPerformerName(movie.id)
  //     .then(response => {
  //       movie={...movie, name: response.data.cast[0].name}
  //       let questionObject = movie ? madLibsArray(movie, response) : {};
  //       let randomIndex = RandomGenerator(questionObject.length);
  //       setSelectedMovie(questionObject[randomIndex]); 
  //     })
  //   }, []);

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