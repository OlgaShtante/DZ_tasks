import { addClass, removeClass } from "./classUpdate.js";

const htmlElements = {};
htmlElements.links = document.querySelectorAll(".container .links a");
htmlElements.tabs = document.querySelectorAll(".container .tabs > div");

function Tabs() {}
Tabs.prototype.init = function(mode) {
  htmlElements.links.forEach(function(link) {
    link.addEventListener("click", tabIsSelected);
  });
  tabIsActive(mode);
};

function tabIsSelected() {
  tabIsActive(this.dataset.mode);
}

function tabIsActive(mode) {
  linkIsSelected(mode);
  contentIsDisplayed(mode);
}

function linkIsSelected(mode) {
  removeClass("selected", htmlElements.links);
  htmlElements.links.forEach(function(link) {
    if (link.dataset.mode === mode) {
      addClass("selected", [link]);
    }
  });
}

function contentIsDisplayed(mode) {
  addClass("hidden", htmlElements.tabs);
  htmlElements.tabs.forEach(function(tab) {
    if (tab.dataset.mode === mode) {
      removeClass("hidden", [tab]);
    }
  });
}

export { Tabs };
