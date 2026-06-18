/**
 * Javascript e gli oggetti
 * 
 * Gli oggetti servono per rappresentare strutture
 * dati di qualsiasi complessità e profondità
 */

const cartaIdentità = {
    nome: "Michele",
    cognome: "Mincone",
    codiceFiscale: "DIJEFEI39E9FU3",
    indirizzo: "Strada dell'esaurimento, 123",
    dataNascita: "19/09/2002",
    numeroAuto: 1,
    impiegato: true,
    freelancer: true,
    competenze: [
        "Java", "Javascript", "Python", "React", "Database"
    ],
    esperienzeLavorative: {
        esperienza1: {
            nome: "Full stack developer",
            durata: "",
            azienza: ""
        }
    }
}

// Analizzo in console l'oggetto
console.log(cartaIdentità);
console.table(cartaIdentità);

// Accedere a un singolo valore
// Uso la chiave dell'oggetto per ottenere il valore
// desiderato.
console.log(cartaIdentità.nome);

console.log(cartaIdentità["nome"]);

let chiaveOggetto = "esperienzeLavorative";
console.log(cartaIdentità[chiaveOggetto]);

/**
 * Metodi per oggetti
 * 
 * - Object.keys()
 * - Object.values()
 */

// Ottenere le chiavi dell'oggetto in un array
console.log( Object.keys(cartaIdentità) );

// Ottenere i valori dell'oggetto in un array
console.log( Object.values(cartaIdentità) );

// Otteniamo un array bidimensionale all'interno
// del quale ogni coppia chiave-valore è gruppata
// in un array
console.log( Object.entries(cartaIdentità) )

Object.entries(cartaIdentità).forEach(entry => {
    const chiave = entry[0];
    const valore = entry[1];

    console.log(chiave, valore);
})

/**
 * Creare un oggetto partendo da un array.
 */
const arrayPerOggetto = [
    ["chiave1", "valore"],
    ["chiave2", "valore"],
    ["chiave3", "valore"]
]

console.log( Object.fromEntries(arrayPerOggetto) )



