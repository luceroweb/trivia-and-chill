import axios from "axios";

export default async function FetchApi() {
  let movies = [];

  await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US"
    )
    .then((res) => (movies = res.data.results))
    .catch((err) => console.log(err.response.data));
    console.log(movies)

  return movies;
}

export async function getPerformerName(movieId) {
  let credits = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US`
    )
    .catch((err) => console.log(err))
    console.log("credits", credits)
  return credits;
}


export async function getYouTubeId(movieId) {
  let youTubeId = "";

  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US`
    )
    .then((response) => (youTubeId = response.data.results[0]||null))
    .catch((err) => console.log(err.response.data));

  return youTubeId;
}

// import { useEffect, useState } from "react";
// import axios from 'axios'
// import {View, Text}from 'react-native'


// export default function FetchApi(){
//     const [movieTitle, setMovieTitle] = useState([]);
//     const [movieReleaseDate, setMovieReleaseDate] = useState([]);
//     const fetchData = () => {
//         const movieTitleApi = `https://api.themoviedb.org/3/movie/tt0137523?`
//         const movieReleaseDateApi = `https://api.themoviedb.org/3/movie/tt0137523?`;
//         const getMovieTitle = axios.get(movieTitleApi);
//         const getMovieReleaseDate = axios.get(movieReleaseDateApi);
//         axios.all([getMovieTitle, getMovieReleaseDate]).then(
//         axios.spread((...allData) => {
//             const allDataMovieTitle = allData[0].data.title;
//             const allDataMovieReleaseDate = allData[1].data.release_date;
//             setMovieTitle(allDataMovieTitle);
//             setMovieReleaseDate(allDataMovieReleaseDate);
//         })
//         )
//     }
//     useEffect(
//         ()=> {
//         fetchData()
//         },[])
//     return(
//         <View>
//         <Text>The release date for the movie " {movieTitle} " was {movieReleaseDate} .</Text>
//         </View>
//     )
// }
