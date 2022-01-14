"use strict";
let nymberOfFilm;

statr();
const personlMovieDB={
    count: nymberOfFilm,
    movies:{},
    actors:{},
    gernes:[],
    private: true
};
const mov=[];
const ball=[];
const genres = [];
check();
remambaOfFilms();
ShoMyBD();
WriteYourGerner();

function statr(){
    nymberOfFilm = +prompt('Скільки фільмів Ви передивилися?', '');
    while(nymberOfFilm == "" || nymberOfFilm==null || isNaN(nymberOfFilm)){
        nymberOfFilm = +prompt('Скільки фільмів Ви передивилися?', '');
    }

}
function check(){
    if(personlMovieDB.count<10){
        alert("Просмотрено мало фильмов");
    } else if(personlMovieDB.count>10 && personlMovieDB.count<30){
        alert("Ви класний глядач");
    }else if(personlMovieDB.count>30){
        alert("Ви Кіноман");
    }
}

function remambaOfFilms(){
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
}

function ShoMyBD(){
    if(!personlMovieDB.private){
        console.log(personlMovieDB);
    }
   
}

function WriteYourGerner(){
    for(let i=0; i<4; i++){
        genres[i]=prompt("Ваш улюблений жанр № ", i, "")  ;
    }
}