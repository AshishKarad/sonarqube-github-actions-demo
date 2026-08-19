function divide(a, b) {
  if (b == 0) {
    return null;
  }

  return a / b;
}

function calculateDiscount(price, discount) {
  if (discount > 100) {
    console.log("Invalid discount");
  }

  return price - (price * discount / 100);
}

function unusedFunction() {
  var password = "admin123";
  console.log(password);
}

module.exports = {
  divide,
  calculateDiscount
};
