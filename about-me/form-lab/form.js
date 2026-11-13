// Задача 1 //
// Задача 2 //


const form = document.querySelector('#registration-form');
const nameInput = document.querySelector('#student-name');
const emailInput = document.querySelector('#student-email');
const passwordInput = document.querySelector('#student-password');
const groupBtn =document.querySelector('#student-group')
const cvet = document.querySelector('#themeBtn')
const result = document.querySelector('#result');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const group = groupBtn.value.trim();
    const password = passwordInput.value;



if (name === '') {
    result.textContent = 'Введите имя';
    result.className= 'error';
    return;
}
if (name.length < 2) {
       result.textContent = 'Имя слишком короткое';   
       result.className = 'error';   
       return; 
}
if (name.length>30) {
    result.textContent = 'Имя слишком длинное';
    result.className = 'error';
    return;
}

if (email === '') {
    result.textContent = 'Введите email';
    result.className = 'error';
    return;
}

if (password === '') {
    result.textContent = 'Введите пароль';
    result.className = 'error';
    return;
}

if (group === '') {
    result.textContent = 'Введите группу';
    result.className = 'error';
    return;
}




// Задача 2 //

if (!email.includes('@') || !email.includes('.') || email.startsWith('@')) {
    result.textContent = 'Неверный email';
    result.className ='error';
    return;
}
if (password.length < 6) {
    result.textContent = "Пароль слишком короткий";
    result.className = 'error';
    return;
} else if (password.includes(" ")){
    result.textContent ="Пароль не может состоять из пробелов";
    result.className = 'error';
    return;
}
result.textContent = `Данные проверены. Пользователь, ${name}!`;
result.className = 'success';

});


// Задача 3 //
const groupSave =document.querySelector('#save-group')
const saveBtn = document.querySelector('#save-name');
const showBtn = document.querySelector('#show-name');
const showGroup = document.querySelector('#show-group');
const deleteBtn = document.querySelector('#delete-name');
const deleteGroup = document.querySelector('#delete-group');
const savedResult = document.querySelector('#saved-result');

// Сохранить имя
saveBtn.addEventListener('click', function () {
  const name = nameInput.value.trim();

  if (name === '') {
    savedResult.textContent = 'Сначала введите имя';
    return;
  }

  localStorage.setItem('studentName', name);
  savedResult.textContent = 'Имя сохранено';
});

groupSave.addEventListener('click', function () {
    const group = groupBtn.value.trim();
  
    if (group === '') {
      savedResult.textContent = 'Сначала введите группу';
      return;
    }
  
    localStorage.setItem('studentGroup', group);
    savedResult.textContent = 'Группа сохранена';
  });



// Показать имя
showBtn.addEventListener('click', function () {

  const name = localStorage.getItem('studentName');

  if (name === null) {
    savedResult.textContent = 'Имя не сохранено';
  } else {
    savedResult.textContent = 'Ваше имя: ' + name;
  }
});


showGroup.addEventListener('click', function () {

    const group = localStorage.getItem('studentGroup');
  
    if (group === null) {
      savedResult.textContent = 'Группа не сохранена';
    } else {
      savedResult.textContent = 'Ваша группа: ' + group;
    }
  });

// Удалить имя
deleteBtn.addEventListener('click', function () {

  localStorage.removeItem('studentName');
  savedResult.textContent = 'Имя удалено';
});


deleteGroup.addEventListener('click', function () {

  localStorage.removeItem('studentGroup');
  savedResult.textContent = 'Группа удалена';
});



// Задача 4 //


const themeBtn = document.querySelector('#theme-btn');

// Проверяем сохранённую тем
const theme = localStorage.getItem('theme');
const themestatus = document.querySelector("#theme-status");



if (theme === 'dark') {
  document.body.classList.add('dark');
  document.body.style.backgroundColor= 'Black';
  document.body.backgroundColor = 'white';
}

// Переключаем тему при нажатии
themeBtn.addEventListener('click', function () {

  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    document.body.style.backgroundColor= 'black';
    document.body.style.color = 'white';
    themestatus.textContent = 'Темная тема включена';
  } else {
    localStorage.setItem('theme', 'light');
    document.body.style.backgroundColor ='white';
    document.body.style.color ='black';
    themestatus.textContent= 'Темная тема выключена';
  }
});


const langInput = document.querySelector('#fav-lang');
const saveLangBtn = document.querySelector('#save-lang');
const loadLangBtn = document.querySelector('#load-lang');
const clearLangBtn = document.querySelector('#clear-lang');
const langResult = document.querySelector('#lang-result');

saveLangBtn.addEventListener('click', function () {
    const lang = langInput.value.trim();

    if (lang === '') {
        langResult.textContent = 'Ошибка: введите язык программирования';
        langResult.className = 'error';
        return;
    }

    localStorage.setItem('favoriteLanguage', lang);
    langResult.textContent = 'Язык программирования сохранён';
    langResult.className = 'success';
});

loadLangBtn.addEventListener('click', function () {
    const savedLang = localStorage.getItem('favoriteLanguage');

    if (savedLang === null) {
        langResult.textContent = 'Сохранённых данных нет';
        langResult.className = 'error';
    } else {
        langInput.value = savedLang;
        langResult.textContent = 'Загружен язык: ' + savedLang;
        langResult.className = 'success';
    }
});

clearLangBtn.addEventListener('click', function () {
    localStorage.removeItem('favoriteLanguage');
    langInput.value = '';
    langResult.textContent = 'Настройки очищены';
    langResult.className = '';
});

