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



