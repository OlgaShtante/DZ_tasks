const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  const url = document.querySelector(".urlInput").value;

  class ParseUrl {
    constructor(url) {
      this.url = url;
    }

    showUrlParamsBySplit() {
      const params = {};
      const partsOfUrl = url.split("?");
      if (partsOfUrl.length === 2) {
        const partWithParams = partsOfUrl[1].split("&");
        partWithParams.forEach(pair => {
          const paramPair = pair.split("=");
          const name = paramPair[0];
          const value = paramPair[1];
          params[name] = value;
        });

        return params;
      } else {
        return "There are no URL with parameters!";
      }
    }

    showUrlParamsByRegExp() {
      const params = {};
      const regExp = /[?&]+([^=&]+)=([^&]*)/g;

      url.replace(regExp, (match, key, value) => {
        params[key] = value;
      });
      if (url.includes("&") || url.includes("?")) {
        return params;
      } else {
        return "There are no URL with parameters!";
      }
    }
  }

  const parseUrl = new ParseUrl(url);

  //Type 1
  console.log("Parse via split:");
  console.log(parseUrl.showUrlParamsBySplit());

  //Type 2
  console.log("Parse via regular expressions:");
  console.log(parseUrl.showUrlParamsByRegExp());
});
