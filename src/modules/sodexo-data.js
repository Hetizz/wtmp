import {getDayIndex, today} from './tools';

const dataUrl = `https://www.sodexo.fi/ruokalistat/output/daily_json/152/${today}`;
const dataUrlWeekly = `https://www.sodexo.fi/ruokalistat/output/weekly_json/152`;
const dataUrlDaily = `https://www.sodexo.fi/ruokalistat/output/daily_json/152/2022-03-01`;

//import SodexoMenu from '../assets/sodexo.json';

const coursesEn = [];
const coursesFi = [];

/**
 * Create menus from sodexo data
 * @param {string} menu
 * @param {string} lang - language
 */
const createMenus = (menu, lang = 'fi') => {
  const courses = Object.values(menu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
  if (lang === 'fi') {
    return coursesFi;
  } else if (lang === 'en') {
    return coursesEn;
  }
};

const SodexoData = {coursesEn, coursesFi, dataUrl, dataUrlWeekly, dataUrlDaily, createMenus};
export default SodexoData;
