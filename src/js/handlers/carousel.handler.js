import {
  editImageCarousel,
  deleteImageCarousel,
} from "../components/carousel.js";
import {
  deleteImageFromDB,
  editImageFromDB,
  getImageFromDB,
} from "../db/images.db.js";
import { openEditModal } from "./modal.handlers.js";
import { toastDeleteImage } from "../components/toast.js";

let currentEditId = null;
let currentEditItem = null;

export function initCarouselHandlers(carousel) {
  $(carousel).on("click", ".btn-warning", function () {
    const itemClicked = $(this).closest(".carousel-item");
    console.log("id clicado:", itemClicked.data("id"));

    currentEditId = Number(itemClicked.data("id"));
    currentEditItem = itemClicked;

    $("#modalAddimage").data("mode", "edit").data("id", currentEditId);
    openEditModal(currentEditId);
  });

  $(carousel).on("click", ".btn-danger", function () {
    const itemClicked = $(this).closest(".carousel-item");
    const id = Number(itemClicked.data("id"));

    getImageFromDB(id).then((image) => {
      toastDeleteImage(image.title);
      document.dispatchEvent(new CustomEvent("image:delete")); // dispara evento para o badge

      deleteImageFromDB(id)
        .then(() => {
          deleteImageCarousel(itemClicked, carousel);
        })
        .catch(console.error);
    });
  });
}
