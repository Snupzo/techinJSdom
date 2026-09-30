document.addEventListener("click", (event) => {
  if (event.target.matches("#change-title-btn")) {
    document.getElementById("main-title").innerHTML = "New amazing title";
  }
});
