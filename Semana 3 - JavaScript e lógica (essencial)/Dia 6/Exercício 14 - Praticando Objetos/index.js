alert('Bem Vindo!')
let velocidadeDaNave = 0

let nave = {
  nome: 'StrongWorld',
  tipo: 'Batalha',
  velocidadeMax: 200,
  alertaVelocidadeMax: function () {
    alert('Alerta! Velocidade máxima atingida ou excedida! (200Km/s)')
  },
  parandoNave: function () {
    alert(
      'Nome da nave: ' +
        this.nome +
        '\nTipo: ' +
        this.tipo +
        '\nVelocidade: ' +
        velocidadeDaNave
    )
  },
  mensagemDesligandoNave: function () {
    alert('Para sua segurança desligaremos a nave... \n Até breve!')
  }
}

function acelerandoNave(velocidade, aceleracao) {
  let novaV = velocidade + aceleracao
  return novaV
}

function menu() {
  let escolha = prompt(
    'O Que Você deseja? \n1 - Acelerar a nave \n2 - Parar a nave'
  )
  if (escolha != '1' && escolha != '2') {
    alert('Número inválido! \n Digite 1 ou 2')
    menu()
  }
  opcoes(escolha)
}

function opcoes(escolha) {
  switch (escolha) {
    case '1': {
      let novaVelocidade = parseInt(prompt('Qual a velocidade desejada?'))
      console.log(novaVelocidade)
      velocidadeDaNave = acelerandoNave(velocidadeDaNave, novaVelocidade)
      console.log(velocidadeDaNave)
      if (velocidadeDaNave >= nave.velocidadeMax) {
        nave.alertaVelocidadeMax()
        nave.parandoNave()
        nave.mensagemDesligandoNave()
        break
      } else {
        menu()
        break
      }
    }
    case '2': {
      nave.parandoNave(nave)
      break
    }
  }
}

menu()
