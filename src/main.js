import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import "./css/faq.css";
// Дані для FAQ
const faqData = [
  {
    question: "Як здійснюється доставка меблів?",
    answer: "Ми доставляємо замовлення по всій Україні через кур'єрські служби. Термін доставки зазвичай складає 2–7 днів з моменту обробки."
  },
  {
    question: "Чи є можливість вибрати колір або матеріал?",
    answer: "Так, у більшості товарів доступні варіанти вибору кольорів. Усі доступні опції вказані в описі товару."
  },
  {
    question: "Чи можна повернути товар, якщо він не підійшов?",
    answer: "Так, ви можете повернути товар протягом 14 днів. Зв'яжіться з нашою службою підтримки для отримання інструкцій."
  },
  {
    question: "Чи надаєте ви послугу збирання меблів?",
    answer: "Так, ми пропонуємо замовлення послуги збирання меблів. Наші майстри зберуть меблі у зручний для вас час."
  },
  {
    question: "Як здійснити оплату?",
    answer: "Ми приймаємо оплату карткою онлайн. Безпечність переказів 100% гарантується при отриманні."
  },
];

// Рендер FAQ
const faqContainer = document.getElementById("faq-list");

faqData.forEach(item => {
  faqContainer.innerHTML += `
    <article class="ac">
      <h3 class="ac-header">
        <button type="button" class="ac-trigger">${item.question}</button>
      </h3>
      <div class="ac-panel">
        <p class="ac-text">${item.answer}</p>
      </div>
    </article>
  `;
});


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