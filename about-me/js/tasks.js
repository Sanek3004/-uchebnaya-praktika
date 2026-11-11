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





