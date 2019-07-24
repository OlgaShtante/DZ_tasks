function delay1(milliseconds) {
  return Promise.resolve().then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(() => {
          return console.log(
            "Delay 5 sec: You've got a function as a parameter!"
          );
        });
      }, milliseconds);
    });
  });
}

delay1(5000).then(param1 => {
  param1();
});

function delay2(milliseconds) {
  return Promise.resolve().then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(
        resolve.bind(
          null,
          "Delay 3 sec: You've got a function as a parameter!"
        ),
        milliseconds
      );
    });
  });
}

delay2(3000).then(param2 => {
  console.log(param2);
});
