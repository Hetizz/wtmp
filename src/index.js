import SodexoData from './modules/sodexo-data.js';
import FazerData from './modules/fazer-data';

let language = 'fi';
let menuOrder = 'asc';
let currentMenu = SodexoData.coursesFi;
let currentFazer = FazerData.coursesFi;

/**
 * Prints sodexo menu on page
 * @param {Array} menu
 * @param {string} targetId
 */
const printMenu = (menu, targetId) => {
  const ulElement = document.querySelector('#' + targetId);
  ulElement.innerHTML = '';
  for (const item of menu) {
    const li = document.createElement('li');
    li.textContent = item;
    ulElement.appendChild(li);
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
    printMenu(SodexoData.coursesEn, 'sodexoMenu');
    printMenu(FazerData.coursesEn, 'fazerMenu');
  } else {
    language = 'fi';
    currentMenu = SodexoData.coursesFi;
    currentFazer = FazerData.coursesFi;
    printMenu(SodexoData.coursesFi, 'sodexoMenu');
    printMenu(FazerData.coursesFi, 'fazerMenu');
  }
};

/**
 *
 * @param {Array} courses1
 * @param {Array} courses2
 * @param {string} order
 * @returns {Array}
 * @returns {Array}
 */
const sortCourses = (courses1, courses2, order) => {
  let sortedSodexo = courses1.sort();
  let sortedFazer = courses2.sort();
  if (order === 'asc') {
    menuOrder = 'desc';
  } else {
    menuOrder = 'asc';
    sortedSodexo = courses1.reverse();
    sortedFazer = courses2.reverse();
  }

  printMenu(sortedSodexo, 'sodexoMenu');
  printMenu(sortedFazer, 'fazerMenu');

  return sortedSodexo, sortedFazer;
};

/**
 * picks a random dish from menu
 *
 */
const pickRandom = () => {
  const randomIndex = Math.floor(Math.random() * currentMenu.length);
  const randomIndexF = Math.floor(Math.random() * currentFazer.length);
  alert('Sodexo: ' + currentMenu[randomIndex] + ' \nFazer: ' + currentFazer[randomIndexF]);
};

printMenu(SodexoData.coursesFi, 'sodexoMenu');
printMenu(FazerData.coursesFi, 'fazerMenu');

document.querySelector('#vaihto').addEventListener('click', () => {
  switchLanguage();
});

document.querySelector('#sort').addEventListener('click', () => {
  sortCourses(currentMenu, currentFazer, menuOrder);
});

document.querySelector('#random').addEventListener('click', () => {
  pickRandom();
});
