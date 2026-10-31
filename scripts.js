// Elementos da interface.
const choiceButtons = document.querySelectorAll(".choice");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const playerPlayElement = document.querySelector("#player-play");
const computerPlayElement = document.querySelector("#computer-play");
const resultElement = document.querySelector("#result");
const resultMessageElement = document.querySelector("#result-message");
const resetButton = document.querySelector("#reset-button");

// Estado da partida.
const choices = ["pedra", "papel", "tesoura"];

const symbols = {
  pedra: "✊",
  papel: "✋",
  tesoura: "✌️"
};

let playerScore = 0;
let computerScore = 0;

// Sorteia uma opção para o computador.
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determina o resultado comparando as duas escolhas.
function getRoundResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "empate";
  }

  const playerWins =
    (playerChoice === "pedra" && computerChoice === "tesoura") ||
    (playerChoice === "papel" && computerChoice === "pedra") ||
    (playerChoice === "tesoura" && computerChoice === "papel");

  return playerWins ? "vitoria" : "derrota";
}

// Atualiza o placar e as mensagens exibidas na página.
function updateInterface(playerChoice, computerChoice, roundResult) {
  playerPlayElement.textContent = symbols[playerChoice];
  computerPlayElement.textContent = symbols[computerChoice];

  resultElement.classList.remove(
    "result--win",
    "result--lose",
    "result--draw"
  );

  if (roundResult === "vitoria") {
    playerScore++;
    resultElement.textContent = "Você venceu!";
    resultElement.classList.add("result--win");
    resultMessageElement.textContent =
      `${playerChoice} vence ${computerChoice}. Boa jogada!`;
  } else if (roundResult === "derrota") {
    computerScore++;
    resultElement.textContent = "O computador venceu!";
    resultElement.classList.add("result--lose");
    resultMessageElement.textContent =
      `${computerChoice} vence ${playerChoice}. Tente novamente!`;
  } else {
    resultElement.textContent = "Empate!";
    resultElement.classList.add("result--draw");
    resultMessageElement.textContent =
      "As duas escolhas foram iguais. Jogue mais uma vez.";
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Executa uma rodada completa.
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const roundResult = getRoundResult(playerChoice, computerChoice);

  updateInterface(playerChoice, computerChoice, roundResult);
}

// Captura o evento de clique de cada opção.
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

// Reinicia o placar e restaura a mensagem inicial.
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  playerPlayElement.textContent = "?";
  computerPlayElement.textContent = "?";

  resultElement.textContent = "Faça sua escolha!";
  resultElement.classList.remove(
    "result--win",
    "result--lose",
    "result--draw"
  );

  resultMessageElement.textContent =
    "A primeira rodada está esperando por você.";
}

resetButton.addEventListener("click", resetGame);
