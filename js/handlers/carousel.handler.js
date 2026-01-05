import {
  editImageCarousel,
  deleteImageCarousel,
} from "../components/carousel.js";
import { deleteImageFromDB, editImageFromDB } from "../db/images.db.js";
import { openEditModal } from "./modal.handlers.js";

let currentEditId = null;
let currentEditItem = null;

export function initCarouselHandlers(carousel) {
  $(carousel).on("click", ".btn-warning", function () {
    const itemClicked = $(this).closest(".carousel-item");
    console.log ('id clicado:', itemClicked.data("id"));

    currentEditId = Number(itemClicked.data("id"));
    currentEditItem = itemClicked;

    $("#modalAddimage")
    .data("mode", "edit")
    .data("id", currentEditId)

    openEditModal(currentEditId);
  });

  $(carousel).on("click", ".btn-danger", function () {
    const itemClicked = $(this).closest(".carousel-item");
    const id = Number(itemClicked.data("id"));
    deleteImageFromDB(id)
      .then(() => {
        deleteImageCarousel(itemClicked, carousel);
      })
      .catch(console.error);
  });
}
