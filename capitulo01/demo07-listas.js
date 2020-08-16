const minhaListas = [];
const minhaListasDeTarefas = [
    'responder email',
    'separar contas',
    'arquivar documentos',
    'almoçar'
]

//console.log(minhaListasDeTarefas[0]) //todo índice começa com 0
//console.log(minhaListasDeTarefas[1])
//console.log(minhaListasDeTarefas[5])//sendo um índice que não existe ele retorna 'undefined'

//quantidade de itens no array
//console.log(minhaListasDeTarefas.length)

//adicionar item
//minhaListasDeTarefas.push('pedir uber')
//console.log(minhaListasDeTarefas)

//remover o último da lista
//const ultimo = minhaListasDeTarefas.pop()
//console.log(ultimo, minhaListasDeTarefas)

//remover o primeiro da lista
//const primeiro = minhaListasDeTarefas.shift()
//console.log(primeiro, minhaListasDeTarefas)

//remover um item do meio da lista
//minhaListasDeTarefas.splice(2,1)//número do indice e quantidade de informação excluida "quantos remover"
//console.log(minhaListasDeTarefas)

const itens = [
       1, 'computador', 0.22
]

//verificar o tipo
//console.log(typeof(itens))
//retorna 'objeto' 


//como verificar se é array da forma correta?
//console.log(Array.isArray(itens))

//ordenar
//const numeros = [3,2,1,0]
//const numeros = ['e','a','z','b']
//console.log(numeros.sort())

//juntar dois arrays

const novo = itens.concat([1,2,3])
//console.log (novo)

//juntar arrays em uma string

//console.log(novo.join(','))

//verificar indice do item

const index = itens.indexOf('computador')
console.log(itens[index])
