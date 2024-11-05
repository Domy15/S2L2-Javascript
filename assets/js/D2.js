/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 2;
let num2 = 1;

if(num1>num2){
  console.log("il numero più grande è", num1);
}else{
  console.log("il numero più grande è", num2);
};

num2 = 3;

if(num1>num2){
  console.log("il numero più grande è", num1);
}else{
  console.log("il numero più grande è", num2);
};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const num = 4;

if(num!==5){
  console.log("not equal");
};

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numero = 10;
let resto = numero%5;

if(resto===0){
  console.log("divisibile per 5");
}else{
  console.log("non è divisibile per 5");
};

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1 = 3;
let numero2 = 5;

if(numero1===0 && numero2===8 || numero1===8 && numero2===0){
  console.log("la loro somma è uno dei due numeri è ugaule a 8");
}else if(numero1===0 && numero2===8){
  console.log("entrambi i numeri sono uguali a 8");
}else if(numero1-numero2===8){
  console.log("la differenza tra i due numeri è uguale a 8");
}else if(numero1+numero2===8){
  console.log("la somma dei due numeri è uguale a 8");
}else if(numero1===8 || numero2===8){
  console.log("uno dei due numeri è uguale a 8");
}else{
  console.log("la somma due numeri o uno dei due numeri non è uguale a 8");
};

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
const spedizione = 10;

if(totalShoppingCart>50){
  console.log("La spedizione è gratuita con un totale uguale a", totalShoppingCart);
}else{
  console.log("La spedizione ha un costo di 10€ con un totale uguale a", totalShoppingCart+spedizione);
};

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = totalShoppingCart/100*80;

if(totalShoppingCart<50){
  console.log("La spedizione ha un costo di 10€ con un totale uguale a", totalShoppingCart+spedizione);
}else{
  console.log("La spedizione è gratuita con un totale uguale a", totalShoppingCart);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let Numero1 = 1;
let Numero2 = 2;
let Numero3 = 3;

if(Numero1 <= Numero2){
  if(Numero2 <= Numero3){
    console.log(Numero1, Numero2, Numero3);
  }else if(Numero2 > Numero3){
    if(Numero1 <= Numero3){
      console.log(Numero1, Numero3, Numero2);
    }else{
      console.log(Numero3, Numero1, Numero2);
    };
  };
}else if(Numero1 >= Numero2){
  if(Numero1 <= Numero3){
    console.log(Numero2, Numero1, Numero3);
  }else if(Numero1 >= Numero3){
    if(Numero2 >= Numero3){
      console.log(Numero3, Numero2, Numero1);
    }else{
      console.log(Numero2, Numero3, Numero1);
    };
  };
};

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let variabile = "panino";

if(typeof variabile=="number"){
  console.log("Questo è un numero");
}else{
  console.log("Questo non è un numero");
};

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroPariDispari = 7;

if(numeroPariDispari%2===0){
  console.log("Questo è un numero pari");
}else{
  console.log("Questo è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val <10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice(2,1);
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.splice(9, 1, 100);
console.log(array);
