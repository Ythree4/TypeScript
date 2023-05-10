var inputOne = document.querySelector("#input1");
var inputTwo = document.querySelector("#input2");
var buttonOne = document.querySelector("button");
function addNumbers(num1, num2) {
    return num1 + num2;
}
buttonOne === null || buttonOne === void 0 ? void 0 : buttonOne.addEventListener("click", function () {
    console.log(addNumbers(+inputOne.value, +inputTwo.value));
});
