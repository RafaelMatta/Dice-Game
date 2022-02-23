const activePlayer = document.querySelector('.player--active');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('.current--0');
const current1El = document.querySelector('.current--1');

const currentActive = document.querySelector('current');

let currentPlayer = 0;

addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        currentPlayer = currentPlayer === 0 ? 1 : 0;
    }

    if (currentPlayer === 0) {
        player0El.classList.add('player--active--0');
        player1El.classList.remove('player--active--1');
        current0El.classList.add('current--active');
        current1El.classList.remove('current--active');

    } else if (currentPlayer === 1) {
        player1El.classList.add('player--active--1');
        player0El.classList.remove('player--active--0');
        current1El.classList.add('current--active');
        current0El.classList.remove('current--active');
    }

    console.log(currentPlayer);
});



