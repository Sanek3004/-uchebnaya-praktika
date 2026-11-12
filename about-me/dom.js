console.log('DOM подключен');

// Задача 1 //
const mainTitle = document.querySelector('#main-title');
mainTitle.textContent = 'Практическа работа - Иванов Александр';

const message = document.querySelector('#message');
message.textContent = 'Теперь я умею менять содержимое страницы!';

const name = document.querySelector('#student-name');
name.textContent = 'Иванов Александр'

const group = document.querySelector('#student-group');
group.textContent = 'ИС-1-25'

// Задача 2 //
const studentName = 'Иванов Александр';
const studentGroup = 'ИС-1-25';
const studentAge = '17';

document.querySelector('#student-name').textContent = `Студент: ${studentName}`; 

document.querySelector('#student-group').textContent = `Группа: ${studentGroup}`;

document.querySelector('#student-age').textContent = `Возраст: ${studentAge}`;

// Задача 3 //

const cardcard = document.querySelector('#card')
cardcard.style.color = 'blue';

const productCard = document.querySelector('#product-card');

productCard.style.backgroundColor = 'yellow';
productCard.style.padding = '20px';
productCard.style.border = '2px solid blue';
productCard.style.borderRadius = '10px';

const productPrice = document.querySelector('#product-price');

productPrice.style.color = 'green';
productPrice.style.fontWeight = 'bold';
productCard.style.fontSize = '24px';

// Задача 4 //
const items = document.querySelectorAll('#subjects li');

console.log('Колчиество предметов:', items.length);

for (const item of items) {
    item.style.color = 'darkblue';
    item.style.fontSize = '20px';
    

}
items[items.length - 1].style.fontWeight = 'bold';
items[0].textContent =  'Веб-разработка';

// Задача 5 //
const statusText = document.querySelector('#status');

statusText.classList.add('succes');
statusText.textContent = 'Статус: выполнено';

//Самостоятельная итоговая часть //
const studentNaaame = 'Иванов Александр';
const studentGroooup = 'ИС-1-25';
const coolvo = 'JS';
const ddd = 'Практическая работа завершена'


document.querySelector('#namename').textContent = `Студент: ${studentNaaame}`; 

document.querySelector('#groooup').textContent = `Группа: ${studentGroooup}`;

document.querySelector('#colvo').textContent = `Количество изученных тем: ${coolvo}`;

document.querySelector('#end').textContent = `${ddd}`;

const infoCard = document.querySelector('#oform');

infoCard.style.backgroundColor = '#afd5ee' 
infoCard.style.padding = '20px' 
infoCard.style.border = '2px solid blue' 
infoCard.style.borderRadius = '10px'  
infoCard.style.width = '300px' 
infoCard.style.fontWeight = 'bold' 















