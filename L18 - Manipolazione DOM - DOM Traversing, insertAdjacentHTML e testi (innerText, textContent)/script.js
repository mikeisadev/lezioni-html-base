/**
 * DOM TRAVERSING
 * 
 * Attraversare il DOM usando metodi come:
 * - children
 * - parentNode
 */

const contenitore = document.querySelector('.contenitore');

// Facendo il console.log vedo l'elemento selezionato
console.log(contenitore);

// Ora usando la proprietà "children" posso vedere gli elementi figli
console.log(contenitore.children);

// Ora selezioniamo il parent element usando la proprietà parentElement
console.log(contenitore.parentElement);

/**
 * INSERIRE/INIETTARE HTML con insertAdjacentHTML
 * 
 * beforebegin -> prima dell'inizio dell'elemento
 * afterbegin -> all'inizio dell'elemento ma dentro di esso
 * 
 * beforeend -> prima della fine dell'elemento
 * afterend -> dopo la fine dell'elemento (fuori di esso alla fine)
 */
const contenitoreMaster = document.querySelector("#master-contenitore1");

contenitoreMaster.insertAdjacentHTML(
    "beforeend",  // Prova a cambiare tra beforeend e afterbegin
    `
        <div class="contenitore">
            <p>ELEMENTO INIETTATO</p>
            <p class="item">item 1</p>
            <p class="item">item 2</p>
            <p class="item">item 3</p>
            <p class="item">item 4</p>
            <p class="item">item 5</p>
        </div>
    `
)

/**
 * Proprietà innerText e textContent.
 * 
 * Una volta che ho selezionato un elemento posso prendere
 * il suo testo con innerText oppure impostarlo.
 * 
 * Lo stesso posso farlo con textContent.
 */
const manipolaIlTesto = document.querySelector("#manipolaIlTesto");

// Entrambi restituiscono il testo del titolo selezionato.
console.log(manipolaIlTesto.textContent);
console.log(manipolaIlTesto.innerHTML);

manipolaIlTesto.innerText = "SEI STATO HACKERATO, FINIRAI MALE!";

manipolaIlTesto.textContent = "DJEODJDIJEJI";