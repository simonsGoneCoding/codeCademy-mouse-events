// These variables store the boxes on the side
let itemOne = document.getElementById("list-item-one");
let itemTwo = document.getElementById("list-item-two");
let itemThree = document.getElementById("list-item-three");
let itemFour = document.getElementById("list-item-four");
let itemFive = document.getElementById("list-item-five");
let resetButton = document.getElementById("reset-button");

// increase width of first item
function increaseWidth(event) {
  event.target.style.width = "500px";
}
itemOne.onmouseover = increaseWidth;

// change color on mouse button release
function changeColor(e) {
  e.target.style.backgroundColor = "red";
}
itemTwo.onmouseup = changeColor;

//change text after coursor leaves the box
function textChange(e) {
  e.target.innerHTML = "The mouse has left the element";
}
itemThree.onmouseleave = textChange;

//reveal fifth box after click on forth item
function reaveal() {
  itemFive.style.display = "block";
}
itemFour.onclick = reaveal;

//reset function
function reset() {
  itemOne.style.width = "";
  itemTwo.style.backgroundColor = "";
  itemThree.innerHTML = "The mouse must leave the box to change the text";
  itemFive.style.display = "none";
}

resetButton.onclick = reset;
