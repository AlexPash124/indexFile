"use strict";
const nymberOfFilm = +prompt('Скільки фільмів Ви передивилися?', '');


const personlMovieDB={
    count: nymberOfFilm,
    movies:{},
    actors:{},
    gernes:[],
    private: false
};
if(personlMovieDB.count<10){
    alert("Просмотрено мало фильмов");
} else if(personlMovieDB.count>10 && personlMovieDB.count<30){
    alert("Ви класний глядач");
}else if(personlMovieDB.count>30){
    alert("Ви Кіноман");
}


const mov=[];
const ball=[];
for(let i=0; i<2; i++){
    
    mov[i]=prompt('Один із останніх фільмів?','');
    ball[i]=prompt('На скільки Ви його оцінюєте?','10');

    if(mov[i]!=null && ball[i]!=null && mov[i]!="" && ball[i]!="" && mov[i].length<50 && ball.length<50){
        personlMovieDB.movies[mov[i]]=ball[i];    
    } else { 
        console.log(i);
        i--;
    }
}

// const a=prompt('Один із останніх фільмів?',''),
//       b= prompt('На скільки Ви його оцінюєте?','10'),
//       c=prompt('Один із останніх фільмів?',''),
//       d=prompt('На скільки Ви його оцінюєте?','10');
console.log(personlMovieDB);
