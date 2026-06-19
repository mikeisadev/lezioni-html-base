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

// logging
console.log(cartaIdentità);
console.table(cartaIdentità);

// ottenere una proprietà
console.log(cartaIdentità.impiegato)
console.log(cartaIdentità["esperienzeLavorative"])

// come aggiungere una proprietà dentro un oggetto
cartaIdentità["nuovaChiave"] = "nuovo valore";
cartaIdentità["nuovaChiave2"] = "nuovo valore";
cartaIdentità["nuovaChiave3"] = "nuovo valore";
cartaIdentità["nuovaChiave4"] = "nuovo valore";

Object.defineProperty(
    cartaIdentità,
    "linguaggioPreferito",
    {
        value: "Python",
        writable: false
    }
);
cartaIdentità.linguaggioPreferito = [453,24542,54]

Object.defineProperty(
    cartaIdentità,
    "numeroTotaleRigheScritte",
    {value: 89000}
);

console.log(cartaIdentità);

// eliminare una proprietà dentro un oggetto
delete cartaIdentità["nome"];
delete cartaIdentità["cognome"];
delete cartaIdentità["codiceFiscale"];

console.log(cartaIdentità)