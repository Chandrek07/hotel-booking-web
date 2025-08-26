let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll(".contact .row .faq .box h3").forEach((faqBox) => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle("active");
  };
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

body.classList.remove("light-mode");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
});

var swiper = new Swiper(".home-slider", {
  loop: true,
  effect: "coverflow",
  spaceBetween: 30,
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
  },
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservation-form");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      let response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        popup.style.display = "block"; // show popup
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      alert("Error! Please try again.");
    }
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  });
});
// Contact form handling
const contactForm = document.getElementById("contact-form");
const contactPopup = document.getElementById("contact-popup");
const closeContactPopup = document.getElementById("close-contact-popup");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  try {
    let response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      contactForm.reset();
      contactPopup.style.display = "block";
    } else {
      alert("Something went wrong. Please try again!");
    }
  } catch (error) {
    alert("Error! Please try again.");
  }
});

closeContactPopup.addEventListener("click", () => {
  contactPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == contactPopup) {
    contactPopup.style.display = "none";
  }
});
