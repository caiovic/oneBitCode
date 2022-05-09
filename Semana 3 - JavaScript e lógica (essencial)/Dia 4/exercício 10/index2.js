let mensagemTexto = ''
let velocidadeDaNave = 0
let nomePiloto = prompt('Bem vindo piloto! Qual seu nome?')
let nomeNave = prompt('Qual o nome de sua espaçonave?')

function mostrarMenu() {
  let opcaoEscolhida = prompt(
    'Qual das opções deseja realizar agora?: \n1 - Acelerar a nave em 5Km/s \n2 - Reduzir a velocidade em 5Km/s \n3 - Imprimir dados de bordo até o momento \n4 - Sair do programa'
  )
  executar(opcaoEscolhida)
}

function aumentarVelocidade(velocidade, aceleracao) {
  let novaVelocidade = velocidade + aceleracao
  return novaVelocidade
}

function reduzirVelocidade(velocidade, desaceleracao) {
  let novaVelocidade = velocidade - desaceleracao
  if (novaVelocidade <= 0) {
    novaVelocidade = 0
    return novaVelocidade
  } else {
    return novaVelocidade
  }
}

function mensagem(nome, nave, velocidade) {
  alert(
    'Nome do piloto: ' +
      nome +
      '\nNome da nave: ' +
      nave +
      '\n Velocidade atual: ' +
      velocidade +
      'Km/s'
  )
}

function executar(opcaoEscolhida) {
  switch (opcaoEscolhida) {
    case '1': {
      velocidadeDaNave = aumentarVelocidade(velocidadeDaNave, 5)
      mostrarMenu()
      break
    }
    case '2': {
      velocidadeDaNave = reduzirVelocidade(velocidadeDaNave, 5)
      mostrarMenu()
      break
    }
    case '3': {
      mensagemTexto = mensagem(nomePiloto, nomeNave, velocidadeDaNave)
      mostrarMenu()
      break
    }
    case '4': {
      alert('Desligando...')
      break
    }
    default: {
      alert('Número invalido. \nTente novamente')
      mostrarMenu()
      break
    }
  }
}
mostrarMenu()
