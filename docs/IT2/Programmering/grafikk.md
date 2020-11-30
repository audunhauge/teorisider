---
id: grafikk
title: Grafikk
---

## Canvas


## Canvas brukt fra javascript

For å bruke canvas må du lage et element:

```text
<canvas id="tegning"></canvas>
```

Du må deretter lage følgende kode for å kunne tegne på dette elementet:

```javascript
let ctx = document.getElementById("tegning").getContext('2d');
// kobling til tegnings-kontekst for canvas ctx = context
const π = Math.PI;   // kjekk å ha

ctx.beginPath();
ctx.fillStyle = 'rgb(200,0,0)';
ctx.arc(200,375,30,0,2*π);
ctx.stroke();
// tegner en sirkel
```

Sjekk ut [denne](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) tutorial som ligger på mdn. 

Prøv å lage et tegneprogram hvor du kan tegne forskjellige figurer - firkanter, sirkler osv.

Du kan også sjekke ut et større eksempel som viser design av et Paint program - se lin (TODO paint)



## SVG

### Enkle tegninger i svg

```svg
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```

* Tegner en rød firkant som bakgrunn
* Legger en sirkel over denne med grønt fyll
* Legger teksten "SVG" midt i sirkelen (text-anchor="middle")

<svg width="300" height="200"> 
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>

### Noen standardfigurer

Du kan lage de fleste tegninger basert på disse elementene:

```svg
<svg width="200" height="250" >
  <rect x="10" y="10" width="30" height="30" 
        stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" 
        stroke="black" fill="transparent" stroke-width="5"/>
  <circle cx="25" cy="75" r="20" stroke="red" 
        fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" 
        fill="transparent" stroke-width="5"/>
  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 
      140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>
  <polygon points="50 160 55 180 70 180 60 190 65 205 
        50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>
  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" 
        stroke="blue" stroke-width="5"/>
</svg>
```

<svg width="200" height="250" >
  <rect x="10" y="10" width="30" height="30" 
        stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" 
        stroke="black" fill="transparent" stroke-width="5"/>
  <circle cx="25" cy="75" r="20" stroke="red" 
        fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" 
        fill="transparent" stroke-width="5"/>
  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 
      140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>
  <polygon points="50 160 55 180 70 180 60 190 65 205 
        50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>
  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" 
        stroke="blue" stroke-width="5"/>
</svg>

## Uint8ClampedArray

litt om dette
