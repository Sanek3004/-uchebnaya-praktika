console.log('Interactive подключен');

const container = document.querySelector('#container');

const newParagraph= document.createElement('p');

const neewParagraph = document.createElement('p');

const heading = document.createElement('h3');

heading.textContent='Мои навыки';


newParagraph.textContent = 'Этот абзац создан с помощью JavaScript';

neewParagraph.textContent = 'Иванова Александр ИС-1-25';

container.append(newParagraph);
container.append(neewParagraph);
container.append(heading);

heading.style.color = "blue";

// Задача 2 //
const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert('Введите название задачи');
        return;
    }

    const li= document.createElement('li');
    li.textContent= taskText + ' ';

    const doneBtn= document.createElement('button');
    doneBtn.textContent= 'Выполнено';

    doneBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    li.append(doneBtn);
;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent='Удалить';

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.append(deleteBtn);
    taskList.append(li);

    taskInput.value = "";
});


// Задача 3 //

const questions = document.querySelectorAll('.question');

for (const question of questions) {

    question.addEventListener('click', function () {

        const answer = question.nextElementSibling;

        answer.style.backgroundColor = 'lightgreen';
        
        answer.classList.toggle('open');
    });

}

// Задаа 4 //
const images = [
    'https://avatars.mds.yandex.net/i?id=3605278b62ad4443f3cced19ee4568ef_l-10130119-images-thumbs&n=13' ,
    'https://imgur.com/cvRmmaT',
    'https://avatars.mds.yandex.net/i?id=0fb85dbde71125c58b5a575b4f22326b_l-6269729-images-thumbs&n=13'
];

let currentSlide = 0;

const sliderImage =document.querySelector('#slider-image');

const slideNumber =document.querySelector('#slide-number');

const nextBtn = document.querySelector('#next-slide');

const prevBtn = document.querySelector('#prev-slide');

function showSlide() {
    sliderImage.src = images[currentSlide];

    sliderImage.style.border = '6px solid gold'
    sliderImage.style.borderRadius = '8px'

    slideNumber.textContent = 
        `Слайд ${currentSlide + 1} из ${images.length}`

}

nextBtn.addEventListener('click', function () {
    currentSlide++;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    showSlide();
})
prevBtn.addEventListener('click', function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    showSlide();
})
showSlide()








