function comprimentarPiloto(name, message = 'Olá') {
  console.log(message + ', ' + name)
}

comprimentarPiloto('Caio Victor')

// resultado: Olá, Caio Victor

/* message está sendo declarada na functiorn como um padrão,
  porém, caso queira declarar o valor junto ao name, seria sobrescrito, por exemplo

  comprimentarPiloto("Caio Victor", "Bem-vindo")

  seria exibido: "Bem-vindo, Caio Victor" ao inves de "Olá, Caio Victor"

  além disso, também é possível declarar uma variável fora da function, como por exemplo:

  let name = "Caio Victor"
*/
