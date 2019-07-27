import Promise2 from "./promise2.js";

function AsyncAwait1(name) {
  this.name = name;
}

AsyncAwait1.prototype.run = async function run(url) {
  const self = this;
  const url2 = url;
  const promise2 = new Promise2(self.name);
  const logger = await promise2.run(url2);
  return logger;
};

export default AsyncAwait1;
