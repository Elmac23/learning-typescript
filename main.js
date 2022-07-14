var inputOne = document.querySelector("#input1");
var inputTwo = document.querySelector("#input2");
var button = document.querySelector("button");
var result = document.querySelector("#result");
var handleClick = function (num1, num2) { return num1 + num2; };
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(handleClick(+inputOne.value, +inputTwo.value) + "");
    if (result) {
        result.textContent = handleClick(+inputOne.value, +inputTwo.value) + "";
    }
    else {
        alert("hehehe");
    }
});
