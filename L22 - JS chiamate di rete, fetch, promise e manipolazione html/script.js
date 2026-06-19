/**
 * Chiamate di rete in Javascript.
 * 
 * - Fetch API: funzione fetch: come eseguire una chiamata di rete
 * - Oggetti promise: come ottenere i dati da una promise
 * - funzioni asincrone: gestire la programmazione asincrona con async/await
 * 
 * 1) Fetch API
 * - chiamate HTTP: GET, POST, DELETE, PUT, PATCH
 * - funzione fetch("url")
 * - restituisce oggetti Promise
 * 
 * 2) Promise
 * - Promise.all([fetch(), fetch()]) - tema avanzato da vedere più avanti
 * 
 * 3) Funzioni asincrone
 */

// Chiamata di rete con Fetch per ottenere i dati da un server remoto
const request = fetch('https://dummyjson.com/users');

// Qui usiamo "then" per ottenere dati dalla Promise
// NOTA: la fetch ritorna l'oggetto Promise che mi da acesso
// alle funzioni ".then" per aspettare che il server
// risponda con tutti i dati
request
    // Convertiamo in oggetto javascript la risposta del server
    .then(r => r.json())

    // Lavoriamo l'oggetto javascript
    // e inseriamo i dati nella pagina HTML
    .then(r => {
        console.log(r);

        // Ottengo la chiave "users" dalla risposta del server
        const utenti = r.users;

        console.log("Utenti sono:", utenti.length);

        // Inizializzo una variabile per accumulare HTML.
        let grigliaHtml;

        // Apro il contenitore padre della griglia
        grigliaHtml = "<div class='griglia-utenti'>";

        // Colonne
        grigliaHtml += "<div class='column'>ID</div>";
        grigliaHtml += "<div class='column'>Nome</div>";
        grigliaHtml += "<div class='column'>Cognome</div>";

        // Inserimento righe e celle con i dati
        for (const utente of utenti) {
            grigliaHtml += `<div class="cell">${utente.id}</div>`;  // Windows: Alt + 96 - Mac: Option + 9
            grigliaHtml += `<div class="cell">${utente.firstName}</div>`;
            grigliaHtml += `<div class="cell">${utente.lastName}</div>`;
        }

        // Chiudo il contenitore padre della griglia
        grigliaHtml += "</div>";

        // Eseguo il console.log dell'HTML generato con il nostro algoritmo
        console.log(grigliaHtml);

        // Stampa HTML nella pagina dentro al body.
        document.body.innerHTML += grigliaHtml;
    })

console.log(request);