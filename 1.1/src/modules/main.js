let button = document.querySelector(".btn");

button.addEventListener("click", plus);

function plus() {
  let num1, num2, sum;

  num1 = document.getElementById("inp1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("inp2").value;
  num2 = parseInt(num2);

  sum = num1 + num2;
  alert(`Result is ${sum}`);
}
