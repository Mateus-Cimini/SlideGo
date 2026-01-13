export function initEmailForm() {
  $(".contentFormEmail").on("submit", function (e) {
    e.preventDefault();

    const email = $("#inputEmail").val().trim();
    if (!email) return;

    $.ajax({
      url: "https://sheetdb.io/api/v1/gxj72zajb8bqy",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        data: [{ email: email }],
      }),
      success: function () {
        $(".contentFormEmail")[0].reset();
      },
      error: function () {
        alert("erro ao salvar email");
      },
    });
  });
}
