export function addImageCarousel(carouselEl, title, url) {

 

  // cria o novo carousel
  const $carousel = $(carouselEl);
  const carouselId = $carousel.attr("id");
  if (!carouselId) return;

 const isFirstItem = $carousel.find('.carousel-item').length === 0;

  const newItem = $(`
      <div class="carousel-item ${isFirstItem ? "active" : ""}">
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

  toggleVisibility(carouselEl)
}

export function toggleVisibility(carouselEl) {
   const $carousel = $(carouselEl);
   const hasItem = $carousel.find(".carousel-item").length > 0;

   if (hasItem) {
    $carousel.show();
   } else {
    $carousel.hide();
   }
}


export function editImageCarousel(itemClicked) {
  console.log("editando", itemClicked);
}

export function deleteImageCarousel(itemClicked, carouselEl) {

  const $carousel = $(carouselEl);
  const index = itemClicked.index();

  const isActive = itemClicked.hasClass('active');
  const nextItem = itemClicked.next('.carousel-item');
  const prevItem = itemClicked.prev('.carousel-item');
  itemClicked.remove();
  $carousel.find(".carousel-indicators button").eq(index).remove();

  if (isActive) {
    if (nextItem.length) {
      nextItem.addClass('active');
    } else if (prevItem.length) {
      prevItem.addClass('active')
    }
  }

  toggleVisibility(carouselEl)
}