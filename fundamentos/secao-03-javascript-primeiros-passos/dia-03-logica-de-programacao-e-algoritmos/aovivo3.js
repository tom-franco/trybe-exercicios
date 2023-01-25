
let escolhaPlayer1 = 'papel'
let escolhaPlayer2 = 'tesoura'

if (escolhaPlayer1 === escolhaPlayer2) {
     console.log('A Ties')
} else if ((escolhaPlayer1 === 'pedra' && escolhaPlayer2 === 'tesoura') ||
     (escolhaPlayer1 === 'papel' && escolhaPlayer2 === 'pedra') ||
     (escolhaPlayer1 === 'tesoura' && escolhaPlayer2 === 'papel')) {
console.log('Player 1 won');
} else {
     console.log('Player 2 won')
}

// pode ser feito assim tambem

if (escolhaPlayer1 === escolhaPlayer2) {
    console.log('A Ties')
} else if (escolhaPlayer1 === 'pedra' && escolhaPlayer2 === 'tesoura') {
    console.log('Player 1 won');
} else if (escolhaPlayer1 === 'papel' && escolhaPlayer2 === 'pedra') {
    console.log('Player 1 won');
} else if (escolhaPlayer1 === 'tesoura' && escolhaPlayer2 === 'papel') {
    console.log('Player 1 won');
} else {
    console.log('Player 2 won');
}