document.addEventListener("click", (event) => {
  if (event.target.matches("#toggle-theme-btn")) {
    document.getElementById("page").classList.toggle("dark");
  }
});
