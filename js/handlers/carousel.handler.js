import {
  editImageCarousel,
  deleteImageCarousel,
} from "../components/carousel.js";

export function initCarouselHandlers(carousel) {
  $(carousel).on("click", ".btn-warning", function () {
    const itemClicked = $(this).closest(".carousel-item");
    editImageCarousel(itemClicked);
  });

  $(carousel).on("click", ".btn-danger", function () {
    const itemClicked = $(this).closest(".carousel-item");
    console.log(itemClicked);
    deleteImageCarousel(itemClicked, carousel);
  });
}
