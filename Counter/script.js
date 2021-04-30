const number = document.querySelector('.number');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let counter = 0;

plus.addEventListener('click', () => {
  //   let cur = currentActive++;
  counter++;
  number.innerHTML = counter;

  if (counter > 0) {
    minus.disabled = false;
  }

  //   number.innerHTML = cur;
  //   number.innerHTML = parseInt(number.innerHTML) + 1;
});

minus.addEventListener('click', () => {
  //   number.innerHTML = parseInt(number.innerHTML) - 1;
  //   let cur = currentActive-- - 2;
  //   number.innerHTML = cur;
  counter--;
  number.innerHTML = counter;

  if (counter < 1) {
    minus.disabled = true;
  }
});
