function calculateEligibility() {
  let income = parseFloat(document.getElementById("income").value);
  let expenses = parseFloat(document.getElementById("expenses").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let years = parseFloat(document.getElementById("years").value);

  if (!income || !rate || !years) {
    alert("Please enter all required values");
    return;
  }

  let surplus = income - (expenses || 0);

  if (surplus <= 0) {
    alert("Expenses cannot be greater than income");
    return;
  }

  // Assume 50% of surplus can be used as EMI
  let eligibleEMI = surplus * 0.5;

  let monthlyRate = rate / 12 / 100;
  let months = years * 12;

  let loanAmount =
    eligibleEMI *
    ((Math.pow(1 + monthlyRate, months) - 1) /
      (monthlyRate * Math.pow(1 + monthlyRate, months)));

  document.getElementById("emi").innerText = eligibleEMI.toFixed(2);
  document.getElementById("loan").innerText = loanAmount.toFixed(2);
}
