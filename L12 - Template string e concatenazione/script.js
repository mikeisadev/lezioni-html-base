/**
 * CONCATENAZIONE e TEMPLATE STRING (template di stringa)
 * 
 * 1) CONCATENAZIONE CLASSICA
 * 
 * Utilizzo il simbolo "+" per concatenare le stringhe.
 * 
 * Posso concatenare stringhe tra doppi apici, aggiungere variabili,
 * funzioni ecc. ecc.
 */

let nome = "Michele";
let cognome = "Mincone";
let eta = 23;

// CONCATENAZIONE DI STRINGHE E VARIABILI
console.log("Ciao, io sono " + nome + " " + cognome + ", ho " + eta + " anni.");

// CREO UNA FUNZIONE CHE RITORNA UNA STRINGA DI COMPETENZE
const ottieniCompetenze = () => {
    const competenze = ["PHP", "Javascript", "MySQL", "Java", "C", "Python", "Laravel"];

    return competenze.join(", ");
}

// POSSO CONCATENARE ANCHE UNA O PIù FUNZIONI
console.log("Ciao, io sono " + nome + " " + cognome + ", ho " + eta + " anni. Ho queste competenze: " + ottieniCompetenze() );

/**
 * 2) TEMPLATE STRING (detti anche template literals).
 * 
 * In javascript posso usare un altro metodo per concatenare
 * le stringhe con una sintassi più chiara, senza l'utilizzo
 * del simbolo "+".
 * 
 * I template string implicano l'utilizzo dei BACKTICK `` 
 * (NON apici o doppi apici, SOLO BACKTICK)
 */

// Usando i backtick posso scrivere testo multilinea
console.log(`
    Testo
    multilinea

    Con i backtick (quegli apici 
    all'indietro che vedi all'inizio e alla fine
    del console.log) posso creare
    testo con più righe.

    Non posso fare questo con singoli o 
    doppi apici
`);

/**
 * Con i TEMPLATE STRING o TEMPLATE LITERALS posso 
 * interpolare delle variabili, delle costanti, delle funzioni o
 * delle classi senza usare il simbolo "+".
 */
let tipoPresentazione = "backtick";
let concetto = "template string";

console.log(`
    Questa è una presentazione scritta usando i ${tipoPresentazione},
    tecnica conosciuta come ${concetto}
`);

console.log(`
    Ciao, io sono ${nome} ${cognome}, ho ${eta} anni. Ho queste competenze: ${ottieniCompetenze()}

    Mi piacciono queste macchine: ${['BMW M5', "Vortex GT"].join(" | ")}

    Saluti, 

    a presto

    Data odierna: ${(new Date()).getUTCDate()} / ${(new Date()).getUTCMonth() + 1} / ${(new Date()).getFullYear()}

    Stampa oggetto data: ${new Date()}
`);