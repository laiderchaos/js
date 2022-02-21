//console.log(document.body);
//console.log(document.documentElement);  Выводит в консоль дерево HTML
//console.log(document.body.childNodes); 
//console.log(document.body.firstChild); 
//console.log(document.querySelector('.circle').parentNode);
//console.log(document.querySelector('[data-current="3"]'));

//for (let node of document.body.childNodes) { /// Выводит элементы в консоль
//    if (node.nodeName == '#text') {
//        continue;
//    }
//    console.log(node);
//}



const butth = document.querySelector('.button-test');

// butth.onclick = test;

function test(color) {
    this.style.background = color;
}
//test.call(butth, 'green');        call насильно можно вызвать внутри функции,       аргументы передаются списком
//test.apply(butth,['green']);        apply аргументы передаются массивом

//let a = test.bind(butth, 'green');     метод bind 
//butth.onclick = a;