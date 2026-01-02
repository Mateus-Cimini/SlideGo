import { initImageForm } from "./handlers/imageFormHandler.js";
import { initThemeToggle } from "./lightanddark.js";

const body = document.body;
const btn = document.getElementById("toggleTheme");
const icon = document.getElementById("iconTheme");
const carousel = document.getElementById("carouselHome");

// btn theme
initThemeToggle(btn, body, icon);localStorage

//
$(function () {
  initImageForm(carousel);
});
