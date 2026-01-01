const body = document.body;
const btn = document.getElementById("toggleTheme");
const icon = document.getElementById("iconTheme");

btn.onclick = () => {
  body.classList.toggle("dark");
  if (icon.classList.contains("bi-sun")) {
    icon.className = "bi bi-moon-stars";
  } else {
    icon.className = "bi bi-sun";
  }

  if (btn.classList.contains("btn-light")) {
    btn.className = "btn btn-dark";
  } else {
    btn.className = "btn btn-light";
  }
};

// ao fechar o modal a pagina role ate o home, depois vou adicionar animação de confeites e vou colocar esse codigo em um modal.js e importar para o main, mas por enquanto deixa aqui
const modalAddImage = document.getElementById("modalAddImage");
modalAddImage.addEventListener("hidden.bs.modal", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

// codigo começa aqui

$(function () {
  let $titleNewImage, $urlNewImage;

  $("#formAddImage").on("submit", function (e) {
    e.preventDefault();
    $titleNewImage = $("#inputTitle").val();
    $urlNewImage = $("#inputURLImage").val();

    // cria o novo carousel
    const newItem = $(`
      <div class="carousel-item">
        <div class="btnsImg">
          <button class="btn btn-warning btn-sm"><i class="bi bi-pencil"></i></button>
          <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
        </div>
        <img src="${$urlNewImage}" class="d-block w-100" />
        <div class="carousel-caption d-block">
          <h5>${$titleNewImage}</h5>
        </div>
      </div>
    `);

    // add no carousel
    $('#carouselHome .carousel-inner').append(newItem);

    // att os indicadores
    const index = $('#carouselHome .carousel-item').length - 1;
    const newIndicator = $(`<button type="button" data-bs-target="#carouselHome" data-bs-slide-to="${index}"></button>`);
    $('#carouselHome .carousel-indicators').append(newIndicator);

    // limpa inputs modal
    $('#inputTitle').val('');
    $('#inputURLImage').val('');
  });

  $(".btn-success").on("click", function () {
    $("#formAddImage").submit();
    console.log(`${$titleNewImage} and ${$urlNewImage}`);
    realisticConfetti(); // dispara confetes padrão no centro da tela
  });

// efeito de confetti depois colocar em outro arquivo
function realisticConfetti() {
  var count = 200;
  var defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

});
