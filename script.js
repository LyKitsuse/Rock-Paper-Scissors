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
  let final_result = document.querySelector("#final_result");
  // Rock > Paper > Scissors > Rock...
  if (player == 'rock') {
    if (bot == 'paper') {
      final_result.textContent = "Bot Wins!";
      console.log("Rock < Paper");
      return 0;
    } 
    else if (bot == 'scissors') {
      final_result.textContent = "Player Wins!";
      console.log("Rock > Scissors");
      return 1;
    }
    else {
      final_result.textContent = "Tie!";
      console.log("Rock == Rock");
      return 2;
    }
  }
  else if (player == 'paper') {
    if (bot == 'rock') {
      final_result.textContent = "Player Wins!";
      console.log("Paper > Rock");
      return 1;
    }
    else if (bot == 'scissors') {
      final_result.textContent = "Bot Wins!";
      console.log("Paper < Scissors");
      return 0;
    }
    else {
      final_result.textContent = "Tie!";
      console.log("Paper == Paper");
      return 2;
    }
  }
  else {
    if (bot == 'rock') {
      final_result.textContent = "Bot Wins!";
      console.log("Rock > Scissors");
      return 0;
    }
    else if (bot == 'paper') {
      final_result.textContent = "Player Wins!";
      console.log("Paper < Scissors");
      return 1;
    }
    else {
      final_result.textContent = "Tie!";
      console.log("Scissors == Scissors");
      return 2;
    }
  }
}

// Plays the Rounds
function game(computerSelection, input) {
  // For DOM Manip
  let globalPlayerScore = document.querySelector("#player_score");
  let globalBotScore = document.querySelector("#bot_score");
  if(parseInt(globalBotScore.textContent) < 5 && parseInt(globalPlayerScore.textContent) < 5){
    // Plays the Round everytime a button is clicked
    let scoreVerdict = playRound(input, computerSelection);
    // 1 Player win, 0 Bot Win
    if(scoreVerdict == 0) {
      globalBotScore.textContent = parseInt(globalBotScore.textContent) + 1;
    }
    else if(scoreVerdict == 1) {
      globalPlayerScore.textContent = parseInt(globalPlayerScore.textContent) + 1;
    }
    else {
      return;
    }
  }
}

function reset() {
  // For DOM Manip
  let globalPlayerScore = document.querySelector("#player_score");
  let globalBotScore = document.querySelector("#bot_score");
  globalPlayerScore.textContent = '0';
  globalBotScore.textContent = '0';
}

