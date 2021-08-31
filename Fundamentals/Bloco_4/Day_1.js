//1
const a = 5;
const b = 25;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2
const c = 15;
const d = 35;
if (c > d) {
  console.log(`O maior número é: ${c}`);
} else {
  console.log(`O maior número é: ${d}`);	
}

//3
const e = 108;
const f = 11;
const g = 75;
if (e > f && e > g) {
  console.log(`O maior número é: ${e}`);
} else if (f > e && f > g) {
  console.log(`O maior número é: ${f}`);	
} else {
  console.log(`O maior número é ${g}`);
}

//4
const h = 5;
if (h > 0) {
  console.log('Positive');
} else if (h < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}

//5
const i = 60;
const j = 59;
const k = 61;
let l = false;
if ((i < 0)||(j < 0)||(k < 0)) {
  console.log('Invalid Angle');
} else if( i + j + k == 180) {
  l = true;
  console.log(l);
} else {
  console.log(l);
}

//6
function chess(piece){
  let move = piece;
  switch (move){
    case 'Pawn':
      return `${move} can move 1 square front, and 2 squares front on first move!`;
      break;
    case 'Rook':
      return `${move} can move any number of squares on his line and column!`;
      break;
    case 'Knight':
      return `${move} can move in a L pattern on any direction!`;
      break;
    case 'Bishop':
      return `${move} can move on his diagonals!`;
      break;
    case 'King':
      return `${move} 1 square on any direction!`;
      break;
    case 'Queen':
      return `${move} can move any number of squares on her column, line or diagonal!`;
      break;
    default:
      return `There is no such piece!`;
  }
}
console.log(chess('Queen'))
   
//7
function conceito(nota){
  let pcent = nota * 10;
  if ((pcent < 0) || (pcent > 100)){
    return `Invalid Number!`;
  } else if (pcent >= 90) {
    return `A`;
  } else if (pcent >= 50) {
    return `B`;
  } else if (pcent >= 70) {
    return `C`;
  } else if (pcent >= 60) {
    return `D`;
  } else if (pcent >= 50) {
    return `E`;
  } else if (pcent < 50) {
    return `F`;
  }
}
console.log(conceito(8));

//8
const m = 5;
const n = 4;
const o = 3;
if ((m % 2 == 0) || (n % 2 == 0) || (o % 2 == 0) ) {
  console.log('True!');
} else {
  console.log('False!');
}

//9
const m = 8;
const n = 4;
const o = 11;
if ((m % 2 > 0) || (n % 2 > 0) || (o % 2 > 0) ) {
  console.log('True!');
} else {
  console.log('False!');
}

//10
const p = 25;
const q = 50;
let custoTotal = p + (p / 100 * 20);
let lucro = q - custoTotal;
console.log(lucro);
