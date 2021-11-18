---
id: addisjon
title: Addisjonsalgoritme
---

#### Vi skal lage en webside som illustrerer addisjon av to desimaltall.

Websida skal ha to inputs for å skrive inn to tall, og en knapp for
å vise framgangsmåten for addisjon (algoritmen).

```bs
tall1 |_____|
tall2 |_____|
(Vis metode)
```

Ved klikk på knappen (Vis metode) skal vi få denne visningen:

```bs
                        metode
tall1 |_____|           |_| |_| |_| |_| |_| |_|
tall2 |_____|           |_| |_| |_| |_| |_| |_|
(Vis metode)            |_| |_| |_| |_| |_| |_|
                        |_| |_| |_| |_| |_| |_|
                                            (add)
```

Vis metode skal bare virke dersom bruker har skrevet inn tall1 og tall2.

#### Teoristoff du trenger
* [Array](../Programmering/array) - sjekk spesielt hvordan du kan gjøre text om til en array.
* [Betingelser](../Programmering/betingelser) - sjekk if-setninger.




#### For å lage rutenettet som skal vise hvert siffer fra de to tallene bruker vi denne html-koden:

```html
<div id="rutenett">
    <div id="mente">
        <div class="rute mente">{c5}</div>
        ...c4..c1..
        <div class="rute mente">{c0}</div>
    </div>
    <div id="nr1">
        <div class="rute nr1">{n5}</div>
        ...n4..n1..
        <div class="rute nr1">{n0}</div>
    </div>
    <div id="nr2">
        <div class="rute nr2">{m5}</div>
        ...m4..m1..
        <div class="rute nr2">{m0}</div>
    </div>
    <div id="sum">
        <div class="rute sum">{s5}</div>
        ...s4..s1..
        <div class="rute sum">{s0}</div>
    </div>
</div>
```

#### Denne css filen kan vi også bruke

```css
body {
    background-color: black;
    color:white;
}

#rutenett > div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}

.rute.mente {
    background-color:rgb(213, 216, 181);
}
.rute.nr2, .rute.nr1 {
    background-color:lightgray;
}
.rute.sum {
    background-color:rgb(195, 221, 194);
}

#add {
    --pos:0;
    position: absolute;
    left:calc(400px - var(--pos) * (400px / 5) );
    top:200px;
}

.rute {
    width:1.5rem;
    height: 1.5rem;
    background-color: lightgray;
    margin:4px;
    color: black;
}

section {
    display: grid;
    grid-template-areas: 
    "input alg";
}

#algoritme {
    overflow: hidden;
    position: relative;
    grid-area: alg;
    width:30rem;
    height: 20rem;
    background-color: slategrey;
    opacity: 0;
    padding: 10px;
}
```

#### Og litt javascript

```javascript
// @ts-check
import { updateMyProperties, thingsWithId, wipe } from "../lib/Minos.js";

const web = updateMyProperties();


const { vis, algoritme, add } = thingsWithId();

vis.onclick = () => {
    algoritme.style.opacity = "1";
    wipe();  // fjerner forrige forsøk
    // skal hente tallene og fylle ut rutene
}

add.onclick = () => {
    // skal utføre addisjon av en kolonne
    web.siffer++;  // plasserer (add) knappen under neste siffer
}
```
