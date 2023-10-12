// ->->-> palindroma <-<-<-

// chiedere una parola all'utente
const userWord = (prompt('Inserisci una parola')).toLocaleLowerCase();

if (isPalindrome(userWord)) {
  console.log(`"${userWord}" è una parola palindroma`);
} else {
  console.log(`"${userWord}" non è una parola palindroma`);
}

function isPalindrome (word) {
 
  const wordFromLeftToRight = [];
  for (let i = 0; i < userWord.length; i++) {
    const charToRight = userWord[i];
    wordFromLeftToRight.push(charToRight);
  }
  console.log(wordFromLeftToRight);
  
  const wordFromRightToLeft = [];
  for (let i = userWord.length - 1; i >= 0; i--) {
    const charToLeft = userWord[i];
    wordFromRightToLeft.push(charToLeft);
  }
  console.log(wordFromRightToLeft);

  if (wordFromLeftToRight.toString() === wordFromRightToLeft.toString()) {
    return true;
  } else {
    return false;
  }
}


