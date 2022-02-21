//const arr = [21, 12, 33, 14, 4, 9];
//arr.sort(compareNum);
//console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//arr.forEach(function(num, i, arr) {
//    console.log(`${i}: ${num} внутри массива ${arr}`);
//});

//arr.pop(); // Удаляет последний элемент массива
//arr.push(5); // Добавляет элементт в конец массива

//for (let i = 0; i < arr.length; i++) {                      ]
//    console.log(arr[i]);                                    ]
//}                                   Методы перебора         ]
//                                                            ]
//for (let value of arr) { Можно использовать break, continue ]
//    console.log(value);                                     ]
//}                                                           ]

//const str = prompt("", "");
//const products = str.split(", ");
//products.sort();
//console.log(products.join('; '));



const obj = {
    a: 5,
    b: 3
};

function copy(mainObj) {
    let objCopy = {};

    let key;                    //////////  Поверхностная копия обьектов
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 4
    }
};

const numbers2 = {
    z: 10,
    n: 20,
    m: {
        o: 25,
        p: 70
    }
};

//const newNumbers = copy(numbers);
//newNumbers.a = 10;

const clone = Object.assign({},numbers);  // Создаёт поверхностную копию
//console.log(clone);
//console.log(Object.assign(numbers, numbers2));

const oldMass = ['a', 'b', 'c'];      ///// Метод копирования массивов
const newArray = oldMass.slice();

oldMass[1] = 'aue';

//console.log(newArray);

const video = ['Youtube', 'Vimeo', 'Tiktok'],
      messenger = ['vk', 'facebook', 'insta'],
      internet = [...video, ...messenger];

//console.log(internet);

function log(a, b, c) {   ////// Раскладывает значения
    console.log(a);
    console.log(b);
    console.log(c);
}

//const num = [2, 5, 7];
//log(...num);

const array = ['a', 'b', 'c'];

const newArrayy = [...array];// Метод копирования массива с помощью spread оператора 


const q = {     
    one: 1,
    two: 2
};


const newQ = {...q};   // Метод копирования обьекта с помощью spread оператора


