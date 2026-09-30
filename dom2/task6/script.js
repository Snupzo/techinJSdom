document.addEventListener("click", (event) => {
  if (event.target.matches("#toggle-text-btn")) {
    document.getElementById("secret-text").classList.toggle("hidden");
  }
});
