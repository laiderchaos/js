//algorhitms


// Линейный поиск

//const array = [1,4,5,8,5,1,2,7,5,2,11];
//let count = 0;
//function search(arr, item) {
//    for (let i = 0; i < array.length; i++) {
//        count +=1;
//        if(arr[i] == item){
//            return i + 1;
//        }
//    }return null;
//}
//console.log(search(array, 5));
//console.log('count = ',count);


// Бинарный поиск

//const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//let count = 0;
//function binearSearch(arr, item) {
//    let start = 0;
//    let   end = arr.length;
//    let middle;
//    let found = false;
//    let position = -1;
//    while (found === false && start <= end){
//        count += 1;
//        middle = Math.floor((start + end) / 2);
//        if(arr[middle] === item){
//            found = true;
//            position = middle;
//            return position;
//        }
//        if ( item < arr[middle]) {
//            end = middle - 1;
//        } else {
//            start = middle + 1;
//        }
//    }
//    return position;
//}
//
//console.log(binearSearch(array, 8));
//console.log('count = ',count);



function colonOdd (num) {
    let str = num.toString();
    let result = [str[0]];
    for(var i=1; i<str.length; i++) {
        if((str[ i - 1] % 2 !== 0)&&(str[i] % 2 !== 0)) {
          result.push(':', str[i]);
         }
        else {
          result.push(str[i]);
        }
    }
    return result.join('');  
  }
  let b = '55639217';
  console.log(colonOdd(b));

  function changeRegister (str) { 
    let rel = '';
    for (let i = 0; i < str.length; i++) {
      if(str[i] == str[i].toLowerCase()){
        rel += str[i].toUpperCase();
      }else if (str[i] == str[i].toUpperCase()) {
        rel += str[i].toLowerCase();
      }
    }return rel;
  }
  
  console.log(changeRegister ('КаЖдЫй ОхОтНиК'));

  function removeDuplicates(arr) {
    let repeat = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == arr[i + 1]){
        repeat += arr.unshift(arr[i]);
        count += 1;
      }else{
        repeat += arr[i];
      }
    }return repeat;
  }
  
  console.log(removeDuplicates(["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
  ]));


