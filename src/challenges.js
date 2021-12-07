// Desafio 1
function compareTrue(x, y ) {
  if (x === true && y === true) {
    return true;
  } else {
    return false;
  }
}
//console.log (compareTrue ());

// Desafio 2
function calcArea(base, heigth) {
  const resultado = (base * heigth) / 2;
  return resultado;
}
const resultado = calcArea()
console.log(resultado)


// Desafio 3
function splitSentence(gotrybe) {
  gotrybe = gotrybe.split (' ')

  return gotrybe;
}

// Desafio 4
function concatName(parâmetro) {
  let primeiroItem = parâmetro [0]
  let ultimoItem = parâmetro[parâmetro.length -1]
  let cocatenar = ultimoItem + ", " + primeiroItem
  return cocatenar;
 
}


// Desafio 5
function footballPoints(wins, ties) {
  placar = ties * 1 + wins * 3;
  return placar;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(number) {
  const mensagem = [];
  for (let msg of number) {
    if (msg % 3 === 0 && msg % 5 === 0){
      mensagem.push ('fizzBuzz')
    } else if (msg % 3 === 0) {
      mensagem.push ('fizz')
    } else if (msg % 5 === 0) {
      mensagem.push ('buzz')
    } else {
      mensagem.push ('bug!')
    }
  }
  return mensagem;
}


    

  
  


// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
