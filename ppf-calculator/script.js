function calculatePPF() {
  let yearly = +document.getElementById("amount").value;
  let years = +document.getElementById("years").value;
  let rate = 0.071; // 7.1%

  if (!yearly || !years) return alert("Enter all values");

  let total = 0;
  for (let i = 0; i < years; i++) {
    total = (total + yearly) * (1 + rate);
  }

  document.getElementById("total").innerText = total.toFixed(2);
}
