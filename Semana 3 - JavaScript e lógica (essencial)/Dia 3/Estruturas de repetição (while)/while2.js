let constellation = 'Andromeda'
let position = 0
let constellationLength = constellation.length

while (position < constellationLength) {
  if (constellation[position] == 'a' || constellation[position] == 'A') {
    console.log(position)
  }
  position += 1 // position = position + 1
}
