const htmlElements = {};

function initHTMLElements() {
  htmlElements.selectColor = getHTMLElement("select");
  htmlElements.addButton = getHTMLElement("button.add-button");
  htmlElements.input = getHTMLElement("input.input-color");
  htmlElements.removeButton = getHTMLElement("button.remove-button");
  htmlElements.removeSelectedButton = getHTMLElement("button.remove-selected");
  htmlElements.body = document.body;
}

function initEvenHandles() {
  htmlElements.selectColor.addEventListener("change", selectColorValueChanged);
  htmlElements.addButton.addEventListener("click", addButtonClicked);
  htmlElements.removeButton.addEventListener("click", removeColorClicked);
  htmlElements.removeSelectedButton.addEventListener(
    "click",
    removeSelectedColorClicked
  );
}

initHTMLElements();
initEvenHandles();

function selectColorValueChanged() {
  let colorValue = htmlElements.selectColor.value;
  setColor(colorValue);
}

function addButtonClicked() {
  let color = htmlElements.input.value;
  let ifColorAdded = checkIfColorAdded(color);
  if (ifColorAdded === true) {
    alert("Color has been already added");
    htmlElements.input.value = "";
  } else {
    let colorCanBeAdded = checkIfColorCanBeAdded(color);
    if (colorCanBeAdded === false) {
      alert("There's no such a color.");
      htmlElements.input.value = "";
    } else {
      addColor(color);
      chooseColor(color);
      setColor(color);
    }
  }
}

function removeColorClicked() {
  let valueRemoveColor = htmlElements.input.value;
  if (valueRemoveColor === "") {
    alert("Please enter a value first");
  } else {
    if (valueRemoveColor !== "") {
      removeColor(valueRemoveColor);
    }
  }
}

function removeSelectedColorClicked() {
  let removeSelectedColor = getSelectedValue(htmlElements.selectColor.value);
  if (removeSelectedColor === "not selected") {
    alert("Please choose a value to remove");
  }
  if (removeSelectedColor !== "not selected") {
    removeColor(removeSelectedColor);
  }
  reset();
}

function getSelectedValue() {
  let selectedIdx = htmlElements.selectColor.selectedIndex;
  return htmlElements.selectColor[selectedIdx].value;
}

function getHTMLElement(selector) {
  let element = document.querySelector(selector);
  return element;
}

function checkIfColorAdded(color) {
  let colorAdded = false;
  for (let i = 1; i < htmlElements.selectColor.length; i++) {
    if (htmlElements.selectColor[i].value === color) {
      colorAdded = true;
    }
  }
  return colorAdded;
}

function addColor(color) {
  let optionElement = new Option(color, color, true, true);
  htmlElements.selectColor.appendChild(optionElement);
  reset();
}

function chooseColor(color) {
  for (let i = 1; i < htmlElements.selectColor.length; i++) {
    if (htmlElements.selectColor[i].value === color) {
      setSelectedIndex(i);
    }
  }
}

function setSelectedIndex(idx) {
  htmlElements.selectColor.selectedIndex = idx;
}

function setColor(color) {
  htmlElements.body.style.setProperty("--color", color);
}

function removeColor(color) {
  let colorAdded = checkIfColorAdded(color);
  if (colorAdded === true) {
    for (let i = 1; i < htmlElements.selectColor.length; i++) {
      if (htmlElements.selectColor[i].value === color) {
        htmlElements.selectColor.removeChild(htmlElements.selectColor[i]);
        htmlElements.selectColor.selectedIndex = 0;
      }
    }
    reset();
  } else {
    alert("There's no such a color");
    {
      htmlElements.input.value = "";
    }
  }
}

function reset() {
  htmlElements.input.value = "";
  htmlElements.body.style.removeProperty("--color");
}

function checkIfColorCanBeAdded(color) {
  if (color.indexOf("rgb") > -1 || color === "") {
    return false;
  }

  let div = document.createElement("div");
  div.style.backgroundColor = color;
  let colorIsSetCorrectly = div.style.backgroundColor === color;
  return colorIsSetCorrectly;
}
