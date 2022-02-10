import { useEffect, useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";



export default function FetchApi() {
  const [movies, setMovies] = useState([]);
  const randomNumber = Math.floor(Math.random() * 20);
  useEffect(
    () =>
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=68f693d561359896a6ae9c926dc4f853&language=en-US&page="
          
        )
        .then((res) => setMovies(res.data.results[randomNumber].title))
        .catch((err) => console.log(err.response.data)),

    []
  );
 console.log(movies)
  return (
  <View >
     <Text>{movies}</Text>
  </View>);
}
