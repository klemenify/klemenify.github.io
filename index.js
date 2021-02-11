( () => {
  const dontClickButton = document.querySelector('#dontClick');
  const byeSection = document.querySelector('.bye');
  const wave = document.querySelector('.wave');
  dontClickButton.addEventListener('click', () => {
    byeSection.style.display = 'none';
    wave.style.display = '';
  });
})();
