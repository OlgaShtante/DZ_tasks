function delay(milliseconds) {
  const myPromise = new Promise(function(resolve) {
    setTimeout(resolve, milliseconds);
  });
  return myPromise;
}

function textMessage() {
  console.log("Delay messages:");
}

delay(1000)
  .then(textMessage)
  .then(() => {
    delay(3000)
      .then(function() {
        console.log("The delay of this message is 3 sec.");
      })
      .then(function() {
        console.log("This delay is equal to the delay of the message above!");
      })
      .then(() => {
        delay(1000).then(function() {
          console.log(
            "This message appears in 1 sec after the message with 3 sec delay."
          );
        });
      });
  });
