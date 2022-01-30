import SodexoData from './modules/sodexo-data.js';
import FazerData from './modules/fazer-data';

let language = 'fi';
let currentMenu = SodexoData.coursesFi;
let currentFazer = FazerData.coursesFi;

const menu = document.querySelector('#menu');
const fazerMenu = document.querySelector('#fazerMenu');
let menuOrder = 'asc';

/**
 * Prints the menu on page
 */
const printMenu = () => {
  menu.innerHTML = '';
  for (const item of currentMenu) {
    const li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);
  }
};

const printFazer = () => {
  fazerMenu.innerHTML = '';
  for (const item of currentFazer) {
    const li = document.createElement('li');
    li.textContent = item;
    fazerMenu.appendChild(li);
  }
};

/**
 * Switch language fi/en
 */
const switchLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu = SodexoData.coursesEn;
    currentFazer = FazerData.coursesEn;
  } else {
    language = 'fi';
    currentMenu = SodexoData.coursesFi;
    currentFazer = SodexoData.coursesFi;
  }
};

/**
 *
 * @param {Array} courses
 * @param {string} order
 * @returns {Array}
 */
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

/**
 * picks a random dish from menu
 * @param {array} courses
 */
const pickRandom = (courses) => {
  const randomIndex = Math.floor(Math.random() * currentMenu.length);
  const randomIndexF = Math.floor(Math.random() * currentFazer.length);
  alert('Sodexo: ' + currentMenu[randomIndex] + ' \nFazer: ' + currentFazer[randomIndexF]);
};

printMenu();
printFazer();

document.querySelector('#vaihto').addEventListener('click', () => {
  switchLanguage();
  printMenu();
  printFazer();
});

document.querySelector('#sort').addEventListener('click', () => {
  sortCourses(currentMenu, menuOrder);
  printMenu();
});

document.querySelector('#random').addEventListener('click', () => {
  pickRandom();
});


