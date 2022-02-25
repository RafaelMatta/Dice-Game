const activePlayer = document.querySelector('.player--active');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('.current--0');
const current1El = document.querySelector('.current--1');
const control0El = document.querySelector('.control--0');
const control1El = document.querySelector('.control--1');

const currentActive = document.querySelector('current');

let currentPlayer = 0;

addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        currentPlayer = currentPlayer === 0 ? 1 : 0;
    }

    player0El.classList.toggle('player--active--0');
    player1El.classList.toggle('player--active--1');
    current0El.classList.toggle('hidden');
    current1El.classList.toggle('hidden');
    control0El.classList.toggle('hidden');
    control1El.classList.toggle('hidden');

    console.log(currentPlayer);
});



