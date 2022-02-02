
let numberOfMovies;

function start() {
    numberOfMovies = +prompt("Cколько фильмов вы уже смотрели?", '');

    while (numberOfMovies == '' || numberOfMovies == null || numberOfMovies == isNaN(numberOfMovies)) {
        numberOfMovies = +prompt("Cколько фильмов вы уже смотрели?", '');
    }
}

//start();

let personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function detectCinephile() {
    if (personalMovieDB.count == null || personalMovieDB.count == '') {
        alert('Мудила блять циферы вводи!');
    } else if (personalMovieDB.count <= 10) {
        alert('Ебать как ты живешь?');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('Ну более менее.');
    } else if (personalMovieDB.count > 30) {
        alert('Ну всё всё норм.');
    } else {
        alert('Ну ты ебать даёшь!!!');
    }
}

//detectCinephile();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Какой фильм вы смотрели', ""),
            b = prompt('Какую оценку вы бы ему дали?', "");
        if (a !== null && a !== '' && a.length < 50 &&
            b !== null && b !== '') {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms();

function writeYourGenres() {
    for ( let i = 1; i < 4; i++){
        let a = prompt(`Ваш любимый жанр ${i} `, '');
        personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();
