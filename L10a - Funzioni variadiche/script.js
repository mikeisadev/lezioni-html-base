/**
 * Funzioni variadiche in javascript.
 * 
 * Sono funzioni che accettano argomenti infiniti.
 */

// Funzione normale: ha argomenti FINITI
function somma(a, b) {
    return a + b;
}

console.log(somma(10, 10, 20, 60, 100))

// Funzione variadica: ha argomenti INFINITI
function sommaInfinita(...numeri) {
    console.log(numeri);

    let somma = 0;

    for (const numero of numeri) {
        somma += numero;
    }

    return somma;
}

console.log(sommaInfinita(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140))

// NOTA: LO SPREAD OPERATOR NEGLI ARRAY HA UN'ALTRA FUNZIONE
// NEGLI ARRAY LO SPREAD OPERATOR SERVE PER UNIRE
// UNO O PIù ARRAY
// Nelle funzioni lo spread operator serve a creare
// funzioni variadiche (con argomenti infiniti)
const arr1 = ["michele", "luca"]
const arr2 = ["giovanni", "marco"];

console.log([...arr1, ...arr2])


