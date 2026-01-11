function calculateFD() {
  let P = +document.getElementById("amount").value;
  let R = +document.getElementById("rate").value / 100;
  let T = +document.getElementById("years").value;

  if (!P || !R || !T) return alert("Enter all values");

  let A = P * Math.pow(1 + R, T);
  document.getElementById("maturity").innerText = A.toFixed(2);
  document.getElementById("interest").innerText = (A - P).toFixed(2);
}
