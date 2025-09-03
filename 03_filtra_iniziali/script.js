/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByLetter(array, letter) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === letter) {
      result.push(array[i]);
    }
  }
  return result;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByLetter(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]