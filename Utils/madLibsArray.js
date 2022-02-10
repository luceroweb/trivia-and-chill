const madLibsArray = [
    // {
    //     question: `${cast.name[0]} starred in ${movies.title}.`, //get credits endpoint for cast.name
    //     answer: true,
    //     movieId: id,
    // },
    // {
    //     question: `${title}'s cast included ${cast.name[0]} .`, //get credits endpoint for cast.name
    //     answer: true,
    //     movieId: id,
    // },
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
        question: `${title} is a movie about ${overview}`,
        answer: true,
        movieId: `${movies.id}`,
    },
    // {
    //     question: `${title} is considered a ${genres.name}`,
    //     answer: true,
    //     movieId: id,
    // },

    // {
    //     question: `${title} is categorized under the ${genres.name} genre.`, //get details
    //     answer: true,
    //     movieId: id,
    // },
    // {
    //     question: `${title}'s plot used to described as ${changes.items.original_value} genre.`, //get changes endpoint
    //     answer: true,
    //     movieId: id,
    // },
    // {
    //     question: `Tom Hanks starred in Cool Runnings.`,
    //     answer: false,
    //     movieId: id,
    // },
    // {
    //     question: `Breakfast at Tiffany's cast included Audrey Hemmingway.`,
    //     answer: false,
    //     movieId: id,
    // },
    {
        question: `Ghostbusters was released on May 12, 187.`,
        answer: false,
        movieId: id,
    },
    {
        question: `September 2, 1996 was the release date of Scream.`,
        answer: false,
        movieId: id,
    },
    {
        question: `"A brillant and gifted young man must find the most beautiful location on the planet to set up a new vacation home for his family." describes what the movie Dune is about.`,
        answer: false,
        movieId: id, 
    },
    {
        question: `Aladdin is a movie about a young man in search of a magic carpet.`,
        answer: false,
        movieId: id,
        
    },
    // {
    //     question: `Scanner Darkley is considered a romantic comedy.`,
    //     answer: false,
    //     movieId: id,
    // },
    // {
    //     question: `Pulp Fiction is categorized under the "Documentary" genre.`,
    //     answer: false,
    //     movieId: id,
    // },
    {
        question: `La La Land's plot used to be described as "Two lovers are drawn together by their desire to do what is right.  They are faced with a growing need to dance into the night."`,
        answer: false,
        movieId: id,
    }
];