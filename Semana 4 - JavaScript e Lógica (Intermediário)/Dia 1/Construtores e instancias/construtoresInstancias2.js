class EstacaoEspacial {
  constructor(nome, qntPlataformas) {
    this.nome = nome
    this.qntPlataformas = qntPlataformas
  }
}

// quando chamamos o "new", na verdade estamos chamando o constructor para definir os parâmetros do novo objeto instanciado na classe
let observatorio = new EstacaoEspacial('Observatório', 49)

let naveEspacial = new EstacaoEspacial('Nave Espacial', 150)

console.log(observatorio) // EstacaoEspacial { nome: 'Observatório', qntPlataformas: 49 }

console.log(naveEspacial) // EstacaoEspacial { nome: 'Nave Espacial', qntPlataformas: 150 }

// EstacaoEspacial se torna o tipo do objeto
