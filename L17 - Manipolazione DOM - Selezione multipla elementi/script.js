/**
 * SELEZIONE ELEMENTI MULTIPLA DEL DOM
 * 
 * Dentro Javascript ho dei metodi per selezionare
 * elementi multipli della mia pagina HTML o DOM.
 * 
 * Questi metodi si possono estrapolare dall'oggetto
 * "document" e sono i seguenti:
 * - document.getElementsByClassName()
 * - document.getElementsByTagName()
 * - document.querySelectorAll()
 * 
 * Tutti questi metodi sono detti anche metodi del DOM.
 * 
 * Quindi metodi che estrapolo dall'oggetto "document"
 * per selezionare elementi.
 * 
 * I metodi per selezionare gli elementi del DOM si
 * dividono in due categorie:
 * 
 * - SELEZIONE SINGOLA:
 *      - document.getElementById() -> sempre 1 elemento (CON ID)
 *      - document.querySelector() -> sempre 1 elemento (CON SELETTORE CSS)
 * 
 * Queste funzioni ritornano l'elemento HTML.
 * 
 * - SELEZIONE MULTIPLA:
 *      - document.getElementsByClassName() -> tutti gli elementi con quella classe
 *      - document.getElementsByTagName()
 *      - document.querySelectorAll() -> tutti gli elementi con il settore CSS
 * 
 * Queste funzioni ritornano una collezione di elementi HTML detta anche NodeList.
 */

/**
 * SELETORI JAVASCRIPT SINGOLI
 */
const masterContenitoreUno = document.getElementById("master-contenitore1");
const masterContenitoreDue = document.querySelector("#master-contenitore2");

console.log(masterContenitoreUno);
console.log(masterContenitoreDue);

/**
 * SELETTORI JAVASCRIPT MULTIPLI
 * 
 * Uso document.querySelectorAll per selezionare tutti
 * gli elementi che corrispondono al selettore CSS tra 
 * parentesi.
 * 
 * document.querySelectorAll ritorna NodeList che è ciclabile
 * con il metodo forEach
 */
const contenitori = document.querySelectorAll(".contenitore");

console.log(contenitori);

contenitori.forEach(contenitore => {
    contenitore.style.backgroundColor = "blueviolet";
});

/**
 * document.getElementsByClassName(scrivo la classe qui)
 * 
 * Questo metodo prende tutti gli elementi con quella classe
 * ma ritorna HTMLCollection che NON è ciclabile con forEach
 * 
 * Quindi devo ricreare l'array con le parentesi quadra []
 * e dentro faccio lo spread ... della variabile
 * che contiene document.getElementsByClassName("nome classe")
 */
const contenitoriAltraSelezione = document.getElementsByClassName("contenitore");

console.log(contenitoriAltraSelezione);

// NON POSSO CICLARE UNA LISTA DI ELEMENTI PRESA CON
// GETELEMENTSBYCLASSNAME PERCHé RITORNA HTMLCollection
// contenitoriAltraSelezione.forEach(contenitore => {
//     contenitore.style.borderRadius = "20px";
// }); 

// DEVO PRIMA CONVERTIRE IN ARRAY USANDO LO SPREAD OPERATOR
[...contenitoriAltraSelezione].forEach(contenitore => {
    contenitore.style.borderRadius = "20px";
}); 

// RICORDA: puoi conventire in Array usando anche Array.from()
Array.from(contenitoriAltraSelezione).forEach(contenitore => {
    contenitore.style.border = "6px solid orange";
}); 

/**
 * document.getElementsByTagName()
 * 
 * Inserisco il tag che voglio prendere e me li restituisce
 */
const tuttiITagP = document.getElementsByTagName("p");

/**
 * ESERCIZIO:
 * 
 * Facciamo finta di voler incrementare la grandezza
 * di tutti i paragrafi della pagina.
 * 
 * Procedimento logico:
 * - seleziono tutti i tag P (document.getElementsByTagName)
 * - converto in array e aumento il carattere con lo stile inline
 */

Array.from(tuttiITagP).forEach(p => {
    p.style.fontSize = "22px"
    p.style.fontWeight = "bold";
});