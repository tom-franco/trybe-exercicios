let contadorDivisivel = 0;

for (let contador = 2; contador <= 150; contador += 1) {

if (contador % 3 === 0) {
    contadorDivisivel += 1;
    }
}

if (contadorDivisivel === 50) {
    console.log("Mensagem Secreta")
}