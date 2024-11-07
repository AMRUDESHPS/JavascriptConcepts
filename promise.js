const Promise = require("Promise");

function asyncFunction() {
  return new Promise((resolve, reject) => {
    let state = false;
    setTimeout(() => {
      if (state) {
        resolve("SUCCESS");
      } else {
        reject("ERROR");
      }
    }, 2000);
  });
}

asyncFunction()
  .then((result) => {
    console.log(result);
  }) // promise on fulfill state
  .catch((error) => {
    console.log(error);
  }); // promise on rejected state

  let pending = asyncFunction();
  console.log(pending); //promise on pending state


