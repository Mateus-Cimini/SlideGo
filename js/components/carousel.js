export function addImageCarousel(carouselEl, title, url) {
  // cria o novo carousel
  const $carousel = $(carouselEl);
  const carouselId = $carousel.attr("id");
  if (!carouselId) return;

  const newItem = $(`
      <div class="carousel-item">
        <div class="btnsImg">
          <button class="btn btn-warning btn-sm"><i class="bi bi-pencil"></i></button>
          <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
        </div>
        <img src="${url}" class="d-block w-100" />
        <div class="carousel-caption d-block">
          <h5>${title}</h5>
        </div>
      </div>
    `);

  // add no carousel
  $carousel.find(".carousel-inner").append(newItem);

  // att os indicadores
  const index = $carousel.find(".carousel-item").length - 1;
  const newIndicator = $(
    `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}"></button>`
  );
  $carousel.find(".carousel-indicators").append(newIndicator);
}
