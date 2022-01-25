const coursesEn = ["Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

let language = 'fi';
let currentMenu = coursesFi;

const menu = document.querySelector('#menu');
let menuOrder = 'asc';


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
