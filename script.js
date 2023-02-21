console.log("Welcome to my tic tac toe");
let turn = "X";

//function for change turn
const changeturn = () => {
  return turn === "X" ? "0" : "X";
};

console.log("Welcome to my tic tac toe");

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeturn();
      document.getElementsByTagName("b")[0].innerText = turn;
    }
  });
});
