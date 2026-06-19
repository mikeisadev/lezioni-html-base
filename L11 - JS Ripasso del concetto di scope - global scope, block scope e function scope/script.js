/**
 * RIPASSO DEL CONCETTO DI SCOPE
 * 
 * Il concetto di scope è fondamentale per scrivere correttamente software in Javascript.
 * 
 * Dobbiamo pensare allo scope come una serie di contenitori.
 * 
 * Però dobbiamo considere che il contenitore più grande è sempre presente, questo contenitore è
 * semplicemente il file javascript stesso, detto anche GLOBAL SCOPE.
 * 
 * Nel global scope definisco variabili globali, funzioni globali e tutta una serie di dichiarazioni
 * o espressioni. 
 * 
 * In Javascript creo scope isolati o scope a blocchi quando utilizzo un paio di parentesi graffe.
 * 
 * Le parentesi graffe sono tipiche delle funzioni, dei blocchi if, dei blocchi switch e dei cicli.
 * 
 * Quando definisco un paio di parentesi graffe definisco uno scope interno al global scope.
 * 
 * Se definisco un blocco if abbiamo un "BLOCK SCOPE".
 * 
 * Anche se definisco una funzione ho un "BLOCK SCOPE", ma è meglio definito come "FUNCTION SCOPE".
 * 
 * RIFERIMENTI E APPROFONDIMENTI:
 * - W3SCHOOLS "SCOPE": https://www.w3schools.com/js/js_scope.asp
 * - MDN DOCS "SCOPE": https://developer.mozilla.org/en-US/docs/Glossary/Scope 
 */

const PI = Math.PI; // Questa è una costante globale

let indirizzoEmail = "emailesempio@esempio.com" // Variabile globale.

const funzioneGlobale = (a, b) => {
    return a + b;
}; // Questa è una funzione globale.

/**
 * BLOCK SCOPE.
 * 
 * Quando vado a scrivere delle parentesi graffe, come nell'esempio qui sotto con il blocco if,
 * definisco un contenitore locale detto anche BLOCK SCOPE.
 * 
 * Il BLOCK SCOPE limita la visibilità all'esterno, quindi nel global scope, delle variabili.
 * 
 * Quindi se definisco variabili con LET o costanti con CONST queste non saranno accessibili
 * all'esterno. Ma VAR fa eccezione, perché è accessibile esternamente.
 * 
 * Le variabili definite in un BLOCK SCOPE sono dette VARIABILI LOCALI.
 * 
 * CONCETTO RIASSUNTO: il block scope limita la visibilità delle variabili
 * scritte con LET e le costanti CONST. Quindi se le richiamo
 * dall'esterno ottengo un errore. VAR è un'eccezione, infatti
 * questo tipo di variabili non solo subiscono l'HOISTING, ma non
 * rispettano i limiti di visibilità del BLOCK SCOPE. Qui sotto
 * puoi provare questo aspetto di Javascript: la variabile con
 * VAR la vedrai in console, mentre la variabile con LET da
 * errore e non è visibile dall'esterno (lo stesso si applica
 * a CONST).
 */

if (true) { // Parentesi graffe!? Bene, questo è un block scope
    var variabile = 25;

    // Inaccessibili nello scope globale
    let altraVariabile = 500;
    const costanteLocale = 90;
}

console.log(variabile); // VAR esce dal BLOCK SCOPE ed è visibile esternamente

// console.log(altraVariabile); // ERRORE! Let non può uscire dal BLOCK SCOPE

// console.log(costanteLocale); // ERRORE per lo stesso discorso che abbiamo fatto su LET

/**
 * FUNCTION SCOPE.
 * 
 * Quando a limitare lo scope sono delle parentesi graffe di 
 * una definizione di funzione, parliamo di FUNCTION SCOPE.
 * 
 * Le variabili dichiarate in un FUNCTION SCOPE sono 
 * INACCESSIBILI dall'esterno, qualsiasi esse siano: var,
 * let e const.
 * 
 * Tutte le variabili definite in un FUNCTION SCOPE si chiamano
 * VARIABILI LOCALI.
 */
function generaPresentazione() {
    var nome = "Michele";
    let cognome = "Mincone";
    const eta = 23;
};

// console.log(nome);
// console.log(cognome);
// console.log(eta);