const toastAdd = document.getElementById("toastAdd");
const toastEdit = document.getElementById("toastEdit");
const toastDelete = document.getElementById("toastDelete");

export function toastAddImage(title) {
    toastAdd.querySelector(".toast-title").textContent = title
  showToastWithTime(toastAdd);
}

export function toastEditImage(title) {
    toastEdit.querySelector(".toast-title").textContent = title
  showToastWithTime(toastEdit);
}

export function toastDeleteImage(title) {
    toastDelete.querySelector(".toast-title").textContent = title
  showToastWithTime(toastDelete);
}


function timeAgo(ms) {
  const sec = Math.floor(ms / 1000);
  if (sec < 2) return "agora";
  if (sec < 60) return `${sec}s atrás`;

  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m atrás`;

  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h atrás`;

  const day = Math.floor(hr / 24);
  return `${day}d atrás`;
}

function showToastWithTime(toastElement, message) {
  const startTime = Date.now();
  const $time = $(toastElement).find(".toast-time");
  const $message = $(toastElement).find(".toast-message")

 $message.text(message)


  function updateTime() {
    const diff = Date.now() - startTime;
    $time.text(timeAgo(diff));
  }

  updateTime();
  const interval = setInterval(updateTime, 1000);

  toastElement.addEventListener("hidden.bs.toast", () => {
    clearInterval(interval), { once: true };
  });

  new bootstrap.Toast(toastElement).show();
}
