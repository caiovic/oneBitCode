function reduction(n) {
  for (let i = n; n > 0; i--) {
    n = n - 20
  }
  return console.log('Reduzindo velocidade para: ' + n)
}

let printConsole = console.log(reduction(150))
