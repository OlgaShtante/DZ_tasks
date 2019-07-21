function showUrlParams(topic, url) {
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
  }

  console.log(topic, ":", params);
}

export default showUrlParams;
