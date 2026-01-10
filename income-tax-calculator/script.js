function calculateTax() {
  let income = parseFloat(document.getElementById("income").value);
  let deductions = parseFloat(document.getElementById("deductions").value) || 0;
  let regime = document.getElementById("regime").value;

  if (!income || income <= 0) {
    alert("Please enter valid income");
    return;
  }

  let taxableIncome = income;
  let tax = 0;

  if (regime === "old") {
    taxableIncome = income - deductions;

    if (taxableIncome <= 250000) tax = 0;
    else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
    else if (taxableIncome <= 1000000)
      tax = 12500 + (taxableIncome - 500000) * 0.2;
    else
      tax = 112500 + (taxableIncome - 1000000) * 0.3;

  } else {
    // New Regime (simplified)
    if (taxableIncome <= 300000) tax = 0;
    else if (taxableIncome <= 600000) tax = (taxableIncome - 300000) * 0.05;
    else if (taxableIncome <= 900000)
      tax = 15000 + (taxableIncome - 600000) * 0.1;
    else if (taxableIncome <= 1200000)
      tax = 45000 + (taxableIncome - 900000) * 0.15;
    else if (taxableIncome <= 1500000)
      tax = 90000 + (taxableIncome - 1200000) * 0.2;
    else
      tax = 150000 + (taxableIncome - 1500000) * 0.3;
  }

  document.getElementById("taxable").innerText = Math.max(taxableIncome, 0).toFixed(2);
  document.getElementById("tax").innerText = tax.toFixed(2);
}
