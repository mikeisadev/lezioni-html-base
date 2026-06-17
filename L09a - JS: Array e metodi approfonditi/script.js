/**
 * Applicazione diretta dei principali metodi sugli array
 */

const listaProdotti = ["mouse", "tastiera", "pc", 
    "laptop", "stereo", "cassa bluetooth", "chiavetta usb"];

// Analisi array
console.log(listaProdotti);
console.table(listaProdotti);

// Push: aggiunge elementi alla fine dell'array
listaProdotti.push("iPhone", "arduino", "microfono", "macbook");
console.log(listaProdotti);

// Pop: elimina un solo elemento nell'array partendo dalla fine
const prodottoEl1 = listaProdotti.pop();
const prodottoEl2 = listaProdotti.pop();
const prodottoEl3 = listaProdotti.pop();

console.log(listaProdotti);
console.log(prodottoEl1, prodottoEl2, prodottoEl3)

// Unshift: aggiunge elementi all'inizio dell'array
listaProdotti.unshift("webcam", "hardisk", "ssd", "stampante");
console.log(listaProdotti);

// Shift: rimuove un elemento all'inizio dell'array
listaProdotti.shift()
console.log(listaProdotti);

/**
 * Unione di due o più array
 * 
 * - concat .concat()
 * - spread operator (...)
 */

const classe1 = ["Marco", "Fabrizio", "Alessio"];
const classe2 = ["Ugo", "Kevin", "Mario"];
const classe3 = ["Giovanni", "Luca"];
const classe4 = ["Davide", "Giacomo", "Antonio", "Luigi"];

let scuola = [];

// // metodo concat
// scuola = scuola.concat(classe1)
//             .concat(classe2)
//             .concat(classe3)
//             .concat(classe4);

// Spread operator (...)
scuola = [...classe1, ...classe2, ...classe3, ...classe4]

console.log(scuola)

/**
 * Generare array da una stringa e implodere un array
 * in una stringa.
 * 
 * - join -> trasformare array in stringa
 * - split -> trasformare stringa in array
 */
console.log( scuola.join(" /====/ ") );

const linguaBrowser = "it-IT";
const linguaBrowserArr = linguaBrowser.split("-")

console.log(linguaBrowserArr[1])

/**
 * Convertiamo una stringa lunga in array
 */
const nomiStringa = "Michele | Giovanni | Paolo | Marco | Luca | Gianluca | Alberto | Pasquale";
console.log(nomiStringa.split(" | "))

/**
 * Ottenere la lunghezza di un array
 */
console.log(linguaBrowserArr.length);
console.log("Nella scuola ci sono", scuola.length, "studenti");