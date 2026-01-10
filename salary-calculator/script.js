function calculateSalary() {
  let ctc = parseFloat(document.getElementById("ctc").value);
  let pfRate = parseFloat(document.getElementById("pf").value);
  let pt = parseFloat(document.getElementById("pt").value);
  let esiApplicable = document.getElementById("esi").value;

  if (!ctc || ctc <= 0) {
    alert("Please enter a valid CTC");
    return;
  }

  let grossMonthly = ctc / 12;

  // PF (employee contribution)
  let pfDeduction = (grossMonthly * pfRate) / 100;

  // ESI (0.75% employee side if applicable)
  let esiDeduction = 0;
  if (esiApplicable === "yes") {
    esiDeduction = grossMonthly * 0.0075;
  }

  let totalDeductions = pfDeduction + pt + esiDeduction;
  let inHandSalary = grossMonthly - totalDeductions;

  document.getElementById("gross").innerText = grossMonthly.toFixed(2);
  document.getElementById("deductions").innerText = totalDeductions.toFixed(2);
  document.getElementById("inhand").innerText = inHandSalary.toFixed(2);
}
