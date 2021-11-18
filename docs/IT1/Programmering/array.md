---
id: array
title: Array
sidebar_label: Array
---


Tabeller \(array\) og strenger \(string\) kan lagre samlinger av data. En tabell brukes ofte til å lagre lister med like data. Anta at vi lager en tabell i javascript slik:

```javascript
let elevTabell = [ "Ole","Per","Kari", "Lise","Lars","Oda" ];
```

Da kan du se for deg at tabellen ser slik ut:

| Indeks | Elev |
| :--- | :--- |
| 0 | Ole |
| 1 | Per |
| 2 | Kari |
| 3 | Lise |
| 4 | Lars |
| 5 | Oda |

Som du ser har hvert element sitt nummer \(fra 0\). Dette nummeret tilsvarer adressen til verdien.

Med dette bildet i hodet er det lett å forstå hvordan man henter ut en verdi fra en tabell:

```javascript
NavnPåTabell[indeks]
```

Dette betyr: Hent ut verdien fra NavnPåTabell på plass gitt av indeks.

```text
console.log(elevTabell[3]);
// Skriver ut "Lise"
```

Oppdatering/endring av en verdi skjer på samme måte:

```text
elevTabell[4] = "Lars Even";
```

Legg merke til at all tekst må ha hermetegn rundt seg. Dersom jeg skrev

```text
elevTabell[4] = Lars;
```

da vil js prøve å hente verdien fra en variabel med navnet Lars. Dette vil som oftest gi en feilmelding \(fordi variabelen Lars ikke er definert\).

## Metoder for å lage en array

### En tekst (string) konvertert til array

Gitt at du har en string som vist under

```js
const tall1 = "123456";
```

og du vil gjøre den om til en array - du vil ha ```["1","2","3","4","5","6"]``` .  
Da kan du bruke en av disse metodene:


```js
const siffer1 = tall1.split('');
const siffer2 = Array.from(tall1);
const siffer3 = [... tall1];
```

Alle tre vil lage en array lik ```["1","2","3","4","5","6"]``` .

## Array functions

Alle array objekter har tilgang til en rekke innebygde funksjoner.
Dersom du lager en ny array,  
`const a = [];` vil du kunne se alle
de innebygde funksjonene ved å skrive `a.` i console på en nettleser.

I vs-code vil du få følgende bilde:

```javascript
a.
   |copyWithin | => (method) Array<any>.copyWithin(target: number,
   |entries    |                start: number, end?: number): any[]
   |every      |     /* enda mer forklarende text */
   |fill       |
   |filter     |
   |find       |
```

Her kan du da lete etter en funksjon og lese beskrivelse rett i editoren.

## De mest sentrale array funksjonene

Lista viser de viktigste (de jeg bruker oftest)[^2] array funksjonene

| Navn        | Beskrivelse                               | eksempel               |
|-------------|-------------------------------------------|------------------------|
| push(a)     | legger nytt element a bakerst i arrayet   |  arr.push(2) | 
| pop()       | henter og fjerner siste element           |  siste = arr.pop() | 
| sort()      | sorterer arrayet alfabetisk  [^1]           |  arr.sort | 
| contains(a) | true dersom a finnes i arrayet            |  if(arr.contains("ole")) | 
| find(f)     | finner verdi som oppfyller test |  arr.find(e => e >100) | 
| join(sep)     | limer sammen bitene til en tekst med sep mellom   |  arr.join(",") | 
| slice(start,slutt)    | lager kopi [start..slutt-1]   |  kopi = arr.slice() | 
| reverse()  | snur rekkefølgen   |  arr.reverse()) | 
| shift()    | henter ut og fjerner første element  | first = arr.shift() | 
| unshift(a)    | legger inn nytt første-element  | arr.unshift(2) | 

[^1]: Se [numerisk sortering](#funksjoner-som-endrer-verdiene-i-arrayet)
[^2]: Egentlig bruker jeg map,reduce,replace,filter mest.

## Arbeide med tabeller

Vi har tabellen elevTabell som vi nå ønsker å skrive ut

| Indeks | Elev |
| :--- | :--- |
| 0 | Ole |
| 1 | Per |
| 2 | Kari |
| 3 | Lise |
| 4 | Lars |
| 5 | Oda |

For å skrive ut alle elementene i tabellen bruker vi en løkke:

```javascript
const elevTabell = [ "Ole","Per","Kari","Lise","Lars","Oda" ];
let i;  // løkketelleren
// løkketelleren defineres helst inne i løkka - har den på utsida her
// for å fremheve den i forklaringen
let ant = elevTabell.length;  // antall elementer
for (i = 0; i < ant; i++) {
   let elev = elevTabell[i];
   console.log(elev);
}

// standard for løkke brukt på array
for (let i=0; i < arr.length; i++) {
   const verdi = arr[i];
   // gjør noe med verdi
}

// du kan også bruke denne metoden (es2016)
for (const elev of elevTabell) {
  console.log(elev);
}
// i denne løkka er: elev  <=> elevTabell[i]
```

Her ser vi at alle Tabeller \(arrays\) har en innebygd egenskap med navnet length som gir deg antall elementer i tabellen.

Denne er viktig å kjenne til slik at du kan finne lengden på tabellen \(antall elementer\).

## Array funksjoner


## Flere dimensjoner

Flerdimensjonale tabeller. Tenk deg at du skal lage et sudoku brett. Brettet er 9 x 9 ruter. Du ønsker å bruke en array til å lagre brettet.

```javascript
let Brett = [
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0,0,0,0 ],
];
```

Du kan nå legge inn tallene dine slik:

```javascript
Brett[0][1] = 4;
Brett[0][2] = 5;
```

Dette kalles en todimensjonal tabell, du må oppgi to verdier for å spesifisere en celle i tabellen \(tilsvarer \(x,y\) i koordinatsystemet\). Du kan selvsagt lage tabeller med flere nivåer \(en tabell inne i en tabell inne i en tabell … …\).  
En mye brukt teknikk er å lage en tabell som inneholder objekter . Et objekt kan for eksempel være informasjon om en elev. Vi kan da lage en tabell med info om elever slik:

```javascript
let arrElever = [
  { fornavn:"Ole", etternavn:"Olsen", klasse:"3A", poeng:20 },
  { fornavn:"Lise", etternavn:"Larsen", klasse:"3A", poeng:22 },
  { fornavn:"Lars", etternavn:"Nilsen", klasse:"3B", poeng:21 }
];
```

## Mer om Array funksjoner

### Funksjoner som endrer verdiene i arrayet 

```javascript
let a = [1,12,4,5,612,44,55,121212];

// sorter a alfabetisk ('1' > '12')
a.sort();  // a === [ 1,12,,121212,4,44,5,55,612]

// sorter a numerisk
a.sort( (x,y) => x - y ); // a === [1, 4, 5, 12, 44, 55, 612, 121212]

// sorter a numerisk synkende
a.sort( (x,y) => y - x ); // a === [121212, 612, 55, 44, 12, 5, 4, 1]

// reverser a 
a.reverse();  // a === [121212, 55, 44, 612, 5, 4, 12, 1]
```

### Funksjoner som gir en ny array som resultat 

```javascript

// største tall i a 
let maksimum = Math.max(...a);  // 121212
// minste tall i a 
let minimum = Math.min(...a);  // 1

// summen av tallene i a 
let total = a.reduce( (sum,v) => sum + v, 0);  // den siste nullen er startverdien for sum
// v vil få verdien til tallene i a i sekvens

// endre tallene i a med et uttrykk/funksjon 
let b = a.map( e => 2 *  e + 4);
// b === [6, 28, 12, 14, 1228, 92, 114, 242428]

// filtrer tallene i a 
let c = a.filter( e => e % 2 === 0);
// c === [12, 4, 612, 44, 121212]

// test om alle tallene i a oppfyller en betingelse
let barePositive = a.every( e => e > 0);
// barePositive === true , fordi alle tall i a er > 0
```

### En innebygd travasering av array-elementer 

```javascript

// utfør en funksjon for hver verdi i a 
a.forEach(doit);

function doit(verdi, index) {
  // verdi vil være tallene fra a i sekvens
  // index vil være posisjonen verdi har i a (tilsvarer løkkeindeks).
}
```

### Endring av alle verdier i en array med .map 

```javascript
// eksempel: vi har et array med årstall
// vi vil ha et array med antall år etter 1969
// slik: [1, 6, .... ]
let years = [ 1970, 1976, 1982, 1994, 2013 ];
let x = years.map( e => e - 1970 );
```

### Sortere elementer med egenskaper 

Du kan også sortere array som inneholder objekter.

```javascript
class Elev {
  constructor(fornavn,etternavn,klasse) {
    this.fornavn = fornavn;
    this.etternavn = etternavn;
    this.klasse = klasse;
  }
}

let elever = [];
elever.push(new Elev("ole","olsen","3a") );
elever.push(new Elev("kar","olsen","3a") );
elever.push(new Elev("lasse","olsen","3a") );
elever.push(new Elev("lise","olsen","3a") );

elever.sort( (x,y) => +(x.fornavn > y.fornavn) 
              || +(x.fornavn === y.fornavn) - 1 );
// her sortereres det på fornavn a..z

// denne gjør det samme, men det er litt 
// lettere å se hva som skjer
elever.sort( (x,y) => {
  if (x.fornavn > y.fornavn) return 1;
  if (x.fornavn === y.fornavn) return 0;
  return -1;
} );

// merk at alle funksjoner gitt til sort skal 
// returnere 1,0,-1
// henholdsvis dersom større,lik,mindre
// for sammeligningen mellom x og y
```

