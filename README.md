### Gameplay
  * If the player rolls a 1, they score nothing and it becomes the next player's turn.
  * If the player rolls any other number, it is added to their turn total and the player's turn continues.
  * If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
  * The first player to score 100 or more points wins.
  * For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-6, after which she chooses to hold, and adds her turn total of 23 points to her score.


### Notes
  #### PLAY BUTTON
  * When user clicks play: generate a number & pig noise
  * when the user hits the play button a number between 1-6 will be generated
  * Math.floor(Math.random() * 6) + 1;
  
  #### KEY
  * The key is the variable that describes the kind of information to be stored.
  * The value is the specific value of the key.

  #### Info from user
  * Name Input in text box that connects to a score sheet for each player
  * Button click: generate number - displayed as a number
  * Option to 'HOLD' & 'ROLL AGAIN' - 
    -if user clicks HOLD then add rolled number to total
    -if user clicks ROLL AGAIN number is stored but not yet added until they roll a 1 or choose to HOLD
  * Display message when a 1 is rolled - maybe use window.alert

  #### Other Thoughts
  * Print number and change PLAYER total after user clicks 'Hold'
  * Print number and add it to ROUND total when user clicks 'Roll Again'
  * Remove ROUND total if they roll a 1 and no change to PLAYER total
  * EASY & HARD mode can be switched mid-game on the start of a players turn

### TDD

Describes: players()

Test: "It should return false when no information is inputted"
Code:
const name = ""
players(name)
Expexted Output: "false"


Test: "It should return false when user inputs spaces only"
Code: 
const name = "  "
players(name)
Expected Output: "false"


Describes: diceRandomizer()

Test: "It will output a random number between 1 and 6."
Code:
return Math.floor(Math.random() * (min+max) + 1);
Expected Output: 1-6

Test: "It should return "statement" when 1 is randomized"
Code:
if {output === 1
  return "statement"
}
Expected Output: "statement"

Test: "It should list the output of each roll via diceRandomizer()."
Code:
arrayOutput = array[output]
Expected Output: [rn, rn, rn,rn]


Description: Players ()

Test6: "It should put player1 information in a construct."
Code:
function Players()
Expected Output: player1Name, player1Round, player1Total.


TO DO
* Create arrayList for output
* push each new output into array
  array.push()
* Total of output array
  > const array = [0,1,2,3,4,5];
  > let sum = 0;
  > array.forEach(function(element) {
  sum += element;
  });
  > sum;
  15
* Every time 
* oldOuput + newOutput = PLAYER total  **(loop array)
  when output = 1, ROUND total = null
