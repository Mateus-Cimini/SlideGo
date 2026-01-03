import { validateImageForm } from "../validate.js";
import { addImageCarousel } from "../components/carousel.js";
import { realisticConfetti } from "../components/confetti.js";
import { modalScrollPag } from "../components/modal.js";
import { addImageToDB } from "../db/images.db.js";


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

    addImageToDB({title, url})
    .then((id) => {
      addImageCarousel(carousel, id, title, url);
      realisticConfetti();
      modalScrollPag();
      console.log('imagem salva com sucesso com id:', id);
    })
    .catch((err) => {
      console.error('erro ao salvar imagem', err)
    })

    // limpa inputs modal
    $("#inputTitle").val("");
    $("#inputURLImage").val("");

  });

  $(".btn-success").on("click", function () {
    $("#formAddImage").submit();
  });
}
