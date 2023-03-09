const accordions = document.querySelectorAll('.accordion');
const accordionToggles = document.querySelectorAll('.accordion__toggle');

export const initAccordion = () => {
  accordions.forEach((accordion, index) => {
    const accordionToggle = accordionToggles[index];
    accordion.classList.remove('accordion--no-js');
    accordionToggle.addEventListener('click', function () {
      if (accordion.classList.contains('accordion--opened')) {
        accordion.classList.remove('accordion--opened');
        accordion.classList.add('accordion--closed');
      } else {
        // Close all other accordions
        accordions.forEach((otherAccordion) => {
          if (otherAccordion !== accordion && otherAccordion.classList.contains('accordion--opened')) {
            otherAccordion.classList.remove('accordion--opened');
            otherAccordion.classList.add('accordion--closed');
          }
        });

        accordion.classList.add('accordion--opened');
        accordion.classList.remove('accordion--closed');
      }
    });
  });
};

export default initAccordion;
