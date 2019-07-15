function getJSON(url, callback) {
  const request = new XMLHttpRequest();
  request.onload = function() {
    callback(this.responseText);
  };
  request.open("GET", url);
  request.send();
}

function Data() {}

Data.prototype.getUsefulContents = function(url) {
  return new Promise(callback => {
    getJSON(url, data => {
      callback(data);
    });
  });
};

export { Data };
