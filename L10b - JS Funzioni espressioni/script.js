/**
 * Javascript: funzioni espressioni.
 * 
 * Tipi funzioni viste:
 * - funzioni standard [x]
 * - funzioni variadiche [x]
 * 
 * Altre tipologie di funzione:
 * - funzioni anonime (senza nome) [x]
 * - funzioni espressioni [x]
 *      - funzioni arrow:
 *          - funzioni arrow singola linea [x]
 *          - funzioni arrow multilinea.   [x]
 * 
 * Funzioni anonime hanno tre forme:
 * 
 * 1) Forma standard
 * function () {
 * 
 * }
 * 
 * 2) Forma arrow con body
 * () => {
 * 
 * }
 * 
 * 3) Forma arrow
 * () => 
 */

// Funzione standard
function somma(a, b) {
    return a + b;
}

console.log(somma(10, 20))

// Funzione anonima: funzione senza nome
setTimeout(
    () => alert("Ciao, il timer è scaduto"), 
    1e6
);

document.addEventListener("click", () => {
    alert("Hai cliccato la pagina")

    for (let i = 0; i < 5; i++) {
        document.body.innerHTML += "<p>" + i +"</p>";
    }
})

// Funzione espressione: costante + funzione anonima
const sottrazione = function(a, b) {
    return a - b;
}

console.log(sottrazione(10, 20))

// Funzione espressione arrow inline
const moltiplicazione = (a, b) => a * b;

// Funzione espressione arrow con body function
const divisione = (a, b) => {
    return a / b;
}

console.log("Moltiplicazione", moltiplicazione(10,20))
console.log("Divisione", divisione(10, 10))