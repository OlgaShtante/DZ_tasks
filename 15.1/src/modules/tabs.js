import { ClassUpdate } from "./classUpdate.js";

const htmlElements = {};
htmlElements.links = document.querySelectorAll(".container .links a");
htmlElements.tabs = document.querySelectorAll(".container .tabs > div");

function Tabs() {}
Tabs.prototype.init = function(mode) {
  htmlElements.links.forEach(function(link) {
    link.addEventListener("click", showTabIsSelected);
  });
  showTabIsActive(mode);
};

function showTabIsSelected() {
  showTabIsActive(this.dataset.mode);
}

function showTabIsActive(mode) {
  showLinkIsSelected(mode);
  displayContentOfTab(mode);
}

function showLinkIsSelected(mode) {
  ClassUpdate.removeClass("selected", htmlElements.links);
  htmlElements.links.forEach(function(link) {
    if (link.dataset.mode === mode) {
      ClassUpdate.addClass("selected", [link]);
    }
  });
}

function displayContentOfTab(mode) {
  ClassUpdate.addClass("hidden", htmlElements.tabs);
  htmlElements.tabs.forEach(function(tab) {
    if (tab.dataset.mode === mode) {
      ClassUpdate.removeClass("hidden", [tab]);
    }
  });
}

export { Tabs };
