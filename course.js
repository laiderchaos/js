
let numberOfMovies;


let personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Cколько фильмов вы уже смотрели?", '');
    
        while (personalMovieDB.count == '' ||
               personalMovieDB.count == null ||
               personalMovieDB.count == isNaN(numberOfMovies)) {
            personalMovieDB.count = +prompt("Cколько фильмов вы уже смотрели?", '');
        }
    },
    detectCinephile: function() {
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
    },
    rememberMyFilms: function () {
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
    },
    writeYourGenres: function () {
        let d = 0;
        for ( let i = 1; i < 4; i++){
            let a = prompt(`Ваш любимый жанр ${i} `, '');
            if(a == null || a == ''){
                i--;
            } else {
                personalMovieDB.genres[i - 1] = a;
            }
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
    
};

//personalMovieDB.start();
//personalMovieDB.detectCinephile();
//personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.genres.forEach(function(i, a) {
    console.log(`Любимый жанр ${i} - это ${a+1}`);
});










