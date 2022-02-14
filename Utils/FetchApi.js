import axios from "axios";

export default async function FetchApi() {

  let movies = [];

  await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US"
      
    )
    .then( (res) => movies = res.data.results )
    .catch((err) => console.log(err.response.data));
  
  return movies;
}

