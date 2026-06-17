console.log(
    Number.isNaN( Number(true) )
)


/**
 * Tipi di dati
 * 
 * number (include decimali) - 0, 1, 2, 3
 * string - "", '', "ho testo", 'altro testo'
 * boolean - true / false
 * null - assenza di valore
 * 
 * object - {chiave: "valore"}
 * array - [1, 2, "stringa"]
 * 
 * undefined - assenza di valore (Javascript se non ottiene l'input da te, come fa a sapere il tipo di dato?)
 */
 
 /**
  * Javascript esistono i truthy values (valori veri)
  * 
  * 1               -> true
  * "valore"        -> true
  * [] o [1, 2]     -> true
  * {} o {a: 1}     -> true
  * 
  * Abbiamo anche i falsy values (valori falsi)
  * 
  * 0           -> false
  * null        -> false
  * ""          -> false
  * undefined   -> false
  * NaN         -> false
  */
  
  if (isNaN(Number("3567843434gtgt543"))) {
      console.log("Ciao");
  }