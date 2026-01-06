// libs
import $ from "jquery";
window.$ = $;
window.jQuery = $;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// css do projeto
import "./css/main.css";
import "./components/badge/badge.css";

// js do projeto
import "./js/components/badgeInit.js";
import { initImageForm } from "./js/handlers/imageFormHandler.js";
import { initThemeToggle } from "./js/lightanddark.js";
import { initCarouselHandlers } from "./js/handlers/carousel.handler.js";
import { initCarouselFromDB } from "./js/handlers/carouselInitHandlers.js";

const body = document.body;
const btn = document.getElementById("toggleTheme");
const icon = document.getElementById("iconTheme");
const carousel = document.getElementById("carouselHome");

initThemeToggle(btn, body, icon);

$(function () {
  initImageForm(carousel);
  initCarouselHandlers(carousel);
  initCarouselFromDB(carousel);
});
