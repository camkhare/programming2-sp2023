const select = document.getElementById("theme");
const html = document.querySelector("html");
const paragragh = document.getElementById("text")
const image = document.getElementById("image")

select.addEventListener("change", setTheme);

function setTheme() {
  if(select.value === "dark") {
    html.style.backgroundColor = "black";
    html.style.color = "white";
    paragragh.style.color = "white";
    image.style.height = "78px";
  }
  else if (select.value === "light") {
    html.style.backgroundColor = "white";
    html.style.color = "black";
    paragragh.style.color = "black";
    image.style.height = "78px";
  }
  else if (select.value === "poland") {
    html.style.backgroundColor = "red";
    html.style.color = "white";
    paragragh.style.color = "white";
    image.style.height = "78px";
  } 
  else if (select.value === "israel") {
    html.style.backgroundColor = "blue";
    html.style.color = "white";
    paragragh.style.color = "white";
    image.style.height = "78px";
  } 
  else if (select.value === "china") {
    html.style.backgroundColor = "red";
    html.style.color = "yellow";
    paragragh.style.color = "yellow";
    image.style.height = "78px";
  } 
}