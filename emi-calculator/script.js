function calculateEMI() {
  let P = parseFloat(document.getElementById("amount").value);
  let R = parseFloat(document.getElementById("rate").value) / 12 / 100;
  let N = parseFloat(document.getElementById("years").value) * 12;

  if (!P || !R || !N) {
    alert("Please enter all values");
    return;
  }

  let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  let totalPayment = EMI * N;
  let totalInterest = totalPayment - P;

  document.getElementById("emi").innerText = EMI.toFixed(2);
  document.getElementById("interest").innerText = totalInterest.toFixed(2);
  document.getElementById("total").innerText = totalPayment.toFixed(2);
}
