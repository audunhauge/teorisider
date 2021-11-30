---
id: binary
title: Algoritme for å vise binærtall
---

#### Vi skal lage en webside som viser et binærtall.

Websida skal ha en input for å skrive inn ett tall, og en knapp for
å vise tallet som et binærtall.

```bs
tall1 |_____|
(Vis binært)
```

Ved klikk på knappen (Vis binært) skal vi få denne visningen:

```bs
                        
tall |_____|           
                        metode
(Vis metode)            
                        |_| |_| |_| |_| |_| |_|
                                            (nxt)
```

Vis metode skal bare virke dersom bruker har skrevet inn tall.

#### Teoristoff du trenger
* [Array](../Programmering/array) - sjekk spesielt hvordan du kan gjøre text om til en array.
* [Betingelser](../Programmering/betingelser) - sjekk if-setninger.
* [Binærtall](../DigitalTeknologi/binary) - teori om bibærtall.


#### Og litt javascript

```javascript
// @ts-check
import { updateMyProperties, thingsWithId, wipe } from "../lib/Minos.js";

const web = updateMyProperties();


const { vis, algoritme, nxt } = thingsWithId();

vis.onclick = () => {
    algoritme.style.opacity = "1";
    wipe();  // fjerner forrige forsøk
    // skal hente tallene og fylle ut rutene
}

nxt.onclick = () => {
    // skal hente neste binærsiffer
    web.siffer++;  // plasserer (nxt) knappen under neste siffer
}
```

### Algoritmen

* la n være tallet
* la siffer være 0 (det bakerste binærsifferet)
* så lenge som n er større enn 0
* -- regn ut rest = n % 2
* -- la n = n / 2
* -- dersom rest forskjellig fra 0 (divisjon gikk ikke opp)
* -- -- vis 1 som gjeldende siffer
* -- ellers
* -- -- vis 0 som gjeldende siffer
* -- øk siffer med 1

### Prøv å skrive inn algoritmen 

Første forsøk legger vi inn hele koden i vis.onclick

Senere skal vi ta ett og ett binærsiffer slik som vi gjorde for addisjon


