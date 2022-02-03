
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Cколько фильмов вы уже смотрели?", '');
    
        while (personalMovieDB.count == '' ||
               personalMovieDB.count == null ||
               personalMovieDB.count == isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Cколько фильмов вы уже смотрели?", '');
        }
    },
    detectCinephile: () => {
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
    rememberMyFilms: () => {
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
    writeYourGenres: () => {
        let d = 0;
        for ( let i = 1; i < 4; i++){
            let a = prompt(`Ваш любимый жанр ${i} `, '');
            if(a == null || a == ''){
                i--;
            } else {
                personalMovieDB.genres[i - 1] = a;
            }
        }
        personalMovieDB.genres.forEach((i, a) => {
            console.log(`Любимый жанр ${a + 1} - это ${i}`);
        });
    },
    showMyDB: () => {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
    
};

//personalMovieDB.start();
//personalMovieDB.detectCinephile();
//personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();











