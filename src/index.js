import SodexoData from './modules/sodexo-data.js';
import FazerData from './modules/fazer-data';
import {fetchData} from './modules/network';
import {getDayIndex} from './modules/tools';

let language = 'fi';
let menuOrder = 'asc';
let currentMenu;
let fazerFi;
let fazerEn;

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
    printMenu(SodexoData.coursesEn, 'sodexoMenu');
    printMenu(fazerEn, 'fazerMenu');
  } else {
    language = 'fi';
    currentMenu = SodexoData.coursesFi;
    printMenu(currentMenu, 'sodexoMenu');
    printMenu(fazerFi, 'fazerMenu');
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
  const randomIndexF = Math.floor(Math.random() * fazerFi.length);
  alert('Sodexo: ' + currentMenu[randomIndex] + ' \nFazer: ' + fazerFi[randomIndexF]);
};

const init = () => {

  fetchData(SodexoData.dataUrlDaily).then(data => {
    const courses = SodexoData.createMenus(data.courses);
    printMenu(courses, 'sodexoMenu');
    currentMenu = courses;
  });


  // Fazer menu
  fetchData(FazerData.dataUrlFi, 'fazer-php').then(data => {
    const courses = FazerData.createDayMenu(data.LunchMenus, getDayIndex());
    printMenu(courses, 'fazerMenu');
    fazerFi = courses;
  });

  //Fazer menu english
  fetchData(FazerData.dataUrlEn, 'fazer-php').then(data => {
    const courses = FazerData.createDayMenu(data.LunchMenus, getDayIndex());
    fazerEn = courses;
  });

  //Event listeners
  document.querySelector('#vaihto').addEventListener('click', () => {
    switchLanguage();
  });

  document.querySelector('#sort').addEventListener('click', () => {
    if (language === 'en') {
      sortCourses(currentMenu, fazerEn, menuOrder);
    } else {
      sortCourses(currentMenu, fazerFi, menuOrder);
    }
  });

  document.querySelector('#random').addEventListener('click', () => {
    pickRandom();
  });
};

init();
