function fillFormByPromt() {
  // Validation:
  let letters = /^[A-Za-z\а-яА-Я]+$/;

  // Get a first name:
  let firstName = prompt("Please enter your first name:");
  while (
    firstName === null ||
    firstName.length < 2 ||
    !firstName.match(letters)
  ) {
    firstName = prompt("Please ensure that you've entered minimum 2 letters!");
  }

  // Get a middle name:
  let middleName = prompt("Please enter your middle name:");
  while (
    middleName === null ||
    middleName.length < 2 ||
    !middleName.match(letters)
  ) {
    middleName = prompt("Please ensure that you've entered minimum 2 letters!");
  }

  // Get a last name:
  let lastName = prompt("Please enter your last name:");
  while (lastName === null || lastName.length < 2 || !lastName.match(letters)) {
    lastName = prompt("Please ensure that you've entered minimum 2 letters!");
  }

  // Get an age:
  let checkAge = prompt("Please enter your age in years:");
  let age = parseInt(checkAge);
  let years = parseInt("5");
  let ageInYears = age + years;
  while (
    isNaN(checkAge) === true ||
    checkAge === null ||
    checkAge.length < 1 ||
    checkAge.length > 3
  ) {
    checkAge = prompt(
      "Please ensure that you've entered correct age: maximum 3 numbers and no other symbols!"
    );
    age = parseInt(checkAge);
    years = parseInt("5");
    ageInYears = age + years;
  }

  // Get a gender:
  let gender = confirm("Are you female?");
  if (gender !== true) {
    gender = "male or neutral";
  } else gender = "female";

  // //Pension:
  let pension;
  if (
    (gender === "female" && age >= 56) ||
    (gender !== "female" && age >= 61)
  ) {
    pension = '"You are retired!"';
  } else pension = '"You are not retired!"';

  // Get a trueAnswer:
  let trueAnswer = confirm("Do you like JS?");
  if (trueAnswer !== true) {
    trueAnswer = "You do not like JavaScript! 💔 How dare you!?";
  } else trueAnswer = "You like JS!\nGive me high-five!😊";

  alert(
    "Your full name is" +
      " " +
      firstName +
      " " +
      middleName +
      " " +
      lastName +
      ";" +
      "\nYour age in years is" +
      " " +
      age +
      ";" +
      "\nYour age in days is" +
      " " +
      age * 365 +
      ";" +
      "\nYou will be" +
      " " +
      ageInYears +
      " " +
      "y.o. in 5 years;" +
      "\nYour gender is" +
      " " +
      gender +
      ";" +
      "\nEmployement status:" +
      " " +
      pension +
      ";\n" +
      trueAnswer
  );
}
