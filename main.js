"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const button = document.querySelector("button");
const result = document.querySelector("#result");
const handleClick = (num1, num2) => num1 + num2;
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(handleClick(+inputOne.value, +inputTwo.value) + "");
    if (result) {
        result.textContent = handleClick(+inputOne.value, +inputTwo.value) + "";
        alert("stary na rowerku");
    }
    else {
        alert("hehehe");
    }
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function id(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.id = getRandomInt(50, 1000);
        }
    };
}
function log(construtor) {
    console.log(construtor);
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    log,
    id
], Person);
const PersonOne = new Person("Andrew");
//console.log(PersonOne);
