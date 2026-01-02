export function modalScrollPag() {
  const modalAddImage = document.getElementById("modalAddImage");
  modalAddImage.addEventListener("hidden.bs.modal", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
}
