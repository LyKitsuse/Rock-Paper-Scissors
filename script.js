// Simulates the Bot's Choices
function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  if (rng === 0) {
    return "rock";
  }
  else if (rng === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

// Simulates every Round
function playRound(player, bot) {
  // Rock > Paper > Scissors > Rock...
  if (player == 'rock') {
    if (bot == 'paper') {
      alert("Bot Wins");
      console.log("Rock < Paper");
    } 
    else if (bot == 'scissors') {
      alert("Player Wins");
      console.log("Rock > Scissors");
    }
    else {
      alert("Tie");
      console.log("Rock == Rock");
    }
  }
  else if (player == 'paper') {
    if (bot == 'rock') {
      alert("Player Wins");
      console.log("Paper > Rock");
    }
    else if (bot == 'scissors') {
      alert("Bot Wins");
      console.log("Paper < Scissors");
    }
    else {
      alert("Tie");
      console.log("Paper == Paper");
    }
  }
  else {
    if (bot == 'rock') {
      alert("Bot Wins");
      console.log("Rock > Scissors");
    }
    else if (bot == 'paper') {
      alert("Player Wins");
      console.log("Paper < Scissors");
    }
    else {
      alert("Tie");
      console.log("Scissors == Scissors");
    }
  }
}

// Plays the Rounds
function game(computerSelection) {
  let input = '';
  input = prompt("Rock, Paper, Scissors (type Cancel to Exit)");
  if (input.toLowerCase() == 'rock' || input.toLowerCase() == 'paper' || input.toLowerCase() == 'scissors') {
    playRound(input, computerSelection);
  }
  else {
    alert("Invalid or Wrong Spelling!");
  }
}

for (let i = 0; i < 5; i++) {
  game(getComputerChoice());
}
