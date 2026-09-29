let colorBox = document.getElementById("colorBox");
let buttons = document.querySelectorAll("button");

document.addEventListener("click", (event) => {
  let targetColor = event.target.id;
  // first remove all classes
  if (["blue", "green", "pink"].includes(targetColor)) {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    // second change color and add class if it's color
    if (colorBox.style.backgroundColor === targetColor) {
      colorBox.style.backgroundColor = "white";
    } else {
      colorBox.style.backgroundColor = targetColor;
      event.target.classList.add("selected");
    }
  }
});
