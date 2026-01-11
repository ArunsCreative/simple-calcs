function calculateAge() {
  let dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    alert("Please select date of birth");
    return;
  }

  let dob = new Date(dobInput);
  let today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById("age").innerText = age;
}
