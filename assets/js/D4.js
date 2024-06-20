/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("***** esercizio 1 *****");

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(4, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("***** esercizio 2 *****");

function crazySum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
}
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("***** esercizio 3 *****");

function crazyDiff(number) {
  let diff = Math.abs(number - 19);
  if (number > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("***** esercizio 4 *****");

function boundary(n) {
  if ((n > 20 && n < 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(34));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("***** esercizio 5 *****");

function epify(str) {
  if (str.toUpperCase().indexOf("EPICODE") === 0) {
    return str;
  } else {
    return "EPICODE" + str;
  }
}

console.log(epify(" è fantastico!"));
console.log(epify("epicode aiuta molto!"));

/*1. dichiarare la funzione
2. controllare se la stringa inizia con epicode
3. se si, restituire la stringa
4. se no, aggiungere epicode all'inizio della stringa.

 function epify(str) {
    if (str.indexOf('EPICODE') === 0){
        return str;
    } else {
        return 'EPICODE' + str;
    }
 }
console.log(epify('ciao'));*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("***** esercizio 6 *****");

function check3and7(number) {
  if (number % 3 === 0 || number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(7));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("***** esercizio 7 *****");

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("***** esercizio 8 *****");
/* cercato su google per aiutarmi
function upperFirst(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
console.log(upperFirst("ciao a tutti mi chiamo pietro romano e frequento il corso epicode"));*/

function upperFirst(string) {
    string = string.toLowerCase();
  let words = string.split(' ');
  let final = [];
  for (let i = 0; i < words.length; i++) {
    let first = words[i].charAt(0);
    first = first.toUpperCase();
    let cut = words[i].slice(1);
    let newWord = first + cut;
    final.push(newWord);
  }
  console.log(final.join(' '));
}
upperFirst('ciao a tutti mi chiamo pietro romano e frequento il corso epicode')
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("***** esercizio 9 *****");

function cutString(string) {
    if (string.length > 2) {
        return string.slice(1, -1);
    } else {
        return '';
    }
}
console.log(cutString('EPICODE'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("***** esercizio 10 *****");

function giveMeRandom(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.abs(Math.random() * 11);
    result.push(randomNumber);
  }
  return result;
}
console.log(giveMeRandom(10));
