  // array.push(eachOutput);
// UI Logic
//  function handleFormSubmition(event) {
  //    event.preventDefault();
  //  }


window.addEventListener("load", function() {
  const form = document.getElementById("players");
  // const roll = document.querySelector("name#roll");
  // document.addEventListener("click", diceRandomizer())
  let array = []
  roundData(array);
})


//Business Logic

function Player1(player1Name, player1Round, player1Total) {
  this.player1Name = player1Name;
  this.player1Round = player1Round;
  this.player1Total = player1Total;
  
}
  function Player2(player2Name, player2Round, player2Total) {
    this.player2Name = player2Name;
    this.player2Round = player2Round;
    this.player2Total = player2Total;
}

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





  
  
