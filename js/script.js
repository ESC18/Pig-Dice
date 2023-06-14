function rollDie() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    return randomNumber;
}

function updateRunningTotal() {
    let randomNumber = rollDie();
    if (randomNumber !== 1)
        controller.runningTotal += randomNumber;
    else 
        controller.runningTotal = 0;
    return randomNumber;
}

function updateScore() {
    controller.players[controller.activePlayer] += controller.runningTotal;
    controller.runningTotal = 0;
}

function switchPlayer(player) {
    if (player === 0)
        return 1;
    return 0;
}

const controller = {
    init: function () {
        this.activePlayer = 0;
        this.players = [0, 0];
        this.runningTotal = 0;
    },
    isThereWinner: function () {
        if (this.players[this.activePlayer] >= 100)
            return this.activePlayer;
        this.activePlayer = switchPlayer(this.activePlayer);
        return -1;
    }
}

/* UI logic */

window.onload = () => {
    const die = document.querySelector('.die');
    const winner = document.querySelector('.winner');
    const announcement = document.querySelector('.announcement');
    const player1 = document.querySelector('.score-1');
    const player2 = document.querySelector('.score-2');

    const displayScores = function () {
        player1.innerText = controller.players[0];
        player2.innerText = controller.players[1];
    }

    const switchActivePlayer = function (player1, player2) {
        if (player1.classList.contains('active')) {
            player1.classList.remove('active');
            player2.classList.add('active');
        }
        else {
            player2.classList.remove('active');
            player1.classList.add('active');
        }
    }

    const isEndGame = function () {
        const winner = controller.isThereWinner();
        if (winner > -1) {
            winner.classList.remove('hidden');
            announcement.innerText = 'The winner is player ' + (winner + 1);
        }
        else
            switchActivePlayer();
    }

    // Roll button
    document.querySelector('#roll-btn').addEventListener('click', () => {
        const n = updateRunningTotal();
        die.innerText = n;
        if (n === 1) {
            updateScore();
            displayScores();
            isEndGame();
        }
    });
    
    // Hold button
    document.querySelector('#hold-btn').addEventListener('click', () => {
        updateScore();
        displayScores();
        isEndGame();
    });

    // Restart button
    document.querySelector('#restart-btn').addEventListener('click', () => {
        controller.init();
        displayScores();
        announcement.innerText = '';
        winner.classList.add('hidden');
    })
}