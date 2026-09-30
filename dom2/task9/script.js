document.querySelectorAll(".tab").forEach((tab) => {
  tab.classList.add("hidden");
});

document.addEventListener("click", (event) => {
  if (event.target.matches(".tab-btn")) {
    if (event.target.dataset.target === "tab1") {
      document.getElementById("tab1").classList.remove("hidden");
      document.getElementById("tab2").classList.add("hidden");
    } else if (event.target.dataset.target === "tab2") {
      document.getElementById("tab2").classList.remove("hidden");
      document.getElementById("tab1").classList.add("hidden");
    }
  }
});
