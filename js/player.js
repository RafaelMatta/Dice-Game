const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('.current--0');
const current1El = document.querySelector('.current--1');
const controlEl = document.querySelector('.control');

const cScore0El = document.getElementById('current-score--0');
const cScore1El = document.getElementById('current-score--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const btnAgain = document.querySelector('.btn--again');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');


let score;
let isGameRunning;
let currentScore;
let currentPlayer;

const resetGame = function () {
    player0El.classList.remove('player__winner');
    player1El.classList.remove('player__winner');
    player0El.classList.add('player--active--0');
    player1El.classList.remove('player--active--1');
    current1El.classList.add('hidden');
    current0El.classList.remove('hidden');
    controlEl.classList.remove('control__switch');

    score = [0, 0];
    isGameRunning = true;
    currentScore = 0;
    currentPlayer = 0;

    cScore0El.textContent = 0;
    cScore1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
}

resetGame();

const switchPlayer = function () {
    player0El.classList.toggle('player--active--0');
    player1El.classList.toggle('player--active--1');
    current0El.classList.toggle('hidden');
    current1El.classList.toggle('hidden');
    controlEl.classList.toggle('control__switch');

    currentScore = 0;
    document.getElementById(`current-score--${currentPlayer}`).textContent = currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;

}


btnRoll.addEventListener('click', function () {
    if (isGameRunning) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `assets/dados/d-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current-score--${currentPlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (isGameRunning && document.getElementById(`current-score--${currentPlayer}`).textContent > 0) {
        score[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer];

        if (score[currentPlayer] >= 100) {
            isGameRunning = false;
            document
                .querySelector(`.player--${currentPlayer}`)
                .classList.add('player--winner');
        } else {
            switchPlayer();

        }

    }
});

btnAgain.addEventListener('click', function () {
    resetGame();
});

