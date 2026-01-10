function calculateSIP() {
  let monthly = parseFloat(document.getElementById("monthly").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let years = parseFloat(document.getElementById("years").value);

  if (!monthly || !rate || !years) {
    alert("Please enter all values correctly");
    return;
  }

  let months = years * 12;
  let monthlyRate = rate / 12 / 100;

  let futureValue =
    monthly *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  let investedAmount = monthly * months;
  let returns = futureValue - investedAmount;

  document.getElementById("invested").innerText = investedAmount.toFixed(2);
  document.getElementById("returns").innerText = returns.toFixed(2);
  document.getElementById("total").innerText = futureValue.toFixed(2);
}
