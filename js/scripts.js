  // array.push(eachOutput);
// UI Logic
//  function handleFormSubmition(event) {
  //    event.preventDefault();
  //  }


window.addEventListener("load", function() {
  console.log("hello");
  const form = document.getElementById("players");
  console.log(form);
  let array = []
  roundData(array);
  console.log(array);
})


//Business Logic

function players(name) {
  if (name.length === 0 || name.trim().length === 0) {
    return false;
  }
  return name;
}

function diceRandomizer() {
  const output = Math.floor(Math.random() * 6) + 1;
  if (output === 1) {
    return "statement"
  }
  return output
}

function roundData(array) {
  array.push(diceRandomizer());
  return array
  };





  
  
