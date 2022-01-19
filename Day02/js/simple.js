const button = document.querySelector("button");
const input = document.querySelector("input");
let howManyClicks = 0; //create variable to hold number of clicks
button.addEventListener("click", function () {
  console.log(1);
  howManyClicks += 1;
  //   button.innerText = "you clicked me !";
  button.innerText = howManyClicks;

  button.style.backgroundColor = input.value;
});
