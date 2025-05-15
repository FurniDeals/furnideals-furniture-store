const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');

});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".toggle-icon");

            // Toggle answer visibility
            answer.style.display = answer.style.display === "block" ? "none" : "block";

            // Change icon from + to -
            icon.textContent = answer.style.display === "block" ? "−" : "+";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const openPopup = document.getElementById("open-popup");
  const closePopup = document.querySelector(".close-btn");

  // Open the popup
  openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Close the popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close popup when clicking outside the content
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const newsletterPopup = document.getElementById("newsletter-popup");
  const openNewsletter = document.getElementById("open-newsletter");
  const closeNewsletter = document.querySelector(".close-btn");

  // Open the popup
  openNewsletter.addEventListener("click", () => {
    newsletterPopup.style.display = "flex";
  });

  // Close the popup
  closeNewsletter.addEventListener("click", () => {
    newsletterPopup.style.display = "none";
  });

  // Close popup when clicking outside the content
  window.addEventListener("click", (e) => {
    if (e.target === newsletterPopup) {
      newsletterPopup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openBlogPopup = document.getElementById("blog/news-popup");
  const blogPopup = document.getElementById("open-blog/news");
  const closeBtn = document.querySelector(".close-btn");

  // Open Popup
  openBlogPopup.addEventListener("click", function () {
      blogPopup.style.display = "flex";
  });

  // Close Popup
  closeBtn.addEventListener("click", function () {
      blogPopup.style.display = "none";
  });

  // Close when clicking outside the box
  window.addEventListener("click", function (e) {
      if (e.target === blogPopup) {
          blogPopup.style.display = "none";
      }
  });
});

// For opening and closing the Contact Us Popup
document.getElementById('open-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.querySelector('#popup .close-btn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// For opening and closing the Newsletter Popup
document.getElementById('open-newsletter').addEventListener('click', function() {
  document.getElementById('newsletter-popup').style.display = 'block';
});

document.querySelector('#newsletter-popup .close-btn').addEventListener('click', function() {
  document.getElementById('newsletter-popup').style.display = 'none';
});

document.getElementById('menu-btn').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
