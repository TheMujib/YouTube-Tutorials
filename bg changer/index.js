const glass = document.querySelector('.glass');
const heading = document.querySelector('.heading');
const btn = document.querySelector('.button');
const body = document.getElementsByTagName('body');

function m() {
  for (i = 0; i < 1; i++) {
    btn.click();
    console.log('clicked');
  }
}

setInterval(function () {
  colorGenerator();
}, 2000);

function colorGenerator() {
  let letters = '0123456789abcdef';

  let hash1 = '#';
  let hash2 = '#';
  let hash3 = '#';

  for (let i = 0; i < 6; i++) {
    hash1 += letters[Math.floor(Math.random() * 16)];
    hash2 += letters[Math.floor(Math.random() * 16)];
    hash3 += letters[Math.floor(Math.random() * 16)];
  }
  body.innerHTML = `background : linear-gradient(to right,${hash1},${hash2},${hash3})`;
  document.documentElement.style.background = `linear-gradient(to right,${hash1},${hash2},${hash3})`;
  // document.heading.textContent = `${hash1},${hash2},${hash3}`;
  heading.style.color = hash1;
}
