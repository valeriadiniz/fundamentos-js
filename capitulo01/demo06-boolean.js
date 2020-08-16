const podeDirigir = false //ou true 
if(podeDirigir) {
    console.log('Ela pode Dirigir')
    }
    else{
        console.log('Ela não pode Dirigir!!')
}

const saldoEmConta = 0 //O saldo em conta sendo  0 = false negando com ! nesse caso ele é true // -1 ou >1 = true
if (!saldoEmConta) {
   console.log('não tem saldo')
}

    if (saldoEmConta < 0) {
        
        console.log("saldo negativo")
        } 
        if(saldoEmConta > 0) {

            console.log('transação realizada com sucesso! Saldo Disponível de: R$', saldoEmConta)
    }

const boolComString = "teste"

//forçar o valor a true ou false
//de acordo com a tabela

console.log('verdadeiro', !!boolComString)

//negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log(
    ! (!!boolComString)
)

