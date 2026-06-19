/**
 * Javascript: oggetti avanzato
 */

// Metodo 1: creare un oggetto col metodo diretto
const casa1 = {
    nome: "Casa 1",
    grandezza: 100,
    unitaMisura: "mq",
    posizione: {
        lat: 34.2324242,
        lon: 13.1311313
    }
}

casa1.nome = "Casa 1 aggiornata"

console.log(casa1)

// Metodo 2: creare un oggetto con Object.create
// e modificare il livello di accessibilità delle
// singole proprietà
const casa2 = Object.create({}, {
    nome: { value: "Casa 2", writable: false },
    grandezza: { value: 0, writable: false },
    indirizzo: { value: "Strada del programmatore", writable: true },
    posizione: { value: {
        lat: 46.25456,
        lon: 24.42433534
    }, writable: false }
})

casa2.nome = "Casa 2 aggiornata"
casa2.grandezza = 353
casa2.indirizzo = "rejr3r4jr9"
casa2.posizione = "ciao, ti ho sovrascritto l'oggetto"

console.log(casa2);

/**
 * I metodi di protezione dell'oggetto.
 * 
 * - Object.seal()
 * - Object.freeze()
 */
const prototipo = {
    nome: "Drone 1",
    peso: 300,
    unita: "kg",
}

// il metodo seal rende l'oggetto non-estendibile e
// quindi non posso aggiungere nuove proprietà ma
// posso modificare quelle esistenti
Object.seal(prototipo);

// Il metodo freeze congela totalmente l'oggetto
// rendendolo immutabile
// Object.freeze(prototipo);

prototipo.nome = "Drone 2"
prototipo.munizioni = "Cal. 50"

console.log(prototipo);