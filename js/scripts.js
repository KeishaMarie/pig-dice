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

total = 0;

function roundData(eachOutput) {
  array = [];
  array.forEach(function(round) {
    array.push(diceRandomizer())
    // total += output;
    console.log(array)
  })
}





// UI Logic
function handleFormSubmition(event) {
  event.preventDefualt
}
