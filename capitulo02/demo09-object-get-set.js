const pessoa = {
    _nome: '',//_ deixa privado 
    _idade: 20,

    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    },
    set idade(valor) {//variavel criada apenas no set**
        this._idade = valor
    }
}

pessoa.nome = "maria do céu"
console.log(pessoa.nome)
pessoa.idade = 16
console.log(pessoa.podeDirigir)
console.log(pessoa.idade)// ** nesse caso está tentando refernciar sem o get então é 'undefined'

