import $ from "jquery";
import * as bootstrap from "bootstrap";
import { getImageFromDB } from "../db/images.db.js";

export function openEditModal(id) {
  getImageFromDB(id).then((data) => {
    $("#inputTitle").val(data.title);
    $("#inputURLImage").val(data.url);

    $("#modalAddImage").data("mode", "edit").data("id", id);

    console.log("MODE:", $("#modalAddImage").data("mode"));
    console.log("ID:", $("#modalAddImage").data("id"));

    const modalEl = document.getElementById("modalAddImage");
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  });
}

const modalEl = document.getElementById("modalAddImage");

modalEl.addEventListener("hidden.bs.modal", () => {
  $("#modalAddImage")
    .data("mode", "add")
    .removeData("id");

  $("#inputTitle").val("");
  $("#inputURLImage").val("");
});
