document.addEventListener("click", (e) => {
  if (e.target.matches("#btn")) {
    let bill = document.getElementById("bill-input").value;
    let tip = document.getElementById("tip-input").value;
    let tipAmount = bill * (tip / 100);
    let total = +bill + +tipAmount;
    document.getElementById("tip-output").innerText = tipAmount;
    document.getElementById("total-output").innerText = total;
  }
});
