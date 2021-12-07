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
//console.log(resultado)


// Desafio 3
function splitSentence(gotrybe) {
  gotrybe = gotrybe.split (' ')
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
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
function catAndMouse(mouse,cat1, cat2) {
  let meters1 = cat1 - mouse;
  let meters2 = cat2 - mouse;
 
 if (meters1 < meters2) {
   return "cat1"
 } else if (meters2 < meters1){
   return "cat2"
 } else if (meters1 === mouse && meters2 === mouse )
   return "os gatos trombam e o rato foge"
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
