/**
 * MANIPOLAZIONE DEL DOM IN JAVASCRIPT
 * 
 * La manipolazione del DOM è un argomento molto
 * ampio che include tanti sotto-argomenti:
 * 
 * 1) Selezione degli elementi del DOM              [x]
 * 2) Manipolazione/modifca del DOM (innerHTML)     [x]
 * 3) Modificare attributi e classi                 [x]
 * 4) Modificare CSS inline                         [x]
 * 5) Gestione degli eventi                         [VEDI LEZIONE 16]
 * 6) Accedere alle strutture del DOM con metodi specifici
 */

/**
 * SELEZIONE DEGLI ELEMENTI DEL DOM
 * 
 * Uso querySelector e dentro uso gli stessi selettori che
 * uso in CSS.
 */
const quadrato = document.querySelector(".square");
const quadratoUnico = document.querySelector("#quadrato-unico");

// Vediamo nella console gli elementi HTML selezionati
console.log("ELEMENTI HTML SELEZIONATI");
console.log(quadrato);
console.log(quadratoUnico);

/**
 * MANIPOLAZIONE DEL DOM
 * 
 * Dopo che ho selezionato i miei elementi, posso
 * manipolarli in vari modi:
 * 
 * - cambiare classi e attributi
 * - cambiare css inline
 * - iniettare HTML personalizzato
 */

// aggiungiamo una classe (nota: utilizzo classList e poi i meto "add" e "remove")
setTimeout(
    function() {
        // Aggiungo una nuova classe
        quadrato.classList.add('square-other-color');

        // Rimuovo la vecchia classe
        quadrato.classList.remove("square");
    },
    2000
);

// aggiungere css inline
// Una volta selezionato l'oggetto, entro nella proprieta "style"
// e da li scrivo le mie proprietà CSS come se stessi scrivendo
// CSS vero.
setTimeout(
    function() {
        quadrato.style.borderRadius = "20px";

        quadrato.style.border = "5px solid blue";
    },
    5000
);

/**
 * Altro esempio di modifica degli attributi con javascript
 * 
 * DISATTIVARE UN PULSANTE
 */
const pulsante = document.querySelector(".pulsante-autodisattivante");

setTimeout(
    () => {
        pulsante.setAttribute("disabled", true)
    }, 
    4000
);