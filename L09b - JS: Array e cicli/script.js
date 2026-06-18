/**
 * Javascript: array e cicli
 */

const array = ["mouse", "tastiera", "pc", 
    "laptop", "stereo", "cassa bluetooth", "chiavetta usb"];

// Ciclo for (parte dal primo elemento)
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// ciclo for (partire dall'ultimo elemento)
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i])
// }

// METODO forEach
// array.forEach(function(pizzapane, indice) {
//     console.log(pizzapane, indice);
// })

// METODO map
// array.map(function(valore, indice) {
//     console.log(valore, indice)
// })

// Applicazione del metodo map
const listaNumeri = [1, 10, 20, 30, 40, 50, 60, 70, 80];

const numeriTrasf1 = listaNumeri.map(n => n ** 2)

console.log(numeriTrasf1);

// Piping sugli array
// Concatenare più metodi per array

const risultato = listaNumeri
                      .map(n => n * 0.90) 
                      .map(n => n % 2)
                      .filter(n => n !== 0)

console.log(risultato);

// Funzione map
const numeri = [7, 10, 17, 23, 45, 90, 83];

const trasformato = numeri
                        .map(n => n * n) // Primo ciclo
                        .map(n => n % 2) // Secondo ciclo
                        .filter(n => n === 0) // Terzo ciclo

// Primo tubo (primo ciclo)
// n => n * n
// 7 => 7 * 7     = 49
// 10 => 10 * 10  = 100
// 17 => 17 * 17
// 23 => 23 * 23

// Secondo tubo (secondo ciclo)
// n => n % 2
// 49 => 49 / 2 => 1
// 100 => 100 / 2 => 0

// Terzo tubo (terzo ciclo)
// CONDIZIONE: n === 0
// 1 === 0 -> false -> filtrato
// 0 === 0 -> true  -> passa

console.log(trasformato)

/**
 * Concatenare i metodi: map, filter, reduce
 */
const setNumeri = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const trasf = setNumeri
                .map(n => n / 2)
                .filter(n => (n % 2) === 0)
                .reduce((acc, n) => acc + n)

console.log(trasf);

/**
 * Somma immediata dei numeri di un array
 */
const listaNumeri2 = [4, 3, 2, 1];

console.log(listaNumeri2.reduce((acc, n) => acc + n))