const menu = [
    {
        title: 'Aperitivos',
        items: [ {
            // 'sopa', 'salada', 'bruschetta'
            titulo: 'Sopas',
            sabores: ['Caldo verde'],
            preco: [20]
        },
        {
            titulo: 'Saladas',
            sabores: ['Carpaccio'],
            preco: [30]
        },
        {
            titulo: 'Bruschettas',
            sabores: ['Tradicional'],
            preco: [10]
        }
    ],
    },

    {
        title: 'Pratos',
        items: [ {
            titulo: 'Pizzas',
            sabores: ['Marguerita', 'Calabresa', 'Frango'],
            preco: [45, 40, 35]
        }, 
        {
            titulo: 'Hamburgueres',
            sabores: ['X-tudo', 'X-egg'],
            preco: [15, 10]
        },
        
        {
            titulo: 'Sanduiches',
            sabores: ['BMT', 'Teriaky', 'Vegetariano', 'Churrasco'],
            preco: [20, 15, 13, 25]
        } ]
    },

    {
        title: 'Bebidas',
        items: [
            {
                titulo: 'Água',
                sabores: ['Com gás', 'Sem gás'],
                preco: [4, 5]
            },
            {
                titulo: 'Refrigerante',
                sabores: ['Coca-cola', 'Pepsi', 'Fanta'],
                preco: [5, 5, 5]
            },
            {
                titulo: 'Cerveja',
                sabores: ['Pilsen', 'IPA', 'Stout'],
                preco: [10, 20, 30]
            } ]
    }
]


for (let i=0; i < menu.length; i++) {
    let section = menu[i];
    let items = section.items;

    console.log(section.title)

    for (let j=0; j < items.length; j++) {
        let tipo = items[j].titulo;
        let sabores = items[j].sabores;
        console.log(tipo);

        for (let h = 0; h < sabores.length; h++) {
            let sabor = items[j].sabores[h];
            let preco = items[j].preco[h];

            console.log(sabor + ' - R$' + preco);   
        }

    }
}


