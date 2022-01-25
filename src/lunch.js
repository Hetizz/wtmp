import SodexoData from './assets/sodexo.json';

//console.log(SodexoData.courses);

const coursesEn = [];
const coursesFi = [];

let language = 'fi';
let currentMenu = coursesFi;

const menu = document.querySelector('#menu');
let menuOrder = 'asc';

const createMenus = (menu) => {
  const courses = Object.values(menu);
  for (const course of courses) {
    coursesFi.push(course.title_fi);
    coursesEn.push(course.title_en);
  }
};

const printMenu = () => {
  menu.innerHTML = '';
  for (const item of currentMenu) {
    const li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);
  }
};

const switchLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu = coursesEn;
  } else {
    language = 'fi';
    currentMenu = coursesFi;
  }
};

const sortCourses = (courses, order) => {
  let sortedCourses = courses.sort();
  if (order === 'asc') {
    menuOrder = 'desc';
  } else {
    menuOrder = 'asc';
    sortedCourses = courses.reverse();
  }
  return sortedCourses;
};

const pickRandom = (courses) => {
  const randomIndex = Math.floor(Math.random() * currentMenu.length);
  alert(currentMenu[randomIndex]);
};

createMenus(SodexoData.courses);
printMenu();

document.querySelector('#vaihto').addEventListener('click', () => {
  switchLanguage();
  printMenu();
});

document.querySelector('#sort').addEventListener('click', () => {
  sortCourses(currentMenu, menuOrder);
  printMenu();
});

document.querySelector('#random').addEventListener('click', () => {
  pickRandom();
});
