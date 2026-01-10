function calculateGST() {
  let amount = parseFloat(document.getElementById("amount").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let type = document.getElementById("type").value;

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  let gstAmount = 0;
  let totalAmount = 0;

  if (type === "exclusive") {
    gstAmount = (amount * rate) / 100;
    totalAmount = amount + gstAmount;
  } else {
    gstAmount = amount - (amount * 100) / (100 + rate);
    totalAmount = amount;
  }

  document.getElementById("gst").innerText = gstAmount.toFixed(2);
  document.getElementById("total").innerText = totalAmount.toFixed(2);
}
