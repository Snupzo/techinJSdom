// Click listeners
document.addEventListener("click", (e) => {
  // Task 2 to change paragraph texts to green
  if (e.target.matches("#task2-btn")) {
    document.querySelectorAll("p").forEach((p) => {
      p.style.color === "green"
        ? (p.style.color = "")
        : (p.style.color = "green");
    });
  }
  // Task 3 to center the first header
  if (e.target.matches("#task3-btn")) {
    document.querySelector("h1").style.textAlign === "center"
      ? (document.querySelector("h1").style.textAlign = "")
      : (document.querySelector("h1").style.textAlign = "center");
  }
  // Task 4 to change the class="title" font size to 30px
  if (e.target.matches("#task4-btn")) {
    document.querySelectorAll(".title").forEach((title) => {
      title.style.fontSize === "30px"
        ? (title.style.fontSize = "")
        : (title.style.fontSize = "30px");
    });
  }
  // Task 5 to change image source and alternate
  if (e.target.matches("#task5-btn")) {
    document.querySelectorAll("img").forEach((img) => {
      img.src =
        img.getAttribute("src") === "img/img1.jpg"
          ? (img.src =
              "https://1000logos.net/wp-content/uploads/2017/03/Symbol-Linux.jpg")
          : (img.src = "img/img1.jpg");
      img.alt =
        img.getAttribute("alt") === "Task 5 Image"
          ? (img.alt = "Task 5 alt URL")
          : (img.alt = "Task 5 Image");
    });
  }
  // Task 7 to replace inner HTML of a <section> with new heading and <p>
  if (e.target.matches("#task7-btn")) {
    // Delete everything within <section> by setting innerHTML
    document.getElementById("task7").innerHTML = "";
    // Create nodes for both. Can't use same text node twice!!!
    let pText = document.createTextNode("This is new task 7");
    let hText = document.createTextNode("This is new task 7");
    let paragraph = document.createElement("p");
    let header = document.createElement("h2");
    paragraph.appendChild(pText);
    header.appendChild(hText);
    document.getElementById("task7").append(header, paragraph);
  }
  // Task 8 to wrap existing <p> element's content in <strong> tag
  if (e.target.matches("#task8-btn")) {
    document.querySelectorAll("p").forEach(p=>{
        p.innerHTML = `<strong>${p.innerHTML}</strong>`;
    })
  }
  // Task 9 to change background color and border of all elements with class "card"
  if(e.target.matches("#task9-btn")){
    document.querySelectorAll(".card").forEach(task9=>{
        task9.style.backgroundColor === "red"
        ? task9.style.backgroundColor = ""
        : task9.style.backgroundColor = "red";
        // forgot to set the border or size of it...
        task9.style.borderColor === "blue"
        ? task9.style.borderColor = ""
        : task9.style.borderColor = "blue"
    })
  }
  // Task 10 is to add a lint inside <footer> by setting innerHTML
  if(e.target.matches("#task10-btn")){
    document.querySelector("footer").innerHTML = "<a href='https://github.com/Snupzo/techinJSdom'>Visit my GitHub</a>";
  }
});

// Task 1, hover over.
let task1 = document.getElementById("task1")
task1.addEventListener("mouseover", (e)=>{
        task1.style.backgroundColor = "lightblue"
})
task1.addEventListener("mouseout", (e)=>{
        task1.style.backgroundColor = ""
})

// Task 6

let task6 = document.getElementById("task6")
task6.addEventListener("mouseover", (e)=>{
    task6.title = "Hover tooltip"
})