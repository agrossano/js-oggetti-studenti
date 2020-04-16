/* - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
-Stampare a schermo attraverso il for in tutte le proprietà;
 */

var studente = {
  "nome": "Fabio",
  "cognome": "Rossi",
  "eta": 33
};


for (var key in studente) {
  //console.log(studente[key])
};


/* - Creare un array di oggetti di studenti.
-Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.  */


var listaStudenti = [
  {
    "nome": "Massimo",
    "cognome": "Bianchi",
    "eta": 31
  },
  {
    "nome": "Luca",
    "cognome": "Albini",
    "eta": 26
  },
  {
    "nome": "Domenico",
    "cognome": "Salvo",
    "eta": 33
  },
  {
    "nome": "Erica",
    "cognome": "Signori",
    "eta": 25
  },
]


for (var i = 0; i < listaStudenti.length; i++) {
  var studente = listaStudenti[i];
  console.log(studente.nome + " " + studente.cognome)
}

var nuovoNome = prompt('Inserisci un nome');
var nuovoCognome = prompt('Inserisci un cognome');
var nuovoEta = prompt('Inserisci una età');
var nuovoStudente = {
  "nome": nuovoNome,
  "cognome": nuovoCognome,
  "eta": nuovoEta
}
listaStudenti.push(nuovoStudente)


console.log(listaStudenti)