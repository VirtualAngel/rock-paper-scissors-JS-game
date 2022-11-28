From Ania Kubów's YouTube: Learn JavaScript by Building 7 Games - Full Course
    https://www.youtube.com/watch?v=ec8vSKJuZTk&list=PLI6QOseMfHpd5CCOOb4nm3gsNg1omWlA5&index=3&t=8341s
    Learn JavaScript Methods and Properties
    Rock, Paper, Scissors Game

You'll use:
    .getElementById()
    .querySelectorAll()
    .forEach()
    .addEventListener()
    .innerHTML
    e.target.id
    Math.floor()
    Math.random()

This project will have three phases:
    Phase One: HTML and JS (Can set up some CSS classes if you want)
    Phase Two: CSS (Design and Styling)
    Phase Three: Add a score keeper

1. Create html, css, and js files.
    A. Set up Boiler Plate for HTML
    B. (optional) Link CSS file in HTML file
    C. Link JS file in HTML file (before the /body tag)

2. HTML:
    A. Create 3 h2s for a computer player, a user player, and the results. For example:
        i. Computer Choice: 
        ii. User Choice:
        iii. Result:
    B. Before the </h2> tag, create spans that'll have ids that can be called in the JS file later:
        i. <span id ="computer-choice"></span>
        ii. <span id ="user-choice"></span>
        iii. <span id ="result"></span>
    C. (optional) You can add sections, containers, and classes to style the page better with HTML and CSS.
    D. Below the choices, create three buttons for Rock, Paper, and Scissors.
        i. Add id tags for each button
        ii. You can add a class to style the buttons in CSS
    E. If you chose not to style your page, it should look something like this: 
        ![Alt text](../../../../C:/JS%20Learning/7%20JS%20Games/Rock-Paper-Scissors(Tutorial)/images/HTML_Screenshot1.png)
       
3. JS:
    Create some logic so that whatever choice is picked (button clicked), it'll display next to the top portion of the HTML (Computer Choice, User Choice, and Result).
    
    First, the User choice:
    A. Start picking out all of the elements in the HTML file by the id that was created and declare a constant keyword (or value):

        const computerChoiceDisplay = document.getElementById('computer-choice')
        const userChoiceDisplay = document.getElementById('user-choice')
        const resultDisplay = document.getElementById('result')

    B. Use querySelectorAll to grab all of the button elements. Declare a constant keyword (or value)
        (Note: Don't use this if you plan on adding more buttons.)
        
        const possibleChoices = document.querySelectorAll('button')

    C. Grab the buttons:
        i. Call in the querySelectorAll keyword you instantiated above (the const value) and use .forEach

                possibleChoices.forEach()
       ii. Set a keyword/value for possible choice (or possible Button if choices/choice becomes confusing)
            
                possibleChoices.forEach(buttonChoice)
       iii. add an event listener for click (so something happens whenever you press a button) and pass in an event - (e) - listener
            
                possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e)
       iv. add in a function 
            a. You'll want to target the id: 
                e.target.id
            b. allow for userChoice to be used globally:
                let  userChoice
            c. and call it into your function:
                userChoice = e.target.id
            d. Call in userChoiceDisplay and use an innerHTML to set it to userChoice:
                userChoiceDisplay.innerHTML = userChoice
        v. The code should look something like this:

                const computerChoiceDisplay = document.getElementById('computer-choice')
                const userChoiceDisplay = document.getElementById('user-choice')
                const resultDisplay = document.getElementById('result')
                const possibleChoices = document.querySelectorAll('button')
                let userChoice

                possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
                    userChoice = e.target.id
                    userChoiceDisplay.innerHTML = userChoice
                }))
       vi. Save your changes, refresh your browser page, and test that the values are being displayed after User Choice on screen.

    Second, we will set up the computer's choices.
    A. Under userChoiceDisplay.innerHTML = userChoice, generate the computer choice to later pass in as a function:
        generateComputerChoice()
    B. Below the possibleChoices function, create the generate computer choice function.
    C. We'll want a random number to be choses for the computer. So, within the generateComputerChoice function, set a const randomNumber value as a Math.random() * possibleChoices.length. (You could use the number 3 instead of possibleChoices.length, but what fun would that be?):

            function generateComputerChoice() {
                const randomNumber = Math.random() * possibleChoices.length
            }
    D. Wrap it in Math.floor to round down the random number to a full integer: 
        
            function generateComputerChoice() {
                const randomNumber = Math.floor(Math.random() * possibleChoices.length)
            }
    E. You can add + 1 to the end of your math declaration, so the array count starts at 1 and not zero:
            
            function generateComputerChoice() {
            const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
            }
    F. console.log the randomNumber to make sure everything is working correctly. No matter the button clicked, the computer's choices should be a random, whole integer - either a 1, 2, or 3.
    G. Set a global value for computerChoice below the other values:
        let computerChoice
    H. Call computerChoice into your function as an if statement. Use a deep equal === to set the numbers to choices:
        
            if (randomNumber === 1) {
                computerChoice = 'Rock'
            }
            if (randomNumber === 2) {
                computerChoice = 'Paper'
            }
            if (randomNumber === 3) {
                computerChoice = 'Scissors'
            }
    I. Next, call in computerChoiceDisplay and use an innerHTML to set it to userChoice:
                computerChoiceDisplay.innerHTML = computerChoice
        At this point the full code should look something like this (if you're not using a ternary operator):

            const computerChoiceDisplay = document.getElementById('computer-choice')
            const userChoiceDisplay = document.getElementById('user-choice')
            const resultDisplay = document.getElementById('result')
            const possibleChoices = document.querySelectorAll('button')
            let userChoice
            let computerChoice
            
            possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
                userChoice = e.target.id
                userChoiceDisplay.innerHTML = userChoice
                generateComputerChoice()
                }))

            function generateComputerChoice() {
                const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
                console.log(randomNumber) //this can be deleted after you run your tests

                if (randomNumber === 1) {
                    computerChoice = 'Rock'
                }
                if (randomNumber === 2) {
                    computerChoice = 'Paper'
                }
                if (randomNumber === 3) {
                    computerChoice = 'Scissors'
                }

                computerChoiceDisplay.innerHTML = computerChoice
            }
    J. Save your changes, refresh your browser page, and test that the values are being displayed after Computer and User Choice on screen.

    Third, it's time for the results!
    A. Create a new function called getResult:

        function getResult() {
        }
    B. Call in an if statement for computerChoice deeply equaling userChoice:

        if (computerChoice === userChoice) {

        }
    C. Set a global value for result:
        let result
    D. Call in the result value with a string saying, "You've tied!" or "It's a draw!"
        result = 'You've tied with the computer!'
            The whole function should look like this:

                function getResult() {
                    if (computerChoice === userChoice) {
                        result='You\'ve tied with the computer!' //Don't forget to use your escapes when there's an apostrophe!
                    }
                }
    E. Other if statements should set what choice wins/loses.
        For example:

                 if (computerChoice === 'Rock' && userChoice === 'Paper') {
                    result='You win!'
                }
    F. Copy the function getResult() and place it after generateComputerChoice in the possibleChoices function.
            getResult()
    G. At the end of your getResult function, call in the innerHTML so it displays in the browser: 
            resultDisplay.innerHTML = computerChoice
        The whole code should look like this:
            
            const computerChoiceDisplay = document.getElementById('computer-choice')
            const userChoiceDisplay = document.getElementById('user-choice')
            const resultDisplay = document.getElementById('result')
            const possibleChoices = document.querySelectorAll('button')

            let userChoice
            let computerChoice
            let result

            possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
                userChoice = e.target.id
                userChoiceDisplay.innerHTML = userChoice
                generateComputerChoice()
                getResult()
            }))

            function generateComputerChoice() {
                const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
                console.log(randomNumber)

                if (randomNumber === 1) {
                    computerChoice = 'Rock'
                }
                if (randomNumber === 2) {
                    computerChoice = 'Paper'
                }
                if (randomNumber === 3) {
                 computerChoice = 'Scissors'
                }

                computerChoiceDisplay.innerHTML = computerChoice
            }

            function getResult() {
                if (computerChoice === userChoice) {
                    result='You\'ve tied with the computer!'
                }
                if (computerChoice === 'Rock' && userChoice === 'Paper') {
                    result='You win!'
                }
                if (computerChoice === 'Rock' && userChoice === 'Scissors') {
                    result='You Lose!'
                }
                if (computerChoice === 'Paper' && userChoice === 'Rock') {
                    result='You lose!'
                }
                if (computerChoice === 'Paper' && userChoice === 'Scissors') {
                 result='You win!'
                }
                if (computerChoice === 'Scissors' && userChoice === 'Rock') {
                    result='You win!'
                }
                if (computerChoice === 'Scissors' && userChoice === 'Paper') {
                    result='You lose!'
                }
                resultDisplay.innerHTML = result
            }
    G. Save your changes, refresh your browser page, and test that the values are being displayed after Computer and User Choice on screen.

4. Now see if you can code it yourself from scratch. This tutorial will be here if you get stuck!