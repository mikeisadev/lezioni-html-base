/**
 * FUNZIONI DI CALLBACK
 * 
 * Vediamo alcune funzioni con callback implementate dentro javascript:
 * 
 * - setTimeout
 * - setInterval
 * - forEach
 */


// 1) setTimeout - impostare un timer ASINCRONO
// DIMOSTRAZIONE: popup per ecommerce, newsletter ecc ecc.

// ESEMPIO setTimeout 1: Mostrare un alert dopo 5 secondi
// setTimeout(
//     function() {
//         alert("Ciao, sono un alert proveniente da setTimeout")
//     }, 
//     5000
// );

// ESEMPIO setTimeout 2: Usare più setTimeout
// setTimeout(
//     () => console.log("PRIMO TEMPO"),
//     2000
// ); // Mostra un log dopo 2 secondi

// setTimeout(
//     () => console.log("SECONDO TEMPO"),
//     5000
// ); // Mostra un log dopo 5 secondi

// setTimeout(
//     () => console.log("TERZO TEMPO"),
//     8000
// ); // Mostra un log dopo 8 secondi

/**
 *  2) setInterval - eseguire più volte la stessa funzione in modo ASINCRONO
 *  definendo un intervallo di tempo
 */

// setInterval(
//     () => console.log("APPAIO A INTERVALLI DI 4 secondi"),
//     4000
// ) 

/**
 * I metodi che hanno come parametro una funzione di callback, posso
 * riprendere il nome di una funzione definita esternamente.
 * 
 * Quindi non devo definire per forza la funzione di callback all'interno
 * dell'argonento.
 */
// setInterval(funzioneCallback, 2000);

// function funzioneCallback() {
//     console.log("Trigger per ogni intervallo di 2 secondi");
// }

/**
 * 3) forEach
 * 
 * forEach è un metodo eseguito quando voglio fare un loop e applicare
 * un metodo di callback per ogni elemento dell'array.
 */

// const array = [4, 6, 10, 12, 15, 18, 19, 23, 78, 12];

// array.forEach((valore, indice) => {

//     console.log("Valore:", valore, "Indice:", indice);

// });

/**
 * Esempi di codice ed esercizi con metodo forEach
 * 
 * RICORDA: forEach è un metodo per gli ARRAY.
 * 
 * 1) ESERCIZIO CON forEach: calcola il valore doppio di ogni ricorrenza di un array.
 */

const duplicaNumero = (n) => n * 2; // Funzione UTILITY per duplicare il numero passato come argomento

[2, 4, 6, 8, 10, 12, 14, 16, 18, 20].forEach((valore, indice) => {
    const singoloNumero = valore;

    const valoreDoppio = duplicaNumero(singoloNumero);

    console.log(valoreDoppio);
});

/**
 * Esercizio.
 * 
 * prendi l'esercizio precedente e riduci tutto a UNA SOLA RIGA.
 */
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20].forEach(n => console.log(duplicaNumero(n)));