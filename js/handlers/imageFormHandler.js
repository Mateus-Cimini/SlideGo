import { validateImageForm } from "../validate.js";
import { addImageCarousel } from "../components/carousel.js";
import { realisticConfetti } from "../components/confetti.js";
import { modalScrollPag } from "../components/modal.js";

export function initImageForm(carousel) {
  $("#formAddImage").on("submit", function (e) {
    e.preventDefault();

    const title = $("#inputTitle").val();
    const url = $("#inputURLImage").val();

    const result = validateImageForm(title, url);

    if (!result.valid) {
      alert(result.message);
      return;
    }
    addImageCarousel(carousel, title, url);
    realisticConfetti();

    // limpa inputs modal
    $("#inputTitle").val("");
    $("#inputURLImage").val("");

    //rola a pag
    modalScrollPag();
  });

  $(".btn-success").on("click", function () {
    $("#formAddImage").submit();
  });
}
