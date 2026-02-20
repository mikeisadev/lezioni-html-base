/**
 * LET e CONST
 * 
 * - Con javascript ES6 (ES2015) sono stati introdotti LET e CONST
 * - Con l'introduzione di LET e CONST, i problemi di VAR sono stati risolti
 * 
 * LET e CONST sono block-scoped, rispondono bene ai meccanismi
 * asincroni di javascript e NON seguono le logiche dell'hoisting.
 */
let eta = 23;

// let eta = 50; // ERRORE: non posso ridichiarare una variabile con LET

console.log("Eta iniziale", eta);

eta = 25;

console.log("Età cambiata", eta);

/**
 * 1) L'hoisting NON esiste con LET.
 * 
 * Perché LET è block-scoped.
 */

// console.log(ciboPreferito); // ERRORE! Let non subisce hoisting

let ciboPreferito = "Pizza"; // Qui la variabile LET viene dichiarata e assegnata con il suo valore

console.log("Il mio cibo preferito è:", ciboPreferito);

/**
 * 2) Le variabili con LET rispondono bene in caso di 
 * SINCRONISMO e ASINCRONISMO
 */
console.log("FOR LOOP con var - SINCRONO");
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("FOR LOOP con var - ASINCRONO");
for (let i = 0; i <= 5; i++) {
    setTimeout(
        function() {
            console.log(i);
        },
        1000 // 1000 ms -> 1 secondo
    ); // setTimeout = ELEMENTO ASINCRONO con TIMING
}

/**
 * 3) LET è BLOCK SCOPED.
 * 
 * Quando LET viene definito tra parentesi graffe, non è più
 * accessibile dall'esterno.
 */

if (true) { // block scope 1
    let veicoloPreferito = "BMW M5";

    if (true) { // block scope 2
        let attorePreferito = "Al Pacino";

        console.log(attorePreferito); // Console.log funziona perché lo richiamo nello scope della variabile LET
    }

    // console.log(attorePreferito); // ERRORE - Fuori dal block-scope
}

// console.log(attorePreferito); // ERRORE - Fuori dal block-scope

// console.log(veicoloPreferito); // ERRORE - Fuori dal block-scope

/**
 * CONST è una COSTANTE
 * 
 * Uso const per valori che non posso riassegnare.
 */

const PI = 3.14;

// PI = 5; // ERRORE NON POSSO RIASSEGNARE VALORI A UNA COSTANTE

console.log(PI);