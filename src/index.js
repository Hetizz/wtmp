console.log('Hello console!');
// testing draggable.js
import {Sortable} from '@shopify/draggable';
// console.log(new Sortable());

new Sortable(document.querySelectorAll('ul'), {
  draggable: 'li'
});

let keyHistory = [];
document.addEventListener('keyup', event => {
  console.log('key event', event.key);
  /*keyHistory.push(event.key);
  if (event.key === 'Enter') {
    console.log(keyHistory);
    keyHistory = [];
  }*/
});

document.addEventListener('keydown', event => {
  console.log('keydown:', event.key, event.keyCode);
  if (event.keyCode === 13) {
    console.log('You hit enter!');
  }
});
