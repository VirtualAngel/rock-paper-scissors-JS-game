Rock, Paper, Scissors Game
Phase Two

Score Keeper portion from freecodecamp's YouTube: Learn JavaScript by Building 7 Games - Full Course
    https://www.youtube.com/watch?v=jaVNP3nIAv0&list=PLI6QOseMfHpd5CCOOb4nm3gsNg1omWlA5&index=2
    Web Development Tutorial - JavaScript, HTML, CSS - Rock Paper Scissors Game


You'll use:
    HTML
    CSS
    JavaScript:



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

            <span id="user-score">0</span>
            <span id="computer-score">0</span>

4. Test that everything still works before we move onto the JavaScript portion.

5. In your JavaScript file, create two constant variables and set them equal to zero (because this is the values where the scoreboard will start).
    ie) const userScore = 0
        const computerScore = 0

            
