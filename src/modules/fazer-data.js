import FazerFi from '../assets/fazer-fin.json';
import FazerEn from '../assets/fazer-en.json';

/**
 *
 * @param lunchMenus
 * @param day
 * @returns {*}
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

const coursesEn = createDayMenu(FazerEn.LunchMenus, 0);
const coursesFi = createDayMenu(FazerFi.LunchMenus, 0);

console.log(coursesEn);
console.log(coursesFi);

const FazerData = {coursesEn, coursesFi};
export default FazerData;
