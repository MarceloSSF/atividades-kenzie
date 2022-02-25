let opcoesJantar = [

    {
        id: 0,
        nome: 'Hamburguer',
        preco: 25
    },

    {
        id: 1,
        nome: 'Pizza',
        preco: 45
    },

    {
        id: 2,
        nome: 'Sushi',
        preco: 60
    },

    {
        id: 3,
        nome: 'Esfiha',
        preco: 0.99
    },

    {
        id: 4,
        nome: 'Lasanha',
        preco: 35
    }

]

// mostra todos os objetos do array opcoesJantar
console.table(opcoesJantar);

// mostra um elemento específico do array, com todos os seus atributos
console.table(opcoesJantar[1]);

// mostra um atributo específico do elemento pedido
console.log("ID: " + opcoesJantar[1]['id'] + " - " + opcoesJantar[1]['nome'] + " - R$" + opcoesJantar[1].preco)

function mostrarAcimaPreco (price) {
    console.log("Opções acima de " + price + " reais")
    for (let i=0; i < opcoesJantar.length; i++) {

        if (opcoesJantar[i].preco > price) {
            console.log(opcoesJantar[i].nome)
        }

    }
}

mostrarAcimaPreco(10)


const firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Drog', E: 'Exodia', F: 'Filial', 
                    G: 'Grog', H: 'Hotan', I: 'Ivis', J: 'Joglo', K: 'Kilto', L: 'Lumia', 
                    M: 'Malware', N: 'Noah', O: 'Opah', P: 'Ploar', Q:'Queue', R: 'Ralwoa', S: 'Staq',
                    T: 'Tangola', U: 'Uloc', V: 'Valzemir', W: 'Wolf', X: 'Xacalabum', 
                    Y: 'Yzo', Z: 'Zorg'}

console.table(firstName)
console.log(firstName['A'])


let nome ='marcelo'
let letra = nome[0].toUpperCase();
console.log(nome)
console.log(letra)