let velocidadeDaNave = 0
let estadoAtual = ''
opcoes = ''
let nomePiloto = prompt('Bem vindo piloto! Qual seu nome?')
let nomeNave = prompt('Qual o nome de sua espaçonave?')

function menu(opcao) {
  opcao = prompt(
    'Qual das opções deseja realizar agora?: \n1 - Acelerar a nave em 5Km/s \n2 - Reduzir a velocidade em 5Km/s \n3 - Imprimir dados de bordo até o momento \n4 - Sair do programa'
  )
  return opcao
}

function aumentarVelocidade(velocidade) {
  let aceleracao = 5
  let novaVelocidade = velocidade + aceleracao
  return novaVelocidade
}

function diminuirVelocidade(velocidade) {
  let desaceleracao = 5
  if ((velocidade = 0)) {
    let novaVelocidade = 0
    return novaVelocidade
  } else {
    let novaVelocidade = velocidade - desaceleracao
    return novaVelocidade
  }
}

function mensagem(Piloto, nave, velocidade) {
  alert(
    'Nome do piloto: ' +
      Piloto +
      '\nNome da nave: ' +
      nave +
      '\n Velocidade atual: ' +
      velocidade +
      'Km/s'
  )
}

do {
  opcoes = menu(opcao)
  switch (opcao) {
    case '1':
      alert('Aumentando velocidade...')
      velocidadeDaNave = aumentarVelocidade(velocidadeDaNave)
      menu()
      break

    case '2':
      alert('Reduzindo velocidade...')
      velocidadeDaNave = diminuirVelocidade(velocidadeDaNave)
      menu()
      break

    case '3':
      break
      estadoAtual = mensagem(nomePiloto, nomeNave, velocidadeDaNave)

    default:
      alert('Número inválido! Favor digitar um novo número.')
      menu()
      break
  }
} while (opcao != 4)

menu()

alert('Finalzando processo... Obrigado pelas informações!')
