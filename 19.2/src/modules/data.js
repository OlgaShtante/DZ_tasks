function getJSON(url, response) {
  const request = new XMLHttpRequest();
  request.onload = function() {
    response(this.responseText);
  };
  request.open("GET", url);
  request.send();
}

function Data() {
  this.getUsefulContents = function(url, response) {
    getJSON(url, function(data) {
      return response(JSON.parse(data));
    });
  };
}

export { Data };
