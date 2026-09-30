document.addEventListener("click", (event) => {
  if (event.target.matches("#highlight-btn")) {
    const list = document.querySelectorAll("ul > li");

    list.forEach((li) => {
      li.style.color = "red";
    });
  }
});
