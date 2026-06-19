/**
 * MANIPOLAZIONE DEL DOM IN JAVASCRIPT
 * 
 * Gestione degli eventi.
 * 
 * Dopo che ho selezionato un elemento HTML su javascript, 
 * posso tracciare un evento su quell'oggetto specifico
 * e innescare una funzione.
 * 
 * Esistono vari tipi di eventi: pagina caricata (DOMContentLoaded),
 * click, scroll, keyup (rilascio un tasto della tastiera), keydown (premo un taso)
 * mouseover (mouse su un elemento), oninput (intercettare la battitura dei caratteri in un input)
 * 
 * https://www.w3schools.com/js/js_events.asp
 * 
 */

/**
 * 1) Seleziono l'elemento.
 * 
 * NOTA: posso usare getElementById per selezionare l'id di un
 * elemento html, lo stesso posso fare con querySelector ricordandomi
 * di usare il cancelletto (#nomeId)
 */

// const pulsante = document.querySelector('#pulsanteMagico');
const pulsante = document.getElementById('pulsanteMagico');

/**
 * 2) Aggiungo l'evento "click" sul pulsante
 * tramite funzione addEventListener.
 * 
 * La funzione addEventListener accetta due argomenti:
 * - tipo di evento (click)
 * - funzione di callback (dove faccio quello che voglio)
 */
pulsante.addEventListener("click", () => {
    alert("Sono un alert triggerato tramite addEventListener su file js esterno")
});


/**
 * ESERCIZIO - generiamo un quadrato
 */
const pulsanteGeneratore = document.querySelector("#generaQuadrato");

pulsanteGeneratore.addEventListener("click", () => {
    const boxQuadrati = document.querySelector('#boxMagico');

    boxQuadrati.innerHTML += "<div class='square'></div>";
});