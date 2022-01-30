import FazerMenu from './assets/fazer.json';

const mealArray = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

/**
 * Validates a name for meal
 * @param {string} name
 */
const validateName = (name) => {
  const namePattern = /^[A-ZÅÄÖ]{1}[aA-zåäöZÅÄÖ \-\/,()]{3,63}$/;
  return namePattern.test(name);
};

for (const meal of mealArray) {
  console.log(meal.name, validateName(meal.name));
};

//2. sort menu
const sortedMeals = mealArray.sort((a,b) => a.price - b.price);
console.log(sortedMeals);

//3. items less than 5e
const underFive = mealArray.filter(meal => meal.price < 5);
console.log(underFive);

//4. raise prices
console.log(mealArray.map(meal => meal.price * 1.15));

//5. whole menu price
const mealSum = mealArray.reduce((a, b) => {
  return {price: a.price + b.price};
});
console.log('Koko menu ', mealSum);

//B - Fazer data
const getVegeMeals = dayOfWeek => {
  let vegeMeals = [];
  for (const menu of FazerMenu.LunchMenus[dayOfWeek].SetMenus) {
    for (const meal of menu.Meals) {
      if (meal.Diets.includes('Veg')) {
        vegeMeals.push(meal.Name);
      }
    }
  }
  return vegeMeals;
};
let pituus = FazerMenu.LunchMenus.length;
for (let i = 0; i < pituus; i++) {
  console.log(getVegeMeals(i));
};

