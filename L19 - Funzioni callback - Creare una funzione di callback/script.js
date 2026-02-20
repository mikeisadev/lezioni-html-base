/**
 * FUNZIONE DI CALLBACK
 * 
 * Quando definisco una funzione normalmente accetto n parametri.
 * 
 * Sono abituato a pensare che questi parametri
 * debbano per forza esser numeri, stringhe, array e oggetti.
 * 
 * Mi sbaglio!
 * 
 * Posso anche accettare come parametro una funzione. Il
 * parametro quindi sarà la definizione di quella funzione, che
 * poi richiamo con lo stesso nome dentro la funzione stessa
 * che sto scrivendo.
 */

// VERSIONE HARD
function sommatoriaArray(arrayNumeri, funzioneCallback) {
    let prev = 0;  // vado a conservare in memoria il risultato della somma

    for (let numero of arrayNumeri) {
        prev = funzioneCallback(prev, numero)
    }
    
    return prev;
}

const somma = sommatoriaArray(
    [1, 2, 3, 4, 5],
    (prev, n) => prev + n
);

console.log(somma);

// VERSIONE EASY
function sommaTraDueNumeri(a, b, callback) {
    return callback(a, b);
}

const risultato = sommaTraDueNumeri(10, 20, (n1, n2) => {
    return n1 + n2;
}) ;

console.log(risultato);

// [FACOLTATIVO] VERSIONE SUPER-HARD (con cache)
// SE VOGLIO ME LO STUDIO
const funzioneConCache = () => {
    let cache = {}; // cache - salvo i valori già calcolati per non ricalcolarli di nuovo

    console.log(cache);

    // Ritorno una arrow function
    return (arrayNumeri, funzioneCallback) => {
        // Se la cache è piena posso vedere i suoi valori
        if (Object.entries(cache).length !== 0) {

            // Faccio il loop dell'oggetto passando per le chiavi
            for (const cachedKey in cache) {

                // Prendo il valore dell'oggetto usando la chiave e salvo il valore in cachedItem
                const cachedItem = cache[cachedKey];

                // Vedo se l'elemento in cache è uguale all'array di numeri passato come variabile
                if (JSON.stringify(arrayNumeri) === JSON.stringify(cachedItem)) {
                    console.log("[CACHE] Hai già calcolato questo valore");
                    
                    // Ritorno la chiave dell'oggetto che è la somma precedentemente salvata
                    return cachedKey;
                }
            }
        }
            
        let prev = 0;  // accumulo la somma progressivamente

        // Non ho il valore in cache, calcolalo da zero
        for (let numero of arrayNumeri) {
            prev = funzioneCallback(prev, numero)
        }

        /**
         * Dopo il calcolo salvo i dati della somma in cache:
         * 
         * - come chiave salvo "prev", quindi la somma finale
         * - come valore salvo l'array di numeri
         */
        cache[prev] = arrayNumeri;
        
        return prev;

    }   
}

// Avvio la funzione con la cache
const sommaCache = funzioneConCache();

// Uso la funzione sommaCache (che ha la funzione ritornata da funzioneConCache)
console.log(
    sommaCache([1, 2, 3], (prev, n) => prev + n)
); // Calcolo nuovo

console.log(
    sommaCache([1, 2, 3], (prev, n) => prev + n)
); // Abbiamo in cache questo calcolo! non rifacciamo la somma

console.log(
    sommaCache([1, 2, 3, 5, 6], (prev, n) => prev + n)
); // Calcolo nuovo

console.log(
    sommaCache([1, 2, 3, 5, 6], (prev, n) => prev + n)
); // Abbiamo in cache questo calcolo! non rifacciamo la somma