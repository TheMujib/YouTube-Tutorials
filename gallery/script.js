const activeImage = document.querySelector('.active-img .active');
const imgs = document.querySelectorAll('.img img');
const btmRow = document.querySelector('.btm-row');

function changeImg(e) {
  activeImage.src = e.target.src;
}

imgs.forEach(img => img.addEventListener('click', changeImg));

function getRandomClr() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];

    activeImage.style.borderColor = color;
  }

  return color;
}

btmRow.addEventListener('click', getRandomClr);
