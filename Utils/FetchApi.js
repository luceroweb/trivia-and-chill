import { useEffect, useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";

export default function FetchApi() {
  const [movies, setMovies] = useState([]);
  const randomNumber = Math.floor(Math.random() * 1.0);
  const Video_Trailer =
    "https://api.themoviedb.org/3/movie/634649/videos?api_key=68f693d561359896a6ae9c926dc4f853&language=en-US";
  ("https://api.themoviedb.org/3/movie/936979/videos?api_key=68f693d561359896a6ae9c926dc4f853&language=en-US");
  const Popular_Movies =
    "https://api.themoviedb.org/3/movie/popular?api_key=68f693d561359896a6ae9c926dc4f853&language=en-US&page=1";
  useEffect(
    () =>
      axios
        .get(Popular_Movies)
        .then((res) => console.log(res.data.results[randomNumber].id))
        .catch((err) => console.log(err.response.data)),
    []
  );

  console.log(movies);
  return (
    <View>
      <Text>{movies}</Text>
    </View>
  );
}
