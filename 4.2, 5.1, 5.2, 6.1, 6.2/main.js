let htmlElements;

let items = [
  { color: "DarkGreen", bgColor: "ForestGreen" },
  {
    color: "Orange",
    bgColor: "Yellow"
  },
  {
    color: "FireBrick",
    bgColor: "OrangeRed"
  }
];

function init() {
  htmlElements = {
    bgColorInput: document.querySelector("input.bg-color-input"),
    textColorInput: document.querySelector("input.text-color-input"),
    addButton: document.querySelector("button.add-button"),
    items: document.querySelector("div.items")
  };

  htmlElements.addButton.addEventListener("click", addNewItem);
  htmlElements.bgColorInput.addEventListener("focusout", checkBgColorField);
  htmlElements.textColorInput.addEventListener("focusout", checkColorField);

  render();
}

init();

function render() {
  htmlElements.items.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    let existedItems = items[i];

    const divTextAndButton = document.createElement("div");
    divTextAndButton.className = "item";
    divTextAndButton.style.backgroundColor = existedItems.bgColor;
    divTextAndButton.style.color = existedItems.color;
    divTextAndButton.addEventListener("click", newItemClicked);
    if (existedItems.selected === true) {
      divTextAndButton.classList.add("selected");
      document.body.style.backgroundColor = existedItems.bgColor;
      document.querySelector(".hello-world").style.color = existedItems.color;
    }
    htmlElements.items.appendChild(divTextAndButton);

    const span = document.createElement("span");
    span.classList.add("item-text");
    span.innerText = existedItems.color;
    span.style.color = existedItems.color;
    divTextAndButton.appendChild(span);

    const xButton = document.createElement("button");
    xButton.className = "delete-button";
    xButton.addEventListener("click", deleteButtonClicked);
    xButton.innerText = "X";
    divTextAndButton.appendChild(xButton);
  }
}

function deleteButtonClicked(event) {
  event.stopPropagation();

  let removeItem = this.parentElement;
  const itemElement = removeItem.parentElement;
  const itemArray = Array.from(itemElement.querySelectorAll("div.item"));
  let index = itemArray.indexOf(removeItem);
  items.splice(index, 1);

  render();
}

function newItemClicked() {
  for (let i = 0; i < items.length; i++) {
    items[i].selected = false;
  }
  const selectElement = this.parentElement;
  const itemArray = Array.from(selectElement.querySelectorAll("div.item"));
  let index = itemArray.indexOf(this);
  items[index].selected = true;

  render();
}

function addNewItem() {
  let bgcolorCanBeAdded = checkIfBgColorCanBeAdded();
  let colorCanBeAdded = checkIfColorCanBeAdded();
  if (bgcolorCanBeAdded === true && colorCanBeAdded === true) {
    htmlElements.bgColorInput.style.borderColor = "";
    htmlElements.textColorInput.style.borderColor = "";
    createNewItem();
  } else {
    checkBgColorField();
    checkColorField();
  }

  render();
}

function createNewItem() {
  let checkedItem = CheckThisItem();
  if (checkedItem === false || checkedItem !== true) {
    let newItem = {};
    newItem.bgColor = htmlElements.bgColorInput.value;
    newItem.color = htmlElements.textColorInput.value;
    items.push(newItem);
    htmlElements.bgColorInput.value = "";
    htmlElements.textColorInput.value = "";
  } else {
    htmlElements.bgColorInput.style.borderColor = "red";
    htmlElements.textColorInput.style.borderColor = "red";
  }
}

function CheckThisItem() {
  let checkedItem = {};
  checkedItem.bgColor = htmlElements.bgColorInput.value;
  checkedItem.color = htmlElements.textColorInput.value;
  for (let i = 0; i < items.length; i++) {
    if (
      items[i].bgColor === checkedItem.bgColor &&
      items[i].color === checkedItem.color
    ) {
      return true;
    }
  }
}

function checkIfColorCanBeAdded() {
  let color = htmlElements.textColorInput.value;
  if (color.indexOf("rgb") > -1 || color === "") {
    return false;
  }
  let div = document.createElement("div");
  div.style.color = color;
  let colorIsSetCorrectly = div.style.color === color;
  return colorIsSetCorrectly;
}

function checkIfBgColorCanBeAdded() {
  let bgColor = htmlElements.bgColorInput.value;
  if (bgColor.indexOf("rgb") > -1 || bgColor === "") {
    return false;
  }
  let div = document.createElement("div");
  div.style.backgroundColor = bgColor;
  let colorIsSetCorrectly = div.style.backgroundColor === bgColor;
  return colorIsSetCorrectly;
}

function checkBgColorField() {
  let bgColorChecked = checkIfBgColorCanBeAdded();
  if (bgColorChecked === false || bgColorChecked === "undefined") {
    htmlElements.bgColorInput.style.borderColor = "red";
  } else {
    htmlElements.bgColorInput.style.borderColor = "";
  }
}

function checkColorField() {
  let colorChecked = checkIfColorCanBeAdded();
  if (colorChecked === true) {
    htmlElements.textColorInput.style.borderColor = "";
  } else {
    htmlElements.textColorInput.style.borderColor = "red";
  }
}
