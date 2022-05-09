let lightYears = prompt('Qual a distância em anos-luz?')

let question = prompt(
  'Qual tipo de conversão deseja realizar? \n1 - Parsec (pc) \n2 - Unidade astronômica (AU) \n3 - Quilômetros(Km)'
)

switch (question) {
  case '1':
    let pc = lightYears / 3.262
    alert(
      'Distância em Anos-luz: ' + lightYears + '\nConversão para Parsec: ' + pc
    )
    break
  case '2':
    let ua = lightYears * 63241
    alert(
      'Distância em Anos-luz: ' +
        lightYears +
        '\nConversão para Unidade astronômica: ' +
        ua
    )
    break
  case '3':
    let km = lightYears * (9.5 * Math.pow(10, 12))
    alert(
      'Distância em Anos-luz: ' +
        lightYears +
        '\nConversão para Unidade astronômica: ' +
        km
    )
    break
  default:
    alert(
      'Distância em Anos-luz: ' +
        lightYears +
        '\nUnidade não identificada: Conversão fora do escopo'
    )
}
