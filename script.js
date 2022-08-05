"use strict";

const headerAndArrow = document.querySelector(
  ".header-title-and-arrow .inner-container"
);
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const btnScroll = document.querySelector(".arrow");
const section1Text = document.querySelector(".section--1 .transform");
const section1Main = document.querySelector(".section--1");
const mediaQuery900 = window.matchMedia("(min-width: 900px)");
const mediaQuery550 = window.matchMedia("(min-width: 550px)");

if (mediaQuery900.matches) {
  menu.classList.remove("hidden");
  headerAndArrow.classList.remove("hidden");
}

hamburger.addEventListener("click", function () {
  menu.classList.toggle("hidden");

  if (
    headerAndArrow.classList.value === "inner-container" &&
    menu.classList.value === "menu"
  ) {
    headerAndArrow.classList.add("hidden");
  } else {
    headerAndArrow.classList.remove("hidden");
  }

  if (menu.classList.value === "menu hidden") {
    menu.style.zIndex = "-10";
  } else {
    menu.style.zIndex = "0";
  }
});

btnScroll.addEventListener("click", function (e) {
  const s1coords = section1Text.getBoundingClientRect();

  if (mediaQuery550.matches) {
    section1Main.scrollIntoView({ behavior: "smooth" });
  } else {
    section1Text.scrollIntoView({ behavior: "smooth" });
  }
});

window.addEventListener("resize", (e) => {
  let media = mediaQuery900.matches;


  if (mediaQuery900.matches) {
    if (menu.classList.value === "menu hidden") {
      menu.classList.remove("hidden");
      media = true;
    }
    menu.classList.remove("hidden");
    headerAndArrow.classList.remove("hidden");
    menu.style.zIndex = "10";
  } else {
    menu.classList.add("hidden");
    headerAndArrow.classList.remove("hidden");
    menu.style.zIndex = "-10";
  }
});
