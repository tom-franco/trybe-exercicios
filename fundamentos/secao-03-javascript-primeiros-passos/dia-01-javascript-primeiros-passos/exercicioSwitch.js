let xadrez = 'Rei';

switch (xadrez.toLowerCase()) {
    case 'dama':
    console.log('Anda pra onde quiser');
    break;
    case 'rei':
    console.log('Apenas uma casa para qualquer direção');
    break;
    case 'torre':
    console.log('Diagonal e horizontal');
    break;
    default:
    console.log('Erro, peça inválida!');
}