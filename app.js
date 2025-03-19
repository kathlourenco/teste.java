alert("boas vindas ao jogo");
let numeroSecreto = 8;
console.log(numeroSecreto)
let chute = prompt("escolha um numero entre 1 e 10");

 
if (numeroSecreto == chute) {
alert(`voce descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert("Voce errou");
}

diaDaSemana = prompt("Qual é o dia da semana?");
if (diaDaSemana == 'sabado') {
    alert('bom fim de semana');
} else if (diaDaSemana == 'domingo') {
    alert('bom fim de semana');
} else {
    alert('boa semana');
}


numero = prompt('digite um numero');
if (numero > 0) {
    alert('esse é um numero positivo');
} else {
    alert('esse é um numero negativo');
}


pontuaçao = 105;
if (pontuaçao >= 100) {
    console.log("parabens, voce venceu");
} else {
    console.log("tente novamente");
}


let saldoConta = 500;
alert(`seu saldo é $ {saldoConta}`) ; 


