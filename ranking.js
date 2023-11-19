function calculaRanking(win, loss){
    cal = win - loss
    let ranking = ""
    if (cal <= 10){
        ranking = "FERRO"
    }else if(cal >= 11 && cal <= 20){
        ranking = "BRONZE"
    }else if(cal >= 21 && cal <= 50){
        ranking ="PRATA"
    }else if(cal >= 51 && cal <= 80){
        ranking = "OURO"
    }else if(cal >= 81 && cal <= 90){
        ranking = "DIAMANTE"
    }else if(cal >= 91 && cal <= 100){
        ranking = "LENDÁRIO"
    }else if(cal >= 101){
        ranking = "IMORTAL"
    }
    return console.log(`O Herói tem de saldo de vitórias ${cal} e está no nível de ${ranking}`)
}

console.log(calculaRanking(154, 100))