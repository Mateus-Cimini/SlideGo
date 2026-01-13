// libs
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

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
import { initThemeToggle } from "./theme.js";
import { initCarouselHandlers } from "./js/handlers/carousel.handler.js";
import { initCarouselFromDB } from "./js/handlers/carouselInitHandlers.js";
import { initEmailForm } from "./js/email.js";

const body = document.body;
const btn = document.getElementById("toggleTheme");
const icon = document.getElementById("iconTheme");
const carousel = document.getElementById("carouselHome");

initThemeToggle(
  document.getElementById("toggleTheme"),
  document.body,
  document.getElementById("iconTheme")
);

const nav = document.getElementById("navbarHeader");
const btnMenu = document.getElementById("btnNavbar");

const collapse = bootstrap.Collapse.getOrCreateInstance(nav, {
  toggle: false
});

btnMenu.addEventListener("click", () => {
  collapse.toggle();
});


$(function () {
  initImageForm(carousel);
  initCarouselHandlers(carousel);
  initCarouselFromDB(carousel);
  initEmailForm();
});
