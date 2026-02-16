/**
 * NOTA: Questo è un file Javascript esterno.
 * 
 * Approfondiamo var e perché non si usa più.
 * 
 * Introduzione di let e const, cosa risolvono e come si usano.
 */

var nome = "Michele"; // Vecchio modo di scrivere le variabili

/**
 * L'utilizzo di "var" espone il mio software frontend a diversi
 * bug e fragilità, specialmente su software di media e grossa scala.
 * 
 * Vediamo alcuni bug e problemi dati da VAR.
 * 
 * 1) Redeclaration silenziosa (ridichiarazione variabile)
 * 
 * ridichiarando la variabile con var:
 * - rendo il mio software meno debuggabile
 * - ho più difficoltà di organizzazione su software medio/grandi
 * - se dichiaro più volte la variabile non ho errori in console
 */
// var nome = "Antonio";

/**
 * 2) Bug nei loop asincroni
 */

// Esecuzione sincrona (TUTTO OK)
console.log("For loop sincrono con VAR");
for (var i = 0; i <= 5; i++) {
    console.log(i);
}

/**
 * Esecuzione asincrona (QUALCOSA NON VA)
 * 
 * Essendo che "var" ha lo stesso riferimento in memoria, quando
 * si presenta un elemento asincrono ti da l'effettivo risultato
 * dell'incremento. Quindi "var" non crea il "block scope" (come
 * fa invece "let") ma il "global scope" con il risultato che
 * le funzioni asincrone vengono eseguite tutte e "var" si prende
 * il risultato finale delle operazioni asincrone.
 * 
 * Quindi con "var" non posso entrare nei "calcoli asincroni" e
 * prendere i valori calcolati di volta in volta.
 * 
 * L'ELEMENTO ASINCRONO è: setTimeout
 */
console.log("For loop asincrono con VAR");
for (var i = 0; i < 5; i++) {
    setTimeout(
        function() {
            console.log(i)
        },
        1000 // 1000 ms -> 1 secondo
    );
} // Risultato in console -> "6"

/**
 * 3) Scope di funzione e non di blocco
 * 
 * "VAR" non è block-scoped. "LET" è block-scoped.
 * 
 * Come lo posso dimostrare?
 * 
 * Dichiarando una variabile con "var" in un blocco come ad 
 * esempio "if" e provo a richiamare successivamente la variabile.
 */
if (true) {
    var varVariabile = "Michele";
}

console.log("[DIMOSTRAZIONE GLOBAL-SCOPE VAR]", varVariabile);


/**
 * Le variabili con VAR subiscono HOISTING.
 * 
 * Quindi: tutte le variabili con var è come se fossero richiamate
 * all'inizio del file e dichiarate, ma il loro valore non viene
 * ancora assegnato. 
 * 
 * Per cui, posso fare console.log di una variable con "var" prima
 * della sua dichiarazione ottenendo "undefined" e non "Declaration error", che
 * ho con "let" ("let" NON subisce hoisting).
 * 
 * Il valore alle variabili var viene assegnata nella riga in cui
 * c'è la dichiarazione.
 */
console.log("[HOISTING VAR - UNDEFINED = INIZIALIZZATO]", variabileVar);

var variabileVar = "ciao";

console.log("[VAR CON VALORE ASSEGNATO]", variabileVar);