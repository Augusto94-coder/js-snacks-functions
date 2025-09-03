/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

const countVowelsArrow = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
};

// Invoca la funzione qui e stampa il risultato in console
/* console.log(`La parola "${word}" contiene ${countVowels(word)} vocali.`); */
console.log("La parola " + word + " contiene " + countVowels(word) +  " vocali")
console.log("La parola " + word + " contiene " + countVowelsArrow(word) +  " vocali")


//Risultato atteso se si passa 'javascript': 3 (a, a, i)