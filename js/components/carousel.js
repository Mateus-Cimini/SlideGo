export function addImageCarousel(carouselEl, id, title, url) {
  // cria o novo carousel
  const $carousel = $(carouselEl);
  const carouselId = $carousel.attr("id");
  if (!carouselId) {
    console.log("carousel id:", carouselId);
    return;
  }

  const $inner = $carousel.find(".carousel-inner");
  const isFirstItem = $carousel.find(".carousel-item").length === 0;

  const newItem = $(`
      <div class="carousel-item ${isFirstItem ? "active" : ""}" data-id="${id}">
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
  $inner.append(newItem);
  rebuildIndicators(carouselEl);
  toggleVisibility(carouselEl);
}

export function editImageCarousel(itemClicked) {
  console.log("editando", itemClicked);
}

export function deleteImageCarousel(itemClicked, carouselEl) {
  const $carousel = $(carouselEl);
  const $inner = $carousel.find(".carousel-inner");

  const isActive = itemClicked.hasClass("active");
  const $next = itemClicked.next(".carousel-item");
  const $prev = itemClicked.prev(".carousel-item");

  itemClicked.fadeOut(300, function () {
    console.log("deletando", itemClicked)
    $(this).remove();

    const $items = $inner.find(".carousel-item");

    if ($items.length === 0) {
      toggleVisibility(carouselEl);
      rebuildIndicators(carouselEl);
      return;
    }

    if (isActive) {
      $items.removeClass("active");

      if ($next.length) {
        $next.addClass("active");
      } else if ($prev.length) {
        $prev.addClass("active");
      } else {
        $items.first().addClass("active");
      }
    }
    rebuildIndicators(carouselEl);
  });
}

function rebuildIndicators(carouselEl) {
  const $carousel = $(carouselEl);
  const carouselId = $carousel.attr("id");
  const $indicators = $carousel.find(".carousel-indicators");
  const $items = $carousel.find(".carousel-item");

  $indicators.empty();

  $items.each(function (index) {
    const isActive = $(this).hasClass("active");

    const indicator = $(`
      <button
        type="button"
        data-bs-target="#${carouselId}"
        data-bs-slide-to="${index}"
        class="${isActive ? "active" : ""}"
      ></button>
    `);

    $indicators.append(indicator);
  });
}

export function toggleVisibility(carouselEl) {
  const $carousel = $(carouselEl);
  const hasItem = $carousel.find(".carousel-item").length > 0;
  $carousel.toggle(hasItem);
}


export function updateImageCarousel(item, data) {
  item.find('h5').text(data.title);
  item.find('img').attr('src', data.url)
}