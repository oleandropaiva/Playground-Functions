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
function splitSentence() {
  // seu código aqui
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
    for (let index = 0; index < number.length; index +=1) {

    if (index % 3 === 0) {
      imprime ("fizz")

    } else if (index % 5 === 0) {
      imprime ("buzz") 

    } else if  (index % 3 === 0 && index % 5 === 0) {
        imprime ("fizzBuzz")

      } else {
        imprime ("bug!");
      }
    
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
