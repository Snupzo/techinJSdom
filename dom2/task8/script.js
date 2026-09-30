document.addEventListener("input", (event) => {
  let count = event.target.value.length;
  document.getElementById("char-count").innerText = count;
});
