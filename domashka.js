'"use strict"';

const calc = (a, b) => a + b;

function first() {
    setTimeout(function() {
        console.log(1);
    },500 );
}

function second() {
    console.log(2);
}

//first();
//second();

function learnJS(leng, callback) {
    console.log(`Я учу: ${leng}.`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

//learnJS('JS', done);