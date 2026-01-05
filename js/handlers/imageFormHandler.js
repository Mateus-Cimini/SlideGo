import { validateImageForm } from "../validate.js";
import {
  addImageCarousel,
  updateImageCarousel,
} from "../components/carousel.js";
import { realisticConfetti } from "../components/confetti.js";
import { modalScrollPag } from "../components/modal.js";
import { addImageToDB, editImageFromDB } from "../db/images.db.js";

export function initImageForm(carousel) {
  $("#modalAddImage").data("mode", "add");

  $("#formAddImage").on("submit", function (e) {
    e.preventDefault();

    const title = $("#inputTitle").val();
    const url = $("#inputURLImage").val();

    const result = validateImageForm(title, url);
    if (!result.valid) {
      alert(result.message);
      return;
    }

    const modal = $("#modalAddImage");
    const mode = modal.data("mode");

    // ===== ADD =====
    if (mode === "add") {
      addImageToDB({ title, url })
        .then((id) => {
          addImageCarousel(carousel, id, title, url);
          realisticConfetti();
          modalScrollPag();
          console.log("imagem salva com sucesso com id:", id);
        })
        .catch(console.error);
    }

    // ===== EDIT =====
    if (mode === "edit") {
      const id = modal.data("id");

      editImageFromDB(id, { title, url })
        .then((updated) => {
          const item = $(`.carousel-item[data-id="${id}"]`);
          updateImageCarousel(item, updated);
          console.log("imagem editada:", updated);
        })
        .catch(console.error);
    }

    // limpa e fecha
    $("#inputTitle").val("");
    $("#inputURLImage").val("");
    modal.modal("hide");
  });

  $(".btn-success").on("click", function () {
    $("#formAddImage").submit();
  });
}
