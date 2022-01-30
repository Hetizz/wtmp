import SodexoData from './modules/sodexo-data.js';
import FazerData from './modules/fazer-data';

//console.log(SodexoData.courses);
console.log(FazerData.FazerEn);
console.log(FazerData.FazerFi);

let language = 'fi';
let currentMenu = SodexoData.coursesFi;

const menu = document.querySelector('#menu');
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

/**
 * Switch language fi/en
 */
const switchLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu = SodexoData.coursesEn;
  } else {
    language = 'fi';
    currentMenu = SodexoData.coursesFi;
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
  alert(currentMenu[randomIndex]);
};

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


