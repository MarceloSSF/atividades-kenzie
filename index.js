let nome = 'Marcelo';

let tamanho = nome.length;

console.log(`Meu nome é ${nome} e ele possui ${tamanho} letras`);

let preco = 15;
let precoFormatado = `R$ ${preco},00`;

console.log(`O valor ${preco} formatado ficaria assim: ${precoFormatado}`);

let cumprimento = 'Bom dia';
let sobrenome = 'Soares';
let mensagem = `${cumprimento}, ${nome} ${sobrenome}`;
console.log(mensagem);

let preco1 = 10;
let preco2 = 22;
let precoTotal = preco1 + preco2;

console.log(`Comprei uma xícara por R$${preco1} e dois copos por R$${preco2} e paguei um total de R$${precoTotal}`);

let numero = 0;
console.log(numero);
numero += 1;
console.log(numero);


let valor1 = 10;
let valor2 = 11;

let compararValor = valor1 === valor2;
console.log(compararValor);

let x = 1
let y = 2

function myFunction(){
  if(x > y || (y % 2 == 0) ) {
    return "Hello World";
  } else {
    return "Goodbye";
  }
}

console.log(myFunction());

let botaoMenu = false;
let avaliarClick = !botaoMenu;

if (avaliarClick = true) {
  console.log("Abrir menu");
} else {
  console.log("Fechar menu");
}