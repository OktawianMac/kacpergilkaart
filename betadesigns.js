// script.js
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container) => {
  const images = container.querySelectorAll('.image');
  let currentImageIndex = 0;

  const changeImage = () => {
    images[currentImageIndex].classList.remove('active');
    images[currentImageIndex].classList.add('inactive');

    currentImageIndex = (currentImageIndex + 1) % images.length;

    images[currentImageIndex].classList.remove('inactive');
    images[currentImageIndex].classList.add('active');
  };

  const existingInterval = container.getAttribute('data-interval');
  if (existingInterval) {
    clearInterval(parseInt(existingInterval));
  }

  const intervalId = setInterval(changeImage, 5000);
  container.setAttribute('data-interval', intervalId);
});
