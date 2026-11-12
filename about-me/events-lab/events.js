console.log('Обработчики событий подключены')

const helloBtn = document.querySelector('#hello-btn');
const helloResult = document.querySelector('#hello-result');

helloBtn.addEventListener('click', function() {
    helloResult.textContent = 'Кнопка нажата!';
});

// Задача 2. Счетчик 
let count = 0;

const counter = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');
const fiveBtn = document.querySelector('#plus-five');

plusBtn.addEventListener('click', function () {
    count = count + 1;
    counter.textContent = count;
});

minusBtn.addEventListener('click', function () {
    count = count - 1;
    counter.textContent = count;
})

resetBtn.addEventListener('click', function() {
    count = 0;
    counter.textContent = count;
})

fiveBtn.addEventListener('click', function () {
    count = count + 5;
    counter.textContent = count;
})

// Задача 3 //
const nameInput = document.querySelector('#name-input');
const nameResult = document.querySelector('#name-result');

nameInput.addEventListener('input', function () {
    const userName = nameInput.value.trim();
    if (userName === '') {
        nameResult.textContent = 'Введие ваше имя';
    } else {
        nameResult.textContent = `Привет, ${userName}! Количество символов: ${userName.length}`;
    }
});

// Задача 4 //
const colorBox = document.querySelector('#color-box');
const colorBtn = document.querySelector('#color-btn');
const cvetcvet = document.querySelector('#cvet')


let isBlue = false;

colorBtn.addEventListener('click', function () {
    if (isBlue === false) {
        colorBox.style.backgroundColor = 'red';
        isBlue = true;
        cvetcvet.textContent = 'Цвет изменен';
        
    } else {
        colorBox.style.backgroundColor = 'white';
        isBlue = false;
        cvetcvet.textContent = 'Цвет выключен';
    }
});

// Задача 5 //
const feedbackForm = document.querySelector('#feedback-form');

const feedbackName = document.querySelector('#feedback-name');

const formResult = document.querySelector('#form-result');

const ageage = document.querySelector('#check-age');

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = feedbackName.value.trim();
    const numberValue = ageage.value.trim();
    const number = Number(numberValue);

    if(userName === '') {
        formResult.textContent = 'Ошибка: введите имя';
        formResult.style.color = 'red';
    } else if (numberValue === '' || Number.isNaN(number) || number < 1 || number > 100) {
        formResult.textContent = 'Ошибка: Неправильный возраст.';
        formResult.style.color = 'red';
    } else {
        formResult.textContent = `Спасибо, ${userName}! Вам ${number} лет.`;
        formResult.style.color = 'green';
    }
});



