/**
 * FUNZIONI JAVASCRIPT.
 * 
 * Possiamo immaginare una funzione come una fabbrica che prende in input delle
 * variabili (PARAMETRI) e eseguono un compito specifico o ritornano un valore.
 * 
 * ANATOMIA DI UNA FUNZIONE:
 * 
 * function nomeFunzione( <PARAMETRI> ) {
 *   UNA O PIù ISTRUZIONI DA ESEGUIRE
 * }
 * 
 * SCOPO DI UNA FUNZIONE
 * 
 * Lo scopo di una funzione è racchiudere istruzioni di codice, che
 * sarebbero ripetive, all'interno di un blocco riutilizzabile.
 * 
 * RIASSUNTO:
 * - definisco la funzione con la parola chiave "function"
 * - implemento la funzione (quindi scrivo tutte le operazioni che quella funzione deve tra parentesi graffe)
 * - vado a invocare la funzione usando le parentesi tonde
 */

// DEFINISCO LA FUNZIONE
function eseguiSomma(a, b) {
    return a + b;
}

// QUI STAMPO NELLA CONSOLE LA DEFINIZIONE DELLA FUNZIONE
console.log( eseguiSomma );

// QUI INVOCO LE FUNZIONI USANDO LE PARENTESI TONDE
console.log( eseguiSomma(20, 40) );
console.log( eseguiSomma(60, 50) );
console.log( eseguiSomma(80, 90) );

/**
 * Le funzioni che ritornano un valore possono essere
 * assegnate a una variabile.
 */
let somma1 = eseguiSomma(20, 40);
let somma2 = eseguiSomma(60, 90);
let somma3 = eseguiSomma(200, 500);

console.log(somma1, somma2, somma3);

/**
 * LE FUNZIONI POSSO CONCATENARLE ALLE STRINGHE
 */
console.log(
    "La somma tra 40 e 80 è: " + eseguiSomma("40", "80")
);

/**
 * ESERCIZIO 1 
 * 
 * RENDIAMO LA FUNZIONE INIZIALE PIù CONTROLLATA
 */

/**
 * ESERCIZIO 2
 * 
 * RENDERE LA FUNZIONE INIZIALE MULTI-OPERAZIONE
 * 
 * INTRODURRE PARAMETRO FACOLTATIVO (PARAMETRO PREDEFINITO)
 */

/**
 * NOTA: fornire informazioni su DATA ORIENTED PROGRAMMING (DOP)
 */