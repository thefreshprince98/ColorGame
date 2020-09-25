let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

var change = document.querySelectorAll(".boxes");
for (let index = 0; index < change.length; index++) {
  change[index].style.backgroundColor = colors[index];
}
