import React from 'react'
import { View } from 'react-native';
import madLibsArray from '../Utils/madLibsArray';
import RandomGenerator from '../Utils/RandomGenerator';

const GenerateQuestion = ({ movies
  ,movieId ,setMovieId
}) => {
  
  let movie = movies
    ? movies[RandomGenerator(movies.length)] 
    : [];

  let questionObject = movie 
    ? madLibsArray(movie)
    : {};

  if(questionObject) {
    console.log('Mad Libs', questionObject[RandomGenerator(questionObject.length)]?.question) 
  };
  console.log(questionObject[RandomGenerator(questionObject.length)]?.movieId) 
  return (
    <View>
    </View>
  )
}


export default GenerateQuestion;