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
  return output;
}

// UI Logic
