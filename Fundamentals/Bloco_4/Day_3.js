let infoM = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//1
console.log(`Bem vinda, ${infoM.personagem}`);

//2
infoM.recorrente = 'Sim';
for (let profile in infoM){
    console.log(`${profile}: ${infoM[profile]}`);
}

//3
for (let profileD in infoM){
    console.log(profileD);
}
//4
for (profile in infoM){
    console.log(infoM[profile]);
}

//5
let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
console.log(`${infoM.personagem} e ${infoPatinhas.personagem}`);
console.log(`${infoM.origem} e ${infoPatinhas.origem}`);
console.log(`${infoM.nota} e ${infoPatinhas.nota}`);
console.log('Ambos Recorrentes');

//6
function palindrome(word){
  let array = [];
  let control = [];
  let verifier = false;
  
  for (let index = 0; index < word.length; index += 1){
  array.push(word[index]);
  control.push(word[index]);
  }
  let pali = array.reverse();
  
  for (index = 0; index < array.length; index += 1){
    if (control[index] === pali[index]){
     verifier = true;
    } else {
     verifier = false;
    }
  }
  return verifier;
  }
  console.log(palindrome('anna'));

//Extras
let girl = {
  name : 'Catherine', 
  middleName : 'Victoria',
  age : 21,
  bornPlace : 'Liverpool',
  birth : {day : '25',
  month: '01',
  year: '2000'},
}
girl.country = 'England';

for (let info in girl){
  console.log(girl[info]); // Prints all info on girl
}
console.log(girl.name); // Prints name
console.log(girl.birth.day);
console.log(girl.birth.day + '/' + girl.birth.month + '/' + girl.birth.year); // Yes it works, and returns birthday values with the slashs in the right place!!!
console.log(girl.country);
