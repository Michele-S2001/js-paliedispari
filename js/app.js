// ->->-> palindroma <-<-<-

//chiedere una parola all'utente
const userWord = (prompt('Inserisci una parola')).toLocaleLowerCase();

if (isPalindrome(userWord)) {
  console.log(`"${userWord}" è una parola palindroma`);
} else {
  console.log(`"${userWord}" non è una parola palindroma`);
}

function isPalindrome (word) {
 
  const wordFromLeftToRight = [];
  for (let i = 0; i < word.length; i++) {
    const charToRight = word[i];
    wordFromLeftToRight.push(charToRight);
  }
  
  const wordFromRightToLeft = [];
  for (let i = word.length - 1; i >= 0; i--) {
    const charToLeft = word[i];
    wordFromRightToLeft.push(charToLeft);
  }

  if (wordFromLeftToRight.toString() === wordFromRightToLeft.toString()) {
    return true;
  } else {
    return false;
  }
}

// ->->-> Pari e Dispari <-<-<-

//L’utente sceglie pari o dispari
const userChoice = (prompt('Scegli tra pari o dispari scrivendo qui in formato parola la tua scelta')).toLowerCase();
console.log(`l'utente ha scelto ${userChoice}`);

//l'utente inserisce un numero da 1 a 5
const userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));
const pcNum = getRandomNum();
console.log(userNum, pcNum);

//dichiara il vincitore
if (oddOrEven(userNum, pcNum) === userChoice) {
  console.log("L'utente ha vinto!");
} else {
  console.log("Il computer ha vinto!");
}

//sommare i due numeri in una funzione e vedi se è pari o dispari il risultato 
function oddOrEven (num1, num2) {
  const sum = num1 + num2;
  if (sum % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

//generare un numero da 1 a 5
function getRandomNum () {
   return Math.floor((Math.random() * 5) + 1);
}