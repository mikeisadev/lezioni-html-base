## [Argomento bonus] Introduzione rapida a Markdown

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

## Introduzione base a Javascript

Javascript (abbreviato JS) è un linguaggio di sviluppo frontend, quindi lo uso sul browser.

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

APPROFONDIMENTO:
Cos'è il DOM? Il DOM, detto anche Document Object Model, è la rappresentazione della vostra pagina HTML. Per Javascript, la pagina HTML è un documento divisibile per oggetti, quindi è corretto dire che: "per Javascript ogni tag HTML è un oggetto a cui posso applicare dei metodi, quindi delle funzioni, per manipolare la pagin stessa".

Il DOM è la rappresentazione della pagina HTML a oggetti per Javascript.