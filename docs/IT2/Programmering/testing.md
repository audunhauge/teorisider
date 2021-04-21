---
title: Testing og debugging
---

## Debugging

Debugging betyr feilsøking i et program hvor du vet det er feil.

* Koden virker ikke - den krasjer
* Koden gir feil resultat / beregning
* Koden gir feil respons / handling

### Debugger

I chrome er debuggeren integrert i nettleseren - ta *inspiser* og du kan 
bruke teknikkene under

#### Breakpoints
I kodevinduet kan du sette et stopp-punkt - koden vil stoppe der
og la deg inspisere innhold av variable.  
Klikk i venstre marg for å sette et bruddpunkt - høyre klikk for flere valg.

### Single stepping

Etter et breakpoin kan du klikk på knapperaden som kommer fram for å gå gjennom koden
linje for linje.


## Testing

Koden krasjer ikke - den ser ut til å virke, men kan du stole på at 
den virker under alle omstendigheter.

Dette er et sett med tester som du mener at koden skal klare

* Input tester - takler den ekstreme verdier (negative, store)
* Edge cases - hva om ingen kommer på møtet, hva om møtet er på passert dato?
* Belastning - virker bra med 10 figurer som roterer, hva med 10 000 000 ?

### Testkode

Typisk vil du skrive tester som du kan kjøre automatisk.
Disse testene skal da sjekke om programmet oppfyller betingelsene fra kravspek.

#### Eksempel

Du har en funksjon som beregner gjennomsnitt

```js
function  avg(a,b) {
    return (a+b) / 2;
}

// Testing av avg
if (avg(2,4) === 3) {
    console.log("Test avg(2,4) passed");
} else {
    console.log("Test avg(2,4) FAILED");
}
```

### Test systemer

Det er ugreit å ha en mengde med testkode i programmet ditt.
Du ønsker egentlig å ha testene separert fra kildekoden.

Da bruker du ofte test-systemer slik som *mocha* for javascript.
De lar deg skrive test-filer som kjøres uten at du må endre kildekoden i særlig grad.

```js
// koden i en test.js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// resultatet når du kjører testen
$ ./node_modules/mocha/bin/mocha

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (9ms)
```