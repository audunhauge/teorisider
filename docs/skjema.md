---
id: skjema
title: Skjema og brukergrensesnitt
---

## Input elementer

Du lager input elementer i html og behandler/henter verdier med javascript.
For alle elementene jeg viser under antar vi at koden har en kobling slik som:  
`const inpNavn = document.getElementById("navn");`  
Du bør kjenne til disse elementene:
* **input**
  * `<input type="text id="navn">`  bruker kan skrive inn tekst.  
  Verdien hentes ut med `const navn = inpNavn.value;`.  
  Merk at vscode typisk markerer dette som en feil.
  * `<input type="number id="alder">`  bruker kan skrive inn tall.  
  Verdien hentes med ´const alder = inpAlder.valueAsNumber;´  
  * `<input type="date id="dato">`  bruker kan skrive/velge dato.  
  Verdien hentes med ´const dato = inpDato.value;´  
  * `<input type="color id="farge">`  bruker kan velge en farge.  
  Verdien hentes med ´const farge = inpFarge.value;´  
  * `<input type="range id="score" min="1" max="6" step="0.5">`  
  bruker kan velge  verdi.  
  Verdien hentes med ´const score = inpScore.value;´  
* **button**  
 `<button id="beregn">Beregn verdi</button>`  lager en knapp.  
 Typisk bruk er 
 ```js
const btnBeregn = document.getElementById("beregn");
btnBeregn.addEventListener("click", funkBeregn);
* **select**  
Bruker kan velge ett av alternativene verdi1 eller verdi2.  
Du henter verdien med .value som vanlig.  
NB! her må du ha en eventlistener på "change".
  ```html
<select id="velger">
   <option>verdi1</option>
   <option>verdi2</option>
</select>`


Checkbox og Radio beskrives separat - da de er noe annerledes enn de andre input-typene.

## Endre ting på skjermen - vise tekst/bilder

Du må lage koblinger til elementer fra html som du ønsker å oppdatere med nytt innhold.
Det kan være tekst, bilde eller andre egenskaper som skal endres.

* **Vise tekst på skjermen**  
  Lag en kobling til en div/span med getElementById.  
  bruk `divResultat.innerHTML = "ny tekst";` til å vise teksten.
* **Endre farge på et element**
  * element.style.backgroundColor = "red";
  * element.classList.add("redclass");   css regel for redclass
* **Skifte bilde i et img element**  
  `imgBilde.src = 'bilde2.png';`
* **Legge til en ny div**  
  `const div = document.createElement('div');`  
  `div.innerHTML = 'noe innhold';`  
  `divMain.append(div);`
