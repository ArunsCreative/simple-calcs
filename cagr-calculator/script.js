function calculateCAGR() {
  let start = parseFloat(document.getElementById("start").value);
  let end = parseFloat(document.getElementById("end").value);
  let years = parseFloat(document.getElementById("years").value);

  if (!start || !end || !years || start <= 0) {
    alert("Please enter valid values");
    return;
  }

  let cagr = (Math.pow(end / start, 1 / years) - 1) * 100;
  document.getElementById("result").innerText = cagr.toFixed(2) + "%";
}
