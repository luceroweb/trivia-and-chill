import React from 'react'
import { View } from 'react-native';
import madLibsArray from '../Utils/madLibsArray';
import RandomGenerator from '../Utils/RandomGenerator';

const GenerateQuestion = ({ movies }) => {

  let movie = movies
    ? movies[RandomGenerator(movies.length)] 
    : [];

  let questionObject = movie 
    ? madLibsArray(movie)
    : {};
    
  
  if(questionObject) {
    let film = RandomGenerator(questionObject.length);
    // console.log(film);
    console.log('Mad Libs', questionObject[film], questionObject[film]?.movieId) 
  };

  return (
    <View>
    </View>
  )
}

export default GenerateQuestion;