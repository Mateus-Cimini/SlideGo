import { getImageFromDB } from "../db/images.db.js";

export function openEditModal(id) {
  getImageFromDB(id).then((data) => {
    $("#inputTitle").val(data.title);
    $("#inputURLImage").val(data.url);

    $("#modalAddImage")
      .data("mode", "edit")   
      .data("id", id);       

    $("#modalAddImage").modal("show");
  });
}

// modo ADD
$("#btnAddImage").on("click", () => {
  $("#modalAddImage")
    .data("mode", "add")
    .removeData("id");

  $("#inputTitle").val("");
  $("#inputURLImage").val("");

  $("#modalAddImage").modal("show");
});
