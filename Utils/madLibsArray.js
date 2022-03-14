export default function madLibsArray(movies) {
  let year = movies.release_date.substr(0, 4);
  let month = movies.release_date.substr(5, 2);
  let day = movies.release_date.substr(8, 2);

  if (day < 10) {
    day = day[1];
  }

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let movieDate = `${months[month - 1]} ${day}, ${year}`;

  function generateRandomDate() {
    return new Date(+new Date() - Math.floor(Math.random() * 100000000000));
  }
  return (
    movies && [
      {
        question: `${movies.title} was released on ${movieDate}.`, //movie details
        answer: true,
        movieId: `${movies.id}`,
      },

      {
        question: `${movieDate} was the release date of ${movies.title}.`,
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.overview} describes what ${movies.title} is about.`,
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.title} is a movie about "${movies.overview}"`,
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.name} starred in ${movies.title}.`, //get credits endpoint for performer name
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.title}'s cast included ${movies.name} .`, //get credits endpoint for performer name
        answer: true,
        movieId: `${movies.id}`,
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
        movieId: 313369,
      },

      {
        question: `When was ${movies.title} was released on?`, //movie details
        answer: [
          `${movies.release_date}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
        ],
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.title} was released when?`, //movie details
        answer: [
          `${movies.release_date}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
        ],
        movieId: `${movies.id}`,
      },
      {
        question: `What was the release date of the ${movies.title}?`, //movie details
        answer: [
          `${movies.release_date}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
        ],
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.title} was released on what date?`, //movie details
        answer: [
          `${movies.release_date}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
        ],
        movieId: `${movies.id}`,
      },
      {
        question: `When did ${movies.title} come out?`, //movie details
        answer: [
          `${movies.release_date}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
        ],
        movieId: `${movies.id}`,
      },
      {
        question: `What was the release date of ${movies.title}?`, //movie details
        answer: [
          `${movies.release_date}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
          `${new generateRandomDate().toLocaleDateString("en-US")}`,
        ],
        movieId: `${movies.id}`,
      },

      {
        question: `Ghostbusters was released on May 12, 1987.`,
        answer: false,
        movieId: 620,
      },
      {
        question: `${movies.title}'s plot is described as "${movies.overview}"`,
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.title} is considered a ${movies.genre}`,
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `${movies.title} is categorized under the ${movies.genre} genre.`,
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `"${movies.overview}" was the original plot of ${movies.title}.`,
        answer: true,
        movieId: `${movies.id}`,
      },
      {
        question: `Kill Bill is a romantic comedy.`,
        answer: false,
        movieId: 24,
      },
      {
        question: `Captain America is categorized under the musicals genre.`,
        answer: false,
        movieId: 1771,
      },
      {
        question: `Encanto's plot used to be described as "The Luceros are an extraordinary family who live hidden in the mountains of Mexico in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Miranda"`,
        answer: false,
        movieId: 568124,
      },
      {
        question: `Deformed since birth, a bitter man known only as the Phantom lives in the sewers underneath the Marid Opera House. He falls in love with the obscure chorus singer Christine, and privately tutors her while terrorizing the rest of the opera house and demanding Christine be given lead roles. Things get worse when Christine meets back up with her childhood acquaintance Raoul and the two fall in love`,
        answer: false,
        movieId: 9833,
      },
      {
        question: `George and Kevin are two men whose stupidity is really indescribable. When Martha, a beautiful woman, loses an important suitcase with money before she leaves for Miami, the two friends (who have found the suitcase) decide to return it to her. After some "adventures" they finally get to Aspen where, using the lost money they live it up and fight for Mary's heart.`,
        answer: false,
        movieId: 8467,
      },
      {
        question: `Denzel Washington was in the movie Dude, Where's My Car?`,
        answer: false,
        movieId: 8859,
      },
      {
        question: `Kristen Stewart was in Fight Club`,
        answer: false,
        movieId: 550,
      },
      {
        question: `Olivia Munn starred in Ron's Gone Wrong`,
        answer: false,
        movieId: 482321,
      },
      {
        question: `Ashton Kutcher starred in Grown Ups`,
        answer: false,
        movieId: 38365,
      },
    ]
  );
}
