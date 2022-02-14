export default function madLibsArray( movies ) {
  
  return movies && [
    {
        question: `${movies.title} was released on ${movies.release_date}.`, //movie details
        answer: true,
        movieId: `${movies.id}`,
    },
    {
        question: `${movies.release_date} was the release date of ${movies.title}.`,
        answer: true,
        movieId: `${movies.id}`,
    },
    {
        question: `${movies.overview} describes what ${movies.title} is about.`,
        answer: true,
        movieId: `${movies.id}`,
    },
    {
        question: `${movies.title} is a movie about ${movies.overview}`,
        answer: true,
        movieId: `${movies.id}`,
    },
    {
        question: `Ghostbusters was released on May 12, 1987.`,
        answer: false,
        movieId: 620,
    },
    {
        question: `September 2, 1996 was the release date of Scream.`,
        answer: false,
        movieId: 4232,
    },
    {
        question: `"A brillant and gifted young man must find the most beautiful location on the planet to set up a new vacation home for his family." describes what the movie Dune is about.`,
        answer: false,
        movieId: 438631, 
    },
    {
        question: `Aladdin is a movie about a young man in search of a magic carpet.`,
        answer: false,
        movieId: 812,
        
    },
    {
        question: `La La Land's plot used to be described as "Two lovers are drawn together by their desire to do what is right.  They are faced with a growing need to dance into the night."`,
        answer: false,
        movieId: movies.id,
    }
  ]
};