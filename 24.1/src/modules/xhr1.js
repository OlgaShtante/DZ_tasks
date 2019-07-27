import { Logger } from "./logger.js";

function Xhr1(name) {
  this.name = name;
}

Xhr1.prototype.run = function(url) {
  const before = Date.now();
  return new Promise((resolve, reject) => {
    const self = this;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      const after = Date.now();
      resolve(new Logger(self.name, before, after, "completed successfully"));
    };
    xhr.send();
  });
};

export default Xhr1;
