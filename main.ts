const inputOne = document.querySelector("#input1") as HTMLInputElement;
const inputTwo = document.querySelector("#input2") as HTMLInputElement;
const button = document.querySelector("button");
const result = document.querySelector("#result");

const handleClick = (num1: number, num2: number): number => num1 + num2;

button?.addEventListener("click", () => {
  console.log(handleClick(+inputOne.value, +inputTwo.value) + "");

  if (result) {
    result.textContent = handleClick(+inputOne.value, +inputTwo.value) + "";
    alert("stary na rowerku");
  } else {
    alert("hehehe");
  }
});

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function id<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    id = getRandomInt(50, 1000);
  };
}

function log(construtor: Function) {
  console.log(construtor);
  console.log("hej");
}

@log
@id
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const PersonOne = new Person("Andrew");

//console.log(PersonOne);
