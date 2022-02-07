//1. cheat code
const createSecret = code => {
  const keyHistory = [];
  document.addEventListener('keypress', event => {
    keyHistory.push(event.key);
    if (keyHistory.length > code.length) {
      keyHistory.shift();
    }
    console.log(keyHistory.join(''));
    if (keyHistory.join('') === code) {
      alert('cheat activated');
    }
  });
};
createSecret('kissa');

//2. x/y-coords of mouse double-click
const clickCoords = () => {
  const output = document.querySelector('#output');
  document.addEventListener('dblclick', event => {
    /*console.log(event);
    console.log(event.x, event.y);*/
    output.textContent = `Coordinates x: ${event.clientX} y: ${event.clientY}`;
  });
};
clickCoords();

//3. something that reacts only to touch
const touchOnly = () => {
  document.addEventListener('touchstart', event => {
    console.log(event);
  });
};
touchOnly();

//4. hurry up -timer
const hurryUpTimer = delay => {
  const output = document.querySelector('#output');
  setTimeout(() => {
    output.textContent = 'VAUHTIA!!!';
  }, delay*1000);
};
//hurryUpTimer(5);


//5. hurry up -timer advanced
const hurryUpTimerPlus = delay => {
  const output = document.querySelector('#output');

  let timer;
  const resetTimer = event => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      output.textContent = 'VAUHTIA!!!';
    }, delay*1000);
  };

  resetTimer();
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('touchstart', resetTimer);
};
hurryUpTimerPlus(5);
