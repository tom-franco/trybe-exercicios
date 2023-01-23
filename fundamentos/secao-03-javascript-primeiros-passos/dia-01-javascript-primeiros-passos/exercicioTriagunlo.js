const lado1 = 30
const lado2 = 40
const lado3 = 50

if (lado1 + lado2 + lado3 == 180) {
    console.log('É um triangulo')
}
else if (lado1 + lado2 + lado3 !== 180) {
    console.group('Não é um triangulo')
}
else {
    console.log(Invalido)
}
