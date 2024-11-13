let number = 10;

function main(number) {
  let num = number;
  function closureFunction() {
    console.log("number : " + num); //num will store on the closure, so from there we using it.
  }
  return closureFunction;
}

let fun = main(number);
fun();


let array = [
  {
    value: "One",
    message: "one welcome",
  },
  {
    value: "two",
    message: "two welcome",
  },
  {
    value: "three",
    message: "three welcome",
  },
];

function Main() {
  array.forEach((item) => {
    const bt = document.createElement("button");
    bt.innerHTML = item.value;
    bt.onclick = getCallBack(item.message); // Passing the callback
    document.body.appendChild(bt);
  });
}
function getCallBack(message) {
  console.log(message);

  return function () {
    alert(message); // Displaying the message when the button is clicked
  };
}
// Wait for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", Main);
