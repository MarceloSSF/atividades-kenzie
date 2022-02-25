function greet(language) {
	
    const languages = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    }
    
    let qtd = 0;

    for(let i in languages){
        
        let idioma = Object.keys(languages)[qtd];

        if (idioma === language) {
            return languages[language];

          } else if (language === 'IP_ADDRESS_INVALID') {
            return 'not a valid ipv4 or ipv6 ip address';
            
          } else if (language === 'IP_ADDRESS_NOT_FOUND') {
            return 'ip address not in the database';
            
          } else if (language === 'IP_ADDRESS_REQUIRED') {
            return 'no ip address was supplied';
            
          } else if (qtd === 16){
              return 'Welcome';
          }
        
        qtd++;
    }
}

  console.log(greet('IP_ADDRESS_INVALID'));