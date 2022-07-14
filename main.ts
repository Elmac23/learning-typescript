const inputOne = document.querySelector("#input1") as HTMLInputElement;
const inputTwo = document.querySelector("#input2") as HTMLInputElement;
const button = document.querySelector("button");
const result = document.querySelector("#result");

const handleClick = (num1: number, num2: number): number => num1 + num2;

button?.addEventListener("click", () => {
  console.log(handleClick(+inputOne.value, +inputTwo.value) + "");

  if (result) {
    result.textContent = handleClick(+inputOne.value, +inputTwo.value) + "";
  } else {
    alert("hehehe");
  }
});
