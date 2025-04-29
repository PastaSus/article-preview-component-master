"use strict";

const delegateBtn = document.querySelector(".article-preview__button");

const authorInfo = document.querySelector(".article-preview__author-info");

const popup = document.querySelector(".article-preview__share-popup");
const footerBgcolor = document.querySelector(".article-preview__footer");
const path = document.querySelector(".article-preview__path");

const mediaQuery = window.matchMedia("(max-width: 375px)");

delegateBtn.addEventListener("click", function () {
  // checks if were in mobile
  if (mediaQuery.matches) {
    if (popup.classList.contains("hidden")) {
      authorInfo.classList.add("hidden");
      popup.classList.remove("hidden");
      footerBgcolor.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
    } else {
      authorInfo.classList.remove("hidden");
      popup.classList.add("hidden");
      footerBgcolor.style.backgroundColor = "#fff";
    }
  } else {
    // if (mediaQuery !== mediaQuery.matches)
    //if not in mobile we do this
    if (popup.classList.contains("hidden")) {
      popup.classList.remove("hidden");
      // popup.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
    } else {
      popup.classList.add("hidden");
    }
  }
});

// delegateBtn.addEventListener("mouseout", function (e) {
//
// });

// delegateBtn.addEventListener("click", function () {
//   popup.classList.toggle("hidden");

//   authorInfo.classList.add("hidden");
//   authorInfo.style.display = "none";
// });
