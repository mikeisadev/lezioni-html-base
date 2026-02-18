/**
 * ARRAY e OGGETTI.
 */

/**
 * 1. ARRAY
 * 
 * CONCETTO: L'array è una lista di elementi
 * 
 * Più precisamente l'array è una struttura di dati
 * che può avere più dimensioni.
 * 
 * RICORDA che per accedere al primo elemento dell'array
 * si usano le parentesi [] e il numero ZERO, che indica
 * il primo indice e quindi il primo valore dell'array.
 * 
 * SINTASSI: Gli array si scrivono con le 
 * parentesi quadre.
 */
let array1 = [1, 2, 3, 4, 5, 6];

// Negli array Javascript posso mischiare tutti i tipi di dati che voglio
let array2 = [
    "Michele", 
    "M", 
    12345, 
    false, 
    null, 
    true, 
    undefined, 
    Date, 
    ["Sono un array dentro l'array", 123],
    346.3
];

/**
 * Tipi di array:
 * 
 * - lineari o monodimensionali (1D) per liste di dati semplici
 * - bidimensionali (tabelle o matrice) -> CASO D'USO: creazione giochi tipo TRIS
 * - tridimensionali (cubi o vettori)
 */

let arrayLineare = [0, 1, 2, 3, 4, 5];

console.log("[CONSOLE TABLE DI UN ARRAY LINEARE]");
console.table(arrayLineare);

let array2D = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [2]
];

console.log("[CONSOLE TABLE DI UN ARRAY 2D]");
console.table(array2D);

/**
 * Cubo 2 * 2 * 2
 */
let array3D = [
    [
        [10, 20],
        [30, 40]
    ],
    [
        [50, 60],
        [70, 80]
    ],
];

console.log("[CONSOLE TABLE DI UN ARRAY 3D]");
console.table(array3D);

/**
 * Accedere a un array.
 * 
 * In Javascript gli array sono indicizzati automaticamente a 0.
 * 
 * Quindi gli array in Javascript sono su base 0.
 */
let macchine = ["BMW", "Audi", "Fiat", "Volvo", "Ford"];

console.log( macchine );         // LOG completo array
console.log( macchine[0] );      // Accedere al primo elemento dell'array
console.table( macchine  );      // Mostrare tabella 

console.log( "Nell'array macchine ho", macchine.length, "macchine" );

/**
 * 2. OGGETTI IN JAVASCRIPT
 * 
 * Gli oggetti sono strutture dati organizzate
 * con "chiave" e "valore" e possono assumere
 * forme e dimensioni complesse e elevate.
 * 
 * Sintassi: gli oggetti in javascript si scrivono
 * usando le parentesi graffe.
 */
let persona = {
    nome: "Michele",
    cognome: "Mincone",
    dataNascita: "19-09-2002",

    skills: ["PHP", "Python", 'Javascript', "Node", "Laravel", "Java", "C", "C++"],

    maggiorenne: true
};

let oggettoCasa = {
    nomeCasa: "Nome casa",
    indirizzo: "Strada boh",
    numeroCivico: "3H / 21",
    codicePostale: "00120",

    dataCreazione: Date.now(),

    ristrutturata: true,
    presenzaGiardino: true,
    impiantoFotovoltaico: true,

    superficie: 100,
    stanze: 5,

    dettaglioStanze: [
        { numeroStanza: 1, numeroPersoneMax: 2, letto: 1, tipoLetto: "Matrimoniale", armadio: 1 },
        { numeroStanza: 2, numeroPersoneMax: 2, letto: 1, tipoLetto: "Matrimoniale", armadio: 1 },
        { numeroStanza: 3, numeroPersoneMax: 2, letto: 1, tipoLetto: "Matrimoniale", armadio: 1 },
        { numeroStanza: 4, numeroPersoneMax: 2, letto: 1, tipoLetto: "Matrimoniale", armadio: 1 },
        { numeroStanza: 5, numeroPersoneMax: 2, letto: 1, tipoLetto: "Matrimoniale", armadio: 1 },
    ],

    numeroCucine: 1,
    numeroBagni: 3,

    garageBox: 2,

    capacitaPersone: 10,

    contatoriGas: 1,
    caldaie: 1,
    contatoriAcqua: 1,
    contatoriLuce: 1
};

/**
 * VISUALIZZARE OGGETTI NELLA CONSOLE
 */
console.log(persona);
console.table(oggettoCasa);

/**
 * 3. ARRAY DI OGGETTI (LISTA DI OGGETTI).
 * 
 * In programmazione, quando devo sviluppare web
 * app o altri sistemi, capita spesso di imbattersi
 * in strutture dati complesse e articolate. 
 * 
 * Poniamo il caso di un gestionale che contiene
 * 20 clienti e dobbiamo immaginarne la struttura dati.
 * 
 * In javascript possiamo tradurre il concetto di
 * "Lista di 20 clienti" in un array di oggetti.
 * 
 * In una "lista di 20 clienti", la "lista" è l'array
 * e il singolo cliente è l'oggetto.
 * 
 * SINTASSI: scrivo prima l'array con le parentesi
 * quadre. Dentro creo quanti oggetti voglio usando
 * le parentesi {}.
 */

let listaClienti = [
    {
        nome: "Francesco",
        totaleImportoPagato: 3000,
        nazionalita: "Italiana"
    },
    {
        nome: "Alessandro",
        totaleImportoPagato: 0,
        nazionalita: "Italiana"
    },
    {
        nome: "Natale",
        totaleImportoPagato: 7800,
        nazionalita: "Italiana"
    },
    {
        nome: "Gianluca",
        totaleImportoPagato: -20000,
        nazionalita: "Italiana"
    }
];

console.log(listaClienti);
console.table(listaClienti);