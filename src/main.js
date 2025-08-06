import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import "./css/faq.css";


// 1. Ініціалізація з анімацією
const acc = new Accordion(".accordion-container", {
  duration: 500,
  showMultiple: false,
});

// 2. Закривати вручну з анімацією
document.addEventListener("click", (e) => {
  const accordionContainer = document.querySelector(".accordion-container");

  if (!accordionContainer.contains(e.target)) {
    // Знайти всі активні елементи
    const activeItems = document.querySelectorAll(".accordion-container .ac.is-active");

    activeItems.forEach((item, index) => {
      // Знаходимо індекс кожного активного елемента
      const allItems = Array.from(document.querySelectorAll(".accordion-container .ac"));
      const itemIndex = allItems.indexOf(item);

      if (itemIndex !== -1) {
        acc.close(itemIndex); // закриваємо з анімацією
      }
    });
  }
});