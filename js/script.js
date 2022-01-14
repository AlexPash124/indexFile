"use strict";
const nymberOfFilm = +prompt('Скільки фільмів Ви передивилися?', '');

const personlMovieDB={
    count: nymberOfFilm,
    movies:{},
    actors:{},
    gernes:[],
    private: false
};
const a=prompt('Один із останніх фільмів?',''),
      b= prompt('На скільки Ви його оцінюєте?','10'),
      c=prompt('Один із останніх фільмів?',''),
      d=prompt('На скільки Ви його оцінюєте?','10');

personlMovieDB.movies[a]=b;

console.log(personlMovieDB);
