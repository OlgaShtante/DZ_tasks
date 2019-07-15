const link = document.querySelector(".link");
link.addEventListener("mouseover", showMessage);
link.addEventListener("mouseleave", hideMessage);

window.onload = document.getElementById("msgDiv").style.display = "none";

function showMessage() {
  document.getElementById("msgDiv").style.display = "block";
}

function hideMessage() {
  document.getElementById("msgDiv").style.display = "none";
}
