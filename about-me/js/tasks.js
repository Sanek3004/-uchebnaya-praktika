console.log("Скрипт подключен")

const fullName = "Иванов Александр";

const group = "ИС-1-25";

let pagesCount = 5;

const isStudent = true;

console.log('Имя:' + fullName);

console.log(`Группа: ${group}, страниц на сайте: ${pagesCount}`);

pagesCount = pagesCount + 1

console.log(`После доработки страниц: ${pagesCount}`);

console.log('Студент:' , isStudent);

console.log(typeof 42);
console.log(typeof 'текст');
console.log(typeof true);
let notSet;
console.log(typeof notSet);
console.log('5' + 5);
console.log('5' - 2);
console.log(5 + 5);
console.log(Number('12') + 3);
console.log(Number('abc'));

const width = 8;
const height = 5;
console.log('Площадь:', width * height);
console.log('Периметр:', 2 * (width + height));


const mark1 = 5;
const mark2 = 4;
const mark3 = 4;
const mark4 = 3;
const mark5 = 2;
const average = ((mark1 + mark2 + mark3 + mark4 + mark5) / 5);
console.log('Средний балл:', average.toFixed(2))

const totalMinutes = 135;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);

// самостоятельная 1 //

const csena = 1200;
const skidka = 15;
const razmerskidki = csena * (skidka / 100);
const csenawithskidka = csena - razmerskidki;
console.log(`Цена со скидкой: ${csenawithskidka} Размер скидки: ${razmerskidki}`)

// //


const city = '   Чебоксары';
console.log(city.length);
console.log(city.trim());
console.log(city.trim().toUpperCase());

const text = 'Практика по веб-разработке';
console.log(text.slice(0, 8));
console.log(text.includes('веб'));

const greeting = `Привет, ${fullName}! Добро пожаловать на сайт.`;
console.log(greeting);

// Самостоятельная 2 //
const samost = 'Проверка самостоятельная'
console.log(samost.length);
console.log(samost.slice(0, 5));
console.log(samost.trim().toUpperCase());
console.log(samost.includes('Проверка'));

//





// Пара 23 Условия и циклы //

const number = 17;
if (number % 2 === 0) {
    console.log(number + '- четное');
} else {
    console.log(number + '- нечетное');
}

if (number > 0) {
    console.log('Положительное')
} else if (number < 0) {
    console.log('Отрицательное');
} else {
    console.log('Ноль')
}

// const userNumber = Number(prompt('Введите целое число')); //

// if (Number.isNaN(userNumber)) { //
   // console.log('Это не число'); //
// } else if (userNumber % 2 === 0) { //
    // console.log(userNumber + ' - четное'); //
// } else { // 
   // console.log(userNumber + ' - нечетное'); //
// } //

// ЗАДАЧА 6 //

function getMark(points) {
    if ((points > 100) || (poitns < 0)) {
        console.log(`Баллы должны быть от 0 до 100`);
    } else if (points >= 90) {
        return 5;
    } else if (points >=75) {
        return 4;
    } else if (points >=60) {
        return 3;
    } else {
        return 2;
    }
}
//const mark = getMark(95);
//console.log(mark);


console.log(5 === '5'); 
console.log(5 == '5'); 

const dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Понедельник';
        break;
    case 2:
        dayName = 'Вторник';
        break;
    case 3:
        dayName = 'Среда';
        break;
    case 4:
        dayName = 'Четверг';
        break;
    case 5:
        dayName = 'Пятница';
        break;
    case 6:
        dayName = 'Суббота';
        break;
    case 7:
        dayName = 'Воскресенье';
        break;
    default:
        dayName = 'Такого дня нет';
}
console.log(`День ${dayNumber}: ${dayName}`);

const isWeekend = dayNumber === 6 || dayNumber === 7;
console.log(`Выходной:`, isWeekend);

// самостоятельная 1 //

const month= 3;
let monhnumber;
switch (month) {
    case 1:
        monhnumber = 'Январь';
        break;
    case 2:
        monhnumber = 'Февраль';
        break;
    case 3:
        monhnumber = 'Март';
        break;
    case 4:
        monhnumber = 'Апрель';
        break;
    default:
        monhnumber = 'Такого месяца нет';
}
console.log(`Месяц: ${monhnumber}`);

// //

for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

const n = 5;
let sum = 0;
let k = 1;
while (k <= n) {
    sum = sum + k;
    k = k + 1;
}
console.log(`Сумма чисел от 1 до ${n}: ${sum}`);

// самостоятельная 2 //
for (let i = 1; i <=10; i++) {
    console.log(`10 * ${i} = ${10 * i}`);
}

// Пара 24 //
function greet(name) {
    return `Привет, ${name}!`;
}

console.log(greet('Анна'));
console.log(greet('Петр'));

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));

function test() {
    const inside = 'Внутри';
    console.log(inside);
}
test();
// console.log(inside);

// Задача 10 //
const square = (x) => x * x;
const celsiusToFahrenheit = (c) => c * 9 / 5 + 32;
const addNumbers = (a, b) => a + b;

console.log(square(7));
console.log(celsiusToFahrenheit(20));
console.log(addNumbers(2, 3));

//Задача 11 //
const subjects = ['Математика', 'Информатика', 'Физика'];
console.log(subjects.length);
console.log(subjects[0]);
console.log(subjects[subjects.length - 1]);

subjects.push('История');
console.log(subjects);
const removed = subjects.pop();
console.log('Удалили', removed);

for (const subject of subjects) {
    console.log('Предмет:' + subject);
} 
const grades = [5,4,3,5,4];

function getAverage(list) {
    let total = 0
    for(const value of list) {
        total += value;
    }
    return total / list.length
}
console.log('Средняя оценка:', getAverage(grades).toFixed(2));

let best = grades[0];
for (const value of grades) {
    if(value > best) {
        best = value;
    }
}
console.log('Лучшая оценка', best);

//Задача 12 //
const numbers = [3,8,12,5,20,1];
const doubled = numbers.map((x) => x * 2);
const big = numbers.filter((x) => x > 5);
console.log(doubled);
console.log(big);
console.log(numbers);

const names = ['Анна' , 'Борис', 'Алексей', 'Вера'];
const startsWithA = names.filter((item) => item.startsWith('А'));
console.log(startsWithA.join(', '));
const UpperNames = names.map((item) => item.toUpperCase());
console.log(UpperNames)

//Самостоятельная итоговая часть пары 24 //
function analyzeGrades(list) {
    
    console.log('Количество оценок:', list.length);
    
    avg = getAverage(list).toFixed(2);
    console.log('Средний балл:', avg)
    const best = Math.max(...list)
    console.log('Лучшая оценка:', best);
    const lowest = Math.min(...list)
    console.log('Худшая оценка:', lowest);

    let two = list.filter((item) => item === 2).length;
    if (avg < 3.5){
        console.log('Незачёт,', 'Двоек:', two);
    } else {
        console.log('Зачёт');
    }
}

analyzeGrades([3, 2, 4, 3, 3, 2, 2, 2, 2]);




















