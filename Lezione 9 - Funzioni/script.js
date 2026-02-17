/**
 * USCITA LUIGI MASSI ALLE 11:47
 * ENTRATA LUIGI MASSI 12:30
 * 
 * USCITA ELENA 15:17
 */

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
console.log("[DEFINIZIONE FUNZIONE]")
console.log( eseguiSomma );

// QUI INVOCO LE FUNZIONI USANDO LE PARENTESI TONDE
console.log("[ESECUZIONE SOMME]");
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

console.log("[ALTRE SOMME - FUNZIONE DENTRO LA VARIABILE]");
console.log(somma1, somma2, somma3);

/**
 * LE FUNZIONI POSSO CONCATENARLE ALLE STRINGHE
 */
console.log("[CONCATENARE UNA FUNZIONE IN UNA STRINGA]");
console.log(
    "La somma tra 40 e 80 è: " + eseguiSomma(40, 80)
);

/**
 * ESERCIZIO 1 
 * 
 * RENDIAMO LA FUNZIONE INIZIALE PIù CONTROLLATA E PIù SICURA
 * 
 * NOTA FONDAMENTALE: nota bene i blocchi condizionali "if".
 * Vedi che dentro usano il "return"? Il "return" blocca
 * l'esecuzione della funzione.
 * 
 * In questo caso i blocchi "if" vanno a validare i parametri.
 * 
 * Quindi se questi parametri non sono validi vado a usare
 * il "return" per bloccare l'esecuzione del programma 
 * perché poi l'operazione di somma sarebbe totalmente sbagliata.
 */
function sumImproved(a, b) {
    // Vedo se i valori sono stati inseriti
    if (!a) {
        return console.error("Devi inserire il primo numero");
    }

    if (!b) {
        return console.error("Devi inserire il secondo numero");
    }

    // Controllo se i parametri sono convertibili in NUMERI
    if (isNaN( Number(a) )) {
        return console.error("Il primo parametro non è un numero");
    }

    if (isNaN( Number(b) )) {
        return console.error("Il secondo parametro non è un numero");
    }

    // Controllo sul tipo di dato (DEVE ESSERE NUMBER)
    if (typeof a !== "number" || typeof b !== "number") {
        return console.error("I tipi di dati inseriti sono scorretti. Entrambi i parametri devono essere di tipo 'number'");
    }

    return a + b;
}

console.log("[FUNZIONE SOMMA MIGLIORATA]");
console.log(sumImproved(50, 80));

/**
 * ESERCIZIO 2
 * 
 * RENDERE LA FUNZIONE INIZIALE MULTI-OPERAZIONE
 * 
 * INTRODURRE PARAMETRO FACOLTATIVO (PARAMETRO PREDEFINITO)
 * 
 * NOTA FONDAMENTALE: in questa funzione abbiamo implementato la
 * GUARD CLAUSE. Quindi usciamo subito dall'esecuzione del programma
 * usando "return" dentro il blocco condizionale "if".
 * 
 * Al contrario di prima, uso la GUARD CLAUDE non per validare,
 * ma per uscire il prima possibile dall'esecuzione del programma,
 * dando quanto prima possibile una risposta all'utente.
 */
function doOperation(a, b, type) {
    if (type === "*") return a * b;

    if (type === "/") return a / b;
    
    if (type === "+") return a + b;
    
    if (type === "-") return a - b;

    return console.warn("Operazione non valida. Le operazioni consentite sono: +, -, *, /");
}

console.log("[FUNZIONE CON TUTTE E QUATTRO LE OPERAZIONI]");
console.log( doOperation(60, 70, "+") );

/**
 * FUNZIONE VARIADICA (FUNZIONE CON ARGOMENTI INFINITI)
 */
function sommaInfinita(...numeri) {
    let somma = 0;

    for (let numero of numeri) {
        somma += numero;
    }

    return somma;
}

console.log("[SOMMA CON NUMERI INFINITI]");
console.log( sommaInfinita(70, 30, 23, 67, 1, 2, 3, 67) );

/**
 * TIPI DI FUNZIONI:
 * - funzioni normali o semplici                        [x]
 * - funzioni variadiche                                [x]
 * - funzioni anonime                                   [x]
 * - funzioni espressioni (funzione dentro costante)    [x]
 * - arrow function                                     []
 */

/**
 * FUNZIONE ESPRESSIONE
 * 
 * Definizione pratica: non è nient'altro che una funzione anonima
 * dentro una costante.
 * 
 * Quindi è corretto dire che tutte le FUNZIONI ESPRESSIONI sono
 * di fatto ESPRESSIONI, dette anche STATEMENT in inglese. Ogni
 * ESPRESSIONE o STATEMENT termina col ";"
 */

/**
 * Noi siamo abituati a pensare che "const" serva solo a 
 * contenere dei valori, un po' come "let".
 * 
 * Con la differenza che CONST non può mutare il suo valore, quindi
 * non puoi riassegnare valori a una costante.
 */
const pigreco = 3.14;
const fattoreConversioneCelsiusFarenheit = 5/9;
const IVA22 = 22;
const IVA10 = 10;

/**
 * Invece, posso tranquillamente assegnare una funzione a una
 * costante. 
 * 
 * Però la funzione deve essere ANONIMA, quindi non deve avere
 * nome.
 * 
 * Le funzioni anonime definite dentro una costante prendono il nome
 * di FUNZIONE ESPRESSIONE e le richiamo (o invoco) usando il nome
 * della costante stessa.
 */
const funzioneDentroCostante = function(a, b) {
    return a * b;
};

console.log('[ESEMPIO DI UNA FUNZIONE ESPRESSIONE]');
console.log(funzioneDentroCostante);

console.log(funzioneDentroCostante(5, 4));

/**
 * ARROW FUNCTION (FUNZIONI CON LA FRECCIA)
 * 
 * Le ARROW FUNCTION sono semplicemente delle funzioni anonime 
 * con una sintassi più corta.
 * 
 * Esistono due sottotipi di ARROW FUNCTION:
 * - con le parentesi graffe: usate quando la funzione è su più righe
 * - senza parentesi graffe: usate quando la funzione è su una sola riga
 */
const esempioArrowFunction = (a, b) => {
    return a * b;
};

console.log('[ESEMPIO DI ARROW FUNCTION]');
console.log(esempioArrowFunction);

/**
 * ESEMPIO DI ARROW FUNCTION A UNA RIGA.
 * 
 * NOTA:
 * - NON CI SONO PIù LE PARENTESI GRAFFE
 * - L'ELEMENTO FRECCIA "=>" SIGNIFICA "return"
 */
const arrowFunctionUnaRiga = (a, b) => a / b;

console.log('[ESEMPIO ARROW FUNCTION SINGOLA RIGA]');
console.log(arrowFunctionUnaRiga);

/**
 * Le funzioni definite con "function" subiscono l'hoisting.
 * 
 * Quindi si comportano come "var".
 * 
 * Mentre le funzioni ESPRESSIONE non subiscono per nulla l'effetto
 * dell'hoisting, quindi non posso richiamarle prima della 
 * loro definizione.
 */

/**
 * CONCENTTO DI AMBIGUITà IN PROGRAMMAZIONE E L'IMPORTANZA DELLA
 * SOLIDITà DEL SOFTWARE.
 * 
 * Segui a cascata la logica di questo esempio:
 * 1) Elementi del linguaggio che fanno tutto, quindi ad esempio "var" e "function...
 * 2) creano ambiguità nel software...
 * 3) L'ambuigità nel software crea fragilità...
 * 4) Software fragile = BUG, software non scalabile, falle di sicurezza, codice poco gestibile e mantenibile
 * 
 * Quindi "function" e "var" creano ambuità nel software.
 * 
 * Mentre "let", "const" e le "funzioni espressione" creano molto più
 * ordine e riducono drasticamente l'ambuita.
 * 
 * A questo punto seguiamo la logica inversa:
 * 1) Meno ambiguità = più ordine e chiarezza
 * 2) Maggior ordine e chiarezza = meno fragilità
 * 3) Meno fragilità = meno bug, codice più scalabile, meno falle di sicurezza, codice più gestibile
 * 
 * Però resta sempre valido il discorso che devo saper scrivere
 * codice in modo organizzato e chiaro.
 */

/**
 * NOTA: fornire informazioni su DATA ORIENTED PROGRAMMING (DOP)
 */