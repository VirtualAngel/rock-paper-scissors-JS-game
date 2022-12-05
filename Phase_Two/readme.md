Rock, Paper, Scissors Game
Phase Two

Score Keeper portion from freecodecamp's YouTube: Learn JavaScript by Building 7 Games - Full Course
    https://www.youtube.com/watch?v=jaVNP3nIAv0&list=PLI6QOseMfHpd5CCOOb4nm3gsNg1omWlA5&index=2
    Web Development Tutorial - JavaScript, HTML, CSS - Rock Paper Scissors Game


You'll use:
    HTML
    CSS
    JavaScript:
        .getElementById()
        .querySelector


This project will have three phases:
    Phase One: HTML and JS (Can set up some CSS classes if you want)
    Phase Two: Add a score keeper
    Phase Three: CSS (Design and Styling)

***///*** Work off of your code from Phase One ***///***


HTML
1. Refer to your design. In that section, create an HTML div with a class for the scoreboard. ie) div class="scoreboard"
2. Within the new div, create two new divs. One will be for the User Score, the other for the Computer Score. 
    i. Give them classes for later CSS styling
    ii. It should look something like this:
            <h2 class="scoreboard-title">Score</h2>
            <div class="player-label">Player:
            </div>
            <div class="computer-label">Computer:
            </div>   
    
    
3. After each of the divs for player score and computer score, place a span element (total of two) and set them to 0. Then, give them an ID that will later be used for the scores in JavaScript:
        <section class="scoreboard">
            <h2 class="scoreboard-title">Score:</h2>
            <div class="player-label">Player:
                <div class="player-score-box">
                    <span id="user-score">0</span>
                </div>
            </div>
            <div class="computer-label">Computer:
                <div class="computer-score-box">
                    <span id="computer-score">0</span>
                </div>
            </div>            
        </section>

4. Test that everything still works before we move onto the JavaScript portion.

JS:
5. Below the other variables in your JavaScript file, create two more for User Score and Computer Score. Set them equal to zero (because this is the values where the scoreboard will start). Make sure you use let instead of const as these numbers will change!
    ie) 

        let userScore = 0
        let computerScore = 0

6. Pull in the ID's you created for the Player Score and Computer score (in the spans) by setting new variables and using document.getElementByID. This will show it to the DOM (page).
    ie) 

        const userScore_span = document.getElementById("user-score");
        const userComputer_span = document.getElementById("computer-score");

7. Set a new variable for your scoreboard class. Use the document.querySelector for this.
    ie) 

        const scoreBoard_section = document.querySelector('.scoreboard');
8. Create a function called "win" below the possible choices function.
    i. Make the score increment by one if the user wins:

        function win() {
            userScore++;
        } 
    ii. Within the win/loss if statements from Phase One, bring in the new "win" function wins:
     
        if (computerChoice === 'Rock' && userChoice === 'Paper') {
            win();
            result='You win!'
        }
    iii. Test the code in the console to make sure wins are being logged:

            function win() {
                console.log("Win");
            }
    iv. Repeat these steps for lose and draw. Keep these functions empty as they'll have different logic applied to them.
9. 