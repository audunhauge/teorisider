---
id: dokumentasjon
title: Dokumentasjon
---

## Kommentering av kode

En viktig form for dokumentasjon for utviklere er kommentering av
kode. I ActionScript for eksempel kommenterer man kode ved å skrive //
i starten av en linje med tekst eller slå sammen flere linjer ved å benytte /*
før og */ etter.

Når man kommenterer kode, er det fort gjort å kommentere ting som
er like opplagt ved å se på koden. Kommentarer, slik som Her lagres det
en variabel med navn antall som settes til verdien 5, gir ikke noe ekstra
informasjon til den som prøver å forstå koden. Vi må gå ut fra at de som
er utviklere, kan programmere og kan lese kode.

Det som heller må kommenteres, er større deler av koden. Typisk
kommenterer man hva blokker med kode gjør, hvilke formler som er brukt
i en utregning, eller hva funksjoner gjør. Har man selvlagde funksjoner, er
det også vanlig å legge inn en kommentar før funksjonsdefinisjonen som
forteller hva funksjonen gjør, og hvordan den benyttes:

```js
/**
* Funksjon som finner summen av alle elementer i en array
* fra og med en startindex til og med en sluttindex.
* @param {number[]} arr: Dette er arrayen det skal finnes sum av
* @param {number} start: Index til første element i arrayen
*   som skal være med i summeringen
* @param {number} slutt: Index til siste element i arrayen
*   som skal være med i summeringen
* @returns {number} Funksjonen returnerer summen av elementene.
*/
function sumAvArray(arr, start, slutt){
…
}
```

Mange utviklere sier ofte: Trenger koden kommentering, er det et tydelig
tegn på at koden burde vært skrevet om slik at den var lettere å forstå. Dette
er en litt vel brutal påstand, og vi mener det er bra å kommentere koden.
Allikevel er det en stor del sannhet i dette utsagnet. Er man nøye med å
finne gode variabelnavn, gode instansnavn og gode funksjonsnavn, vil
nødvendigheten av noe av kommenteringen falle bort.

Fordelen med kodekommentaren som er vist over er:
*  Den gir hjelp når du skriver kode som bruker funksjonen - en god editor vil markere
feil bruk av parametre - f.eks at du sender et array av string som første parameter.
*  Du kan generere automatisk dokumentasjon for koden - da slipper du at det er avvik mellom koden og dokumentasjonen.
JSdoc vil lage en vakker/god dokumentasjon for alle funksjoner som er dokumentert på denne måten.