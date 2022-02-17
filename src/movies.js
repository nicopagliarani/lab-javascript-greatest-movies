// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {return moviesArr
  .map(function (movie) {
    return movie.director;
  })}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {return moviesArr.filter(function (movie) {
  return (
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
}).length;}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//need to understand why it doesn't work
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const sumOfScores = movies.reduce((accumulator, movie) => {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);
  const averageScore = sumOfScores / movies.length;
  return round(averageScore, 2);
}

 

// Iteration 4: Drama movies - Get the average of Drama Movies
//need to understand why it doesn't work
function dramaMoviesScore (movies) {
  const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  averageScore = scoresAverage(dramaMovies);
  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const arrayCopy = [...movies];
  return arrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      const firstMovieTitle = a.title.toLowerCase();
      const secondMovieTitle = b.title.toLowerCase();
      if (firstMovieTitle > secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map(movie => movie.title)
    .sort((a, b) => {
      const firstMovieTitle = a.toLowerCase();
      const secondMovieTitle = b.toLowerCase();
      if (firstMovieTitle > secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
