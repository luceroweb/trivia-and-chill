import { useEffect, useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";

const randomNumber = Math.floor(Math.random() * 20);
export default function FetchApi() {
  const [movies, setMovies] = useState([]);
  useEffect(
    () =>
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US&page="
          
        )
        .then((res) => console.log(res.data.results[randomNumber].title))
        .catch((err) => console.log(err.response.data)),

    []
  );
 console.log(movies)
  return (
  <View >
     <Text>{movies}</Text>
  </View>);
}
