function sum1(value1) {
  let resultOfCalc = 100;

  function sum2(value2) {
    resultOfCalc -= value2;
    return sum2;
  }
  sum2(value1);

  sum2.showResult = function() {
    console.log("sum is", resultOfCalc);
  };
  return sum2;
}

sum1(1)(2)(-3)(4)(5)(-6)(7)(8)(-9)(10).showResult();
