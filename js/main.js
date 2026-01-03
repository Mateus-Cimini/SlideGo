import { initImageForm } from "./handlers/imageFormHandler.js";
import { initThemeToggle } from "./lightanddark.js";
import { initCarouselHandlers } from "./handlers/carousel.handler.js";
import { initCarouselFromDB } from "./handlers/carouselInitHandlers.js";

const body = document.body;
const btn = document.getElementById("toggleTheme");
const icon = document.getElementById("iconTheme");
const carousel = document.getElementById("carouselHome");

// btn theme
initThemeToggle(btn, body, icon);

//
$(function () {
  initImageForm(carousel);
  initCarouselHandlers(carousel);
  initCarouselFromDB(carousel)
});
