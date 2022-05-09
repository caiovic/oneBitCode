// chamar uma função sem o parâmetro necessário (Quando não declarado, coloca undefined):
// nem sempre é necessário definir o valor, por exemplo do name
function comprimentarPiloto(name, message = 'Olá') {
  console.log(message + ', ' + name)
}
comprimentarPiloto() // Olá, undefined // por padrão, name tem valor undefined até que seja imposto um novo valor

// -----------------------------------------------------------------------------------------------------------------
