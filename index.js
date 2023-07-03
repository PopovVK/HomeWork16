const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg'
];

let currentIndex = 0;

const image = document.getElementById('image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
  image.src = images[index];
}

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'inline';
  }

  if (currentIndex === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'inline';
  }
}

function showNextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
    updateButtons();
  }
}

function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
    updateButtons();
  }
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

showImage(currentIndex);
updateButtons();
