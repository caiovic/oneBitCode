alert('Seja bem-vindo!')
class EstacaoEspacial {
  constructor(nome, qntTripulantes) {
    this.nome = nome
    this.qntTripulantes = qntTripulantes
    this.estaEngatada = false
    this.portaAberta = false
  }

  engateNave() {
    this.estaEngatada = true
    this.portaAberta = true
  }
}

let listaNaves = []

function novaNave() {
  let listaDeNaves = new Array()
  let nomeNovaNave = prompt('Qual o nome da nave?')
  let novaQntTripulantes = prompt('Qual a quantidade de tripulantes?')
  let cadastroNovaNave = new EstacaoEspacial(nomeNovaNave, novaQntTripulantes)
  return cadastroNovaNave
}

function imprimirNaves(naves) {
  let listaDeNaves = ''
  naves.forEach((EstacaoEspacial, indice) => {
    listaDeNaves +=
      indice +
      1 +
      '- ' +
      EstacaoEspacial.nome +
      ' (' +
      EstacaoEspacial.qntTripulantes +
      ' tripulantes)\n'
  })
  alert(listaDeNaves)
}

function menu() {
  let escolha
  while (escolha != '1' && escolha != '2' && escolha != '3') {
    escolha = prompt(
      'O que deseja realizar? \n1 - Engatar nave \n2 - Imprimir lista de naves \n3 - Sair do programa'
    )
  }
  executandoEscolha(escolha)
  return escolha
}

function executandoEscolha(escolha) {
  switch (escolha) {
    case '1': {
      let addNovaNave = novaNave()
      menu()
      break
    }
    case '2': {
      let imprimindoAsNaves = imprimirNaves(naves)
      menu()
      break
    }
    case '3':
      alert('Encerrando Programa...')
      break
  }
}

menu()
