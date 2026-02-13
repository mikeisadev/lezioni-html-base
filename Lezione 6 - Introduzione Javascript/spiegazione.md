# [Argomento bonus] Introduzione rapida a Markdown

I file Markdown sono file di documentazione a supporto del codice.

Sono file che finiscono per ".md" e che d'ora in avanti userò
per spiegare il codice assieme ai commenti.

Riepilogo sui file Markdown:
- hanno l'estensione ".md"
- Servono per documentare il codice
- Vengono formattati tramite HTML

Utilizzo dei file Markdown:
- documentazione del codice del progetto
- dare indicazioni chiare e aiutare altri sviluppatori a capire l'organizzazione dei file del progetto, le dipendenze installate e tutte le funzionalità che avete sviluppato

[Clicca qui per vedere la documentazione sulla sintassi Markdown](https://www.markdownguide.org/basic-syntax/)

# Introduzione base a Javascript

Javascript (abbreviato JS) è un linguaggio di sviluppo frontend, quindi usato sul browser.

Javascript è un linguaggio dinamico o per nulla tipizzato, quindi possiamo dire che si tratta di un linguaggio a tipizzazione dinamica. 

Rispetto ad HTML e CSS, Javascript è un vero e proprio linguaggio di programmazione perché contiene i seguenti elementi (classici di un linguaggio di programmazione):

- creazione di variabili (in JS uso var, let e const per le variabili)
    - "var" è ormai obsoleto e non più usato
    - "let" è molto utilizzato ed è stato introdotto con la versione Javascript ES5, dichiarando una variabile con "let" posso cambiare il suo contenuto
    - "const", anch'esso introdotto nella versione Javascript ES5, mi consente di dichiarare una COSTANTE, quindi il suo valore non può essere cambiato
- posso definire vari *tipi di dati* dentro le variabili (interi, decimali, booleani, stringhe, valori null, array, oggetti o object)
- posso utilizzare strutture dati complesse sfruttando gli array e gli oggetti
- abbiamo le strutture di controllo condizionali (if, if-else, if-elseif, switch) e iterative (for, forEach, while)
- abbiamo le classi nella concezione della programmazione orientata agli oggetti, dichiarabili tramite la sintassi "class NomeClasse {}". Istanziando una classe con la parola "new" ho l'oggetto di quella classe (che non è come l'oggetto inteso come tipo di dato)

Dentro Javascript abbiamo una utility molto importanti, utile nel debugging e nella visualizzazione dei dati, chiamata: 

```js
console.log("Hello, World");
```

Javascript supporta tutta una serie di metodi per manipolare il DOM.

> APPROFONDIMENTO:
> Cos'è il DOM? Il DOM, detto anche Document Object Model, è la rappresentazione della vostra pagina HTML. Per Javascript, la pagina HTML è un documento divisibile per oggetti, quindi è corretto dire che: "per Javascript ogni tag HTML è un oggetto a cui posso applicare dei metodi, quindi delle funzioni, per manipolare la pagin stessa".
> 
> Il DOM è la rappresentazione della pagina HTML a oggetti per Javascript.

**NOTA BENE**: aprendo con "Ispeziona elemento", lo strumento per sviluppatori sul browser, puoi aprire il tab "Console" e scrivere codice JavaScript.

> APPROFONDIMENTO TECNICO: Javascript, come linguaggio, è totalmente interpretato. Quindi, da chi viene interpretato? Quale tecnologia si occupa di leggere riga per riga il codice Javascript? La risposta è l'Engine V8 (o motore V8). L'Engine V8 si trova dentro al browser.

## Quante versioni ha Javascript?

Javascript è regolato da un sistema di versioni chiamato ES o "EcmaScript".

Siamo partiti da ES1, quindi EcmaScript 1, e ad oggi siamo arrivati a ES.NEXT.

Con l'introduzione ES.NEXT, nel linguaggio Javascript sono state introdotte tante novità funzionali allo sviluppo di codice frontend solido e più gestibile in caso di errori.

La versione ES6, detta anche ES2015, ha introdotto importanti cambimenti.

Ecco un'immagine esplicativa delle varie versioni di Javascript.

![Versioni di javascript](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230302180217/JavaScript-Versions.png)

## Comandi base di Javascript

Javascript, da come avrai capito, ha tantissimi comandi diversi.

Per ora, memorizza quelli base:

- `console.log("Testo di esempio")` viene usato per mostrare in console dei log di informazioni utili allo sviluppo o al debugging
- `alert("Avviso dato da Javascript")` questo comando genera un popup con un avviso direttamente nella finestra del tuo browser 
- `prompt("Dimmi la tua età:")` è un comando molto utile per chiedere dati all'utente che dovrà usare il vostro sito. Questa funzione farà apparire un popup dentro il browser, chiedendo all'utente di inserire un input dentro un campo di testo.

## Quindi, come scrivo codice Javascript nel frontend?

Per scrivere codice Javascript, prima di tutto realizzo una pagina HTML: es. index.html.

A questo punto punto posso includere codice Javascript in due modi:

- metodo interno scrivendo codice nel tag HTML <script></script>
- metodo esterno, linkando un file (es. "script.js") sempre tramite il tag <script></script> tramite l'attributo "src" (che sta per "source", dall'inglese)
