
const square = document.getElementById('box'),
      button = document.getElementsByTagName('h1'),
      circles = document.querySelectorAll('.circle'),
      wrapper = document.querySelector('.wrapper'),
      oneSquares = wrapper.querySelector('.squares'),
      squares = wrapper.querySelectorAll('.squares');
      

//square.style.backgroundColor = 'black';
//square.style.width = '60px';
square.style.cssText = 'background-color: blue; width: 100px';

button[1].style.borderRadius = '100%';

//for (let i = 0; i < circle.length; i++) {   ИЗМЕНЕНИЕ ЦВЕТА ОБЬЕКТОВ
//    circle[i].style.backgroundColor =  'green';
//}

squares.forEach(item => {
    item.style.backgroundColor =  'red';
});

const div = document.createElement('div');  ///Создание элемента
//const text = document.createTextNode('aue');

div.classList.add('black'); /// Добавление класса

//document.body.append(div); // добавление элемента на страницу
div.style.cssText = 'background-color: orange; width: 100px; height: 50px';

wrapper.append(div);// Добавление элемента в конец списка .wrapper
//     .prepend добавляет элемент в начало
//wrapper.appendChild(div);   Старый метод append

//squares[1].after(div); Добавление элемента в определенное место перед элемнетом
//squares[1].before(div);  То же самое но после элемента
//squares.insertBefore(div, squares[1]); Старый метод добавления

//circles[0].remove();  Удаление элемента со страницы
//wrapper.removeChild(squares[1]); Старый метод

//squares[0].replaceWith(circles[1]); Замена одного элемента другим.
//wrapper.replaceChild(circles[0], squares[0]); Старый метод 

//div.innerHTML = '<h2> helloworld </h2>'; Добавление тега h1 к div "работа с html"
//div.textContent = 'hello'; Добавление текста h1 к div "получаем от пользователя"

//div.insertAdjacentHTML('beforeend', '<h2>HelloM</h2>'); Вставка текста перед, после, за тегом








let i = 0;

const btn = document.querySelector('.button-test'),
      overLay = document.querySelector('.overlay');


const deleteElement = (e) => {             //При нажатии на обьект делает действие,    можно сделать с помощью функции.
    console.log(e.currentTarget); 
    console.log(e.type);
    //i++;
    //if (i == 1 ) {
    //    btn.removeEventListener('click', deleteElement);
    //}
};

circles.forEach(circle => {          /// назначение обработчика для множества элементов
    circle.addEventListener('click', deleteElement, {once:true});
});

//btn.addEventListener('click', deleteElement);
//overLay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {  ////// Обработчик события
    event.preventDefault();   // Браузер не выполняет стандартное действие а выполняет код ниже .

    console.log(event.target);
});


