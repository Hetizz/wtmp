const today = new Date().toISOString().split('T')[0];
console.log(today);

const dataUrlFi = `https://www.foodandco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=270540&weekDate=${today}`;
//const dataUrlEn = 'https://www.foodandco.fi/api/restaurant/menu/week?language=en&restaurantPageId=270540&weekDate=2022-02-01';
const dataUrlEn = `https://www.foodandco.fi/api/restaurant/menu/week?language=en&restaurantPageId=270540&weekDate=${today}`;

/*import FazerFi from '../assets/fazer-fin.json';
import FazerEn from '../assets/fazer-en.json';*/

/**
 *
 * @param {Array} lunchMenus - menu data
 * @param {Number} day
 * @returns {Array} daily menu
 */
const createDayMenu = (lunchMenus, day) => {
  const dayMenu = lunchMenus[day].SetMenus.map(setMenu => {
    //let meals = setMenu.Meals.map();
    const mealName = setMenu.Name;
    let meals = '';
    for (const meal of setMenu.Meals) {
     //console.log(meal);
     meals += meal.Name + ', ';
    }
    return mealName ? setMenu.Name + ': ' + meals: meals;
  });
  return dayMenu;
};

/*const coursesEn = createDayMenu(FazerEn.LunchMenus, 0);
const coursesFi = createDayMenu(FazerFi.LunchMenus, 0);*/

//console.log(coursesEn);
//console.log(coursesFi);

/*const FazerData = {coursesEn, coursesFi};*/
const FazerData = {createDayMenu, dataUrlFi, dataUrlEn};
export default FazerData;
