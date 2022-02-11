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

let usuarioAutenticado = true;

if (usuarioAutenticado) {
  console.log("Bem-vindo");
} else if (!usuarioAutenticado) {
  console.log("Usuário não autenticado");
}

let usuario = 'João';
let autenticado = false;

if (usuario == 'Ana' && autenticado) {
  console.log(`Bem-vindo ${usuario}. Você está autenticado`);
} else if (usuario == 'Ana' && !autenticado) {
  console.log(`Olá, ${usuario}. Você não está autenticado`);
} else if (usuario != 'Ana' || !autenticado) {
  console.log("Usuário não encontrado ou não autenticado");
}

let produto = 'Maçã';
let quantidadeProduto = 10;
let quantidadePromocao = 5 - quantidadeProduto;

if (produto == 'Maçã' && quantidadeProduto >= 5) {
  console.log('Você recebeu promoção. O valor do produto será R$5,00')
} else {
  console.log(`Se você adicionar mais ${quantidadePromocao} maçãs, o valor será de R$5,00`);
}

let numero = 3;
if(numero % 2 === 0) {
   numero = numero + 5;
}
console.log(numero);
