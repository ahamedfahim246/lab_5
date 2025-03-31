function Wordle() {
    // Get the value from the input field
    var userInput = document.getElementById("userInput").value.toUpperCase(); // Convert input to uppercase for consistency
    
    // Display the value in the output paragraph
    document.getElementById("output").innerHTML = "Your Guess: " + userInput + "!";
    let num_guesses = 0;
    let Word = "CRAZE";
    let guess = userInput;
    let output = "";
    let duplicate = "";
    document.getElementById("word").innerText = "";

    // Check if the guess is the correct word
    if (guess === Word) {
        document.getElementById("check").innerHTML = "You Win!";
        output = "";
    } else if (guess.length !== Word.length) {
        // Check if the length matches the target word length
        document.getElementById("check").innerHTML = "Try Again! (Word must have " + Word.length + " letters)";
    } else {
        document.getElementById("check").innerHTML = "Try Again!";
        output += "[";
        for (let i = 0; i < userInput.length; i++) {
            // if(i == 0){output += "First";}
            // if(i == 1){output += "Second";}
            // if(i == 2){output += "Third"}
            // if(i == 3){output += "Fourth";}
            // if(i == 4){output += "Fifth";}
            if (userInput[i] === Word[i]) {
                output += " 2 ";
                
            } else if (Word.includes(userInput[i]) && userInput[i] !== Word[i] && !duplicate.includes(userInput[i])) {
                output += " 1 ";
                duplicate += userInput[i];
                
            }
            else {
                output += " 0 ";
            }
            if(i !== 4){output += ", ";}
        }

    output += "]";
        // Display the result
        document.getElementById("word").innerText = output;
    }
}
