document.addEventListener("mouseover", (event) => {
  if (event.target.matches("#box")) {
    document.getElementById("box").style.backgroundColor = "yellow";
  } else {
    document.getElementById("box").style.backgroundColor = "";
  }
});
