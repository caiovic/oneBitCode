class valorantHerois {
  constructor(name, position, ult) {
    this.Nome = name
    this.Posição = position
    this.Ult = ult
  }
}
console.log('Seja bem vindo, heroi! ')

sentinelas = {
  Cypher: new valorantHerois(
    ' Cypher',
    'Sentinela',
    'Ver onde estão os inimigos'
  ),
  Sage: new valorantHerois('Sage', 'Sentinela', 'Reviver amigos')
}

duelistas = {
  Neon: new valorantHerois('Neon', 'Duelista', 'Choque'),
  Jett: new valorantHerois('Jett', 'Duelista', 'Kunai')
}

iniciadores = {
  Breach: new valorantHerois('Breach', 'Iniciador', 'Terremoto'),
  Sova: new valorantHerois('Sova', 'Iniciador', 'Super flecha')
}

controladores = {
  Viper: new valorantHerois('Viper', 'Controlador', 'Poço peçonhento'),
  Omen: new valorantHerois('Omen', 'Controlador', 'Teletransporte')
}

console.log(sentinelas)
console.log('___________________________')
console.log(duelistas)
console.log('___________________________')
console.log(iniciadores)
console.log('___________________________')
console.log(controladores)
