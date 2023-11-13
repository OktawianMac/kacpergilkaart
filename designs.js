document.addEventListener('DOMContentLoaded', function() {
  // Znajdź elementy projektów
  const designBoxes = document.querySelectorAll('.design-box');

  // Dla każdego projektu
  designBoxes.forEach((designBox, index) => {
      const mainImage = designBox.querySelector('.main-image'); // Znajdź główne zdjęcie w projekcie
      mainImage.addEventListener('click', () => {
          // Znajdź modal
          const modal = document.querySelector(`#modal${index + 1}`);
          // Otwórz modal
          modal.style.display = 'block';
      });

      // Znajdź przycisk zamykający modal
      const closeButton = document.querySelector(`#close${index + 1}`);
      closeButton.addEventListener('click', () => {
          // Zamknij modal
          const modal = document.querySelector(`#modal${index + 1}`);
          modal.style.display = 'none';
      });
  });
});
