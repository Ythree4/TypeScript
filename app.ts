const inputOne = document.querySelector("#input1") as HTMLInputElement;
const inputTwo = document.querySelector("#input2") as HTMLInputElement;
const buttonOne = document.querySelector("button");

function addNumbers(num1:number,num2:number){
  return num1 + num2;
}

buttonOne?.addEventListener("click", ()=>{
  console.log(addNumbers(+inputOne.value,+inputTwo.value));
})
