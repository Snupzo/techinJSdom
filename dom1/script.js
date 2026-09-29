let colorBox = document.getElementById("colorBox");

document.addEventListener("click", (event) => {
  //Blue button per ID
  let buttons = document.querySelectorAll("button");
  if (event.target.matches("#blue")) {
    if (colorBox.style.backgroundColor === "blue") {
      colorBox.style.backgroundColor = "white";
    } else {
      colorBox.style.backgroundColor = "blue";
      buttons.forEach((button) => button.classList.remove("selected"));
      event.target.classList.add("selected");
    }
  }
  // Green button per ID
  if (event.target.matches("#green")) {
    if (colorBox.style.backgroundColor === "green") {
      colorBox.style.backgroundColor = "white";
    } else {
      colorBox.style.backgroundColor = "green";
      buttons.forEach((button) => button.classList.remove("selected"));
      event.target.classList.add("selected");
    }
  }
  // Pink button per ID
  if (event.target.matches("#pink")) {
    if (colorBox.style.backgroundColor === "pink") {
      colorBox.style.backgroundColor = "white";
    } else {
      colorBox.style.backgroundColor = "pink";
      buttons.forEach((button) => button.classList.remove("selected"));
      event.target.classList.add("selected");
    }
  }
  if (colorBox.style.backgroundColor === "white") {
    buttons.forEach((button) => button.classList.remove("selected"));
  }
});
