let saldoVitorias = calcularRank(10, 4)

function calcularRank(vitorias, derrotas){
    return vitorias - derrotas
}

if(saldoVitorias <= 10){
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível Ferro`)
}else if(saldoVitorias <= 20){
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível Bronze`)
}else if(saldoVitorias <= 50){
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível Prata`)
}else if(saldoVitorias <= 80){
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível Ouro`)
}else if(saldoVitorias <= 90){
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível Diamante`)
}else if(saldoVitorias <= 100){
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível Lendário`)
}else{
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível Imortal`)
}

