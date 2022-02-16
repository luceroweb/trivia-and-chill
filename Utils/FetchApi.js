import axios from "axios";

export default async function FetchApi() {

  let movies = [];

  await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US&page="      
    )
    .then( (res) => console.log(res.data.results)
     )
    .catch((err) => console.log(err.response.data));  
  return movies;
}

export  async function FetchApiMovieId() {

  let moviesId = '634649';

  await axios
    .get(
      "https://api.themoviedb.org/3/movie/818647/videos?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US "
      
    )    
    .then( (respond) =>console.log(respond.data.results[0].key) )
    .catch((err) => console.log(err.response.data));
  return moviesId;
}
