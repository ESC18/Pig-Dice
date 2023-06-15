const controller = {
    activePlayer: 0,
    players: [0, 0],
    runningTotal: 0,
    winner: "",
    reset: function () {
        this.activePlayer = 0;
        this.players = [0, 0];
        this.runningTotal = 0;
        this.winner = "";
    }
};

function rollDie() {
    let r = Math.floor(Math.random() * 6 + 1);
    if (r === 1) {
        controller.runningTotal = 0;
        return true;
    }
    else {
        controller.runningTotal += r;
        return false;
    }
}

function endTurn() {
    controller.players[controller.activePlayer].score += controller.runningTotal;
    controller.runningTotal = 0;
    if (controller.players[controller.activePlayer].score >= 100)
        controller.winner = controller.activePlayer;
    else
        controller.activePlayer = Number(!controller.activePlayer);
}

function displayDie(n) {
    document.querySelector('.die').innerText = n;
}

function display() {
    document.querySelector
}

function displayWinner() {
    const winner = document.querySelector('.winner');
    const winnerNo = document.querySelector('.winner-name');
    if (controller.winner) {
        winner.classList.remove('hidden');
        winnerNo.innerText = controller.winner;
    }
    else
        winner.classList.add('hidden');
}

window.onload = () => {    
    document.querySelector('')

    document.querySelector('#roll-btn').addEventListener('click', () => {
        const r = controller.rollDie();
        displayDie();
        if (r)
            endTurn();
    });

    document.querySelector('#hold-btn').addEventListener('click', () => {
        endTurn();
    });

    document.querySelector('#restart-btn').addEventListener('click', () => {
        controller.reset();
        displayWinner();
    })
}

/*
Per turn:
Roll a die
Display die number
- check die number
  if die number is 1, end turn
  if die number is 2+, add to running total
- end turn
  add running total to player score
  check score
  if score is greater than or equal to 100, player wins
  else switch players
*/