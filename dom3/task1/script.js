let clickCount = 0;

document.addEventListener("click", (event) => {
  if (event.target.matches("#clicker")) {
    clickCount++;
  }
  document.getElementById("click-count").innerText = clickCount;
});
