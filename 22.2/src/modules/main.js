const url = "https://google.com";

function redirect(event) {
  event.preventDefault();
  document.location.replace(url);
}

document.querySelector(".myLink").addEventListener("click", redirect);
