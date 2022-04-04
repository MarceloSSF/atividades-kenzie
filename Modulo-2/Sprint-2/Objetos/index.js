let livroObj = {
    saga: "Harry Potter",        
    volume: "Harry Potter e a Pedra Filosofal",        
    paginas: 208,        
    codigo: 15648977    
}        

console.log(livroObj.saga);
console.log(livroObj.volume);
livroObj.codigo = +livroObj.codigo;
livroObj.autora = "J.K. Rowling";
//livroObj['Capítulo 1'] = 'O menino que sobreviveu';

let capitulos = [
    "O menino que sobreviveu",
    "O vidro que sumiu",
    "As cartas de ninguém",
    "O guardião das chaves",
    "O Beco Diagonal"
];

const novoCapitulo = capitulos.map((elem,index) => {
    return `Capítulo ${(index+1)} - ${elem}`
});

livroObj['capitulo'] = novoCapitulo; 
console.log(livroObj);