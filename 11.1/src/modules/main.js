
const buttonToCheckThePassword = document.querySelector('.button');
buttonToCheckThePassword.addEventListener('click', checkPasswordByClick);

function checkPasswordByClick(){
  if (checkIfPasswordIsValid() === true){
      alert("OK\nYour password is correct!");
  }
}

function checkIfPasswordIsValid(){
let passwordField = prompt("Input your password to verify");
let validPassword = 'mypassword';
  if(passwordField === validPassword){
     return true;
  }
  return checkIfPasswordIsValid();
}


