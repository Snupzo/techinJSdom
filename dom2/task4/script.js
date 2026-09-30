//document.addEventListener("input", (event)=>{});
document.addEventListener("click", (event) => {
  let input = document.getElementById("item-input");
  if (event.target.matches("#add-item-btn")) {
    let list = document.getElementById("items");
    let newLine = document.createElement("li");
    if (input.value !== "") {
      newLine.textContent = input.value;
      list.appendChild(newLine);
      input.value = "";
    }
  }
});
