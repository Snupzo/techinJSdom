document.addEventListener("click", (event) => {
  let picture = document.getElementById("preview");
  let current = document.getElementById("preview").getAttribute("src");
  if (event.target.matches("#change-img-btn")) {
    if (current === "images/img1.jpg") {
      picture.setAttribute("src", "images/img2.jpg");
      picture.setAttribute("alt", "Second image");
    } else {
      picture.setAttribute("src", "images/img1.jpg");
      picture.setAttribute("alt", "First image");
    }
  }
});
