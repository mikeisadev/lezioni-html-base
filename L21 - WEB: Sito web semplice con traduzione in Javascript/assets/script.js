const array = ["michele", "alessandro", "antonio", "marco", "filippo"]
const numeri = [1, 7, 12, 13, 27, 30, 56, 10, 78, 102, 217];

// funzionale
array.filter(item => item.length >= 10).map(item => console.log(item))

const somma = numeri
    .filter(n => n % 2 === 0)
    .reduce((prev, curr) => prev + curr)

console.log(somma);

// procedurale
let numeriPari = [];  // Salvare i numeri pari, filtrandoli da quelli dispari
let sommaTotale = 0;

for (i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 === 0) {
        numeriPari.push(numeri[i])
    }
}

for (j = 0; j < numeriPari.length; j++) {
    sommaTotale += numeriPari[j];
}

console.table({
    "Numeri totali": numeri,
    "Numeri pari filtrati": numeriPari,
    "Somma totale": sommaTotale
});

// programmazione a oggetti
class Calculator {

    constructor(numeri) {
        let pari = this.ottieniPari(numeri);
        let somma = this.somma(pari);

        console.log("Somma prodotta dalla classe Calculator", somma);
    }

    ottieniPari(numeri) {
        let pari = [];

        for (i = 0; i < numeri.length; i++) {
            if (numeri[i] % 2 === 0) {
                pari.push(numeri[i])
            }
        }

        return pari;
    }

    somma(numeri) {
        let somma = 0;

        for (j = 0; j < numeri.length; j++) {
            somma += numeri[j];
        }

        return somma;
    }

}

/**
 * Async-await pattern
 * 
 * Chiamate al server richiedono tanto tempo
 */
async function chiamataAlServer() {
    return new Promise((resolve, reject) => {
        try {
            const response = await fetch("http://127.0.0.1:8080/api/v1/utenti")

            resolve(response.json())
        } catch (e) {
            reject(e)
        }
    });
}

const response = await chiamataAlServer(); // 3-4-5 secondi ---- timeout



new Calculator([2,20, 100, 117, 1017,200, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59]);