function tabelaMultiplicacao(linha, coluna) {

    // Criando novo array com a quantidade linha, do parâmetro da função
    const tabela = new Array(linha);

    // Criando, para cada linha do array criado, a quantidade coluna, do parâmetro da função
    for (let i = 0; i <= linha; i++) {
        tabela[i] = new Array(coluna);
    }

    // Percorrendo toda a matriz criada e adicionando respectivos valores
    for (let i = 0; i <= linha; i++) {
        for (let j=0; j <= coluna; j++) {
            tabela[i][j] = i + "*" + j + " = " + i*j; // linha * coluna = resultadoo
        }
    }

    // Imprimindo tabela completa no console
    console.table(tabela)

}


function teste(linha, coluna){

    const tabela = new Array(linha);

    for (let i=0 ; i <= tabela.length; i++) {

        tabela[i] = new Array(coluna);
        for (let j=0; j < tabela[i].length; j++) {
            tabela[i][j] = "Linha: " + i + " Coluna: " + j;
        }

    }

    console.table(tabela);
}



// Obs: Os parâmetros indicam os números finais da multiplicação, iniciando em 0 e indo até o valor colocado
//tabelaMultiplicacao(10,10);
teste(2,5)
