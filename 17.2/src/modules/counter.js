function getCounterObject() {
  let valueToCount = 100;
  function increase(val) {
    valueToCount *= val;
  }

  function decrease(val) {
    valueToCount /= val;
  }

  function show() {
    console.log("counter is", valueToCount);
  }

  return { increase, decrease, show };
}

const objectCounter = getCounterObject();
objectCounter.increase(1);
objectCounter.decrease(100);
objectCounter.show();

console.log("new object has been created with return:", getCounterObject());
