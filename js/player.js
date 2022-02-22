const activePlayer = document.querySelector('.player--active');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentPlayer = 0;

addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        currentPlayer = currentPlayer === 0 ? 1 : 0;
    }

    if (currentPlayer === 0) {
        player0El.classList.add("player--active--0");
        player1El.classList.remove("player--active--1");
    } else if (currentPlayer === 1) {
        player1El.classList.add("player--active--1");
        player0El.classList.remove("player--active--0");
    }

    console.log(currentPlayer);
});



