//Business Logic

function players(name) {
  if (name.length === 0 || name.trim().length === 0) {
    return false;
  }
  return name;
}

function diceRandomizer(min, max) {
  return Math.floor(Math.random() * (min + max) + 1);
}



// UI Logic
