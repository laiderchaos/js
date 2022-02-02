const options = {
    name: 'Text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'Red'
    },
    makeTest: function () {
        console.log('test');
    }
};


//const {border, bg} = options.colors;

//console.log (border);

//let counter = 0;
//
//or (let key in options) { // Перебор обьектов
//   if (typeof(options[key]) === 'object') {
//       for (let i in options[key]){
//           console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//           counter++;
//       }
//   } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++;
//   }
//
//console.log(counter); 

console.log(Object.keys(options).length);