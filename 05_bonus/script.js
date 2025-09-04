/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Mario';


// Dichiara la funzione qui.
function saluta(nome) {
  const now = new Date();/* "December 17, 1995 19:24:00" */
  const hour = now.getHours();

  let saluto;

  if (hour < 13) {
    saluto = "Buongiorno";
  } else if (hour < 17) {
    saluto = "Buon pomeriggio";
  } else {
    saluto = "Buonasera";
  }

  return `${saluto} ${nome}!`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluta(nome));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

