let box = document.getElementById("box");

box.addEventListener("mouseenter", (e) => {
  e.target.style.backgroundColor = "yellow";
});

box.addEventListener("mouseleave", (e) => {
  e.target.style.backgroundColor = "";
});
