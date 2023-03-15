const button = document.querySelector('.company__button');
const moreText = document.querySelector('.company__more');

export const initMoreText = () => {
  if (button && moreText) {
    button.addEventListener('click', () => {
      if (moreText.classList.contains('company__more--hidden')) {
        moreText.classList.remove('company__more--hidden');
        button.textContent = 'Свернуть';
      } else {
        moreText.classList.add('company__more--hidden');
        button.textContent = 'Подробнее';
      }
    });
  }
};

export default initMoreText;
