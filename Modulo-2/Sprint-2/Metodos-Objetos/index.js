const celular = {
    bateria: 0,
    modelo: 'iphone123',
    sinalDaRede: false,
    
    carregarCelular(){
        this.bateria = 100;
        console.log(`Celular ${this.modelo} está com a bateria 100%`);  
    },

    ligarCelular() {
        if (this.bateria > 0) {
            this.sinalDaRede = true;
            console.log(`Celular ${this.modelo} ligado`);
        } else {
            console.log('Celular com pouca bateria');
        }
    },

    desligaCelular(){
        console.log(`Celular ${this.modelo} desligado`);
        this.sinalDaRede = false;
    }
}

celular.carregarCelular();
console.log(celular.bateria);
celular.ligarCelular();