---
title: CSS style sheets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### CSS-selectors

Når du skriver en css-regel bruker du en css-selector til å bestemme hvilket/hvilke elementer regelen skal gjelde for. 



<Tabs
  defaultValue="tag"
  values={[
    {label: 'TAG', value: 'tag'},
    {label: 'CLASS', value: 'class'},
    {label: 'ID', value: 'id'},
    {label: 'Sammensat', value: 'any'},
  ]}>
  
<TabItem value="tag">

En tag selector gjelder for alle elementer med denne taggen,
det kan være div, span, p, article, table, osv.  
Du kan bruke alle gyldige tags for HTML.  
Merk at en slik regel vil gjelde for **alle** elementer av den typen.

```css
div {
  color: green;
}
/* alle <div> element */
span {
  background-color: rgb(12,123,205);
}
/* alle <span> element */
```
</TabItem>

<TabItem value="class">

Alle tag slik som `<div class="usynlig">` 
eller `<span class="utheva">` - kombineres med alle tags.  
Du kan da lage en regel som gjelder for alle div som har denne klassen.

```css
.usynlig { display:none; }
.utheva {
  font-size:1.2rem;
  color:blue;
}
```

</TabItem>

<TabItem value="id">

Dette er regler som gjelder for ett navngitt element. 
Med `<div id="meny">` så vil regelen under bare gjelde
dette elementet. Det er ikke tillatt med flere element med samme id.

```css
#meny { 
  color: green;
  padding: 5px;
 }

#valg {
  font-size:1.2rem;
  color:blue;
}
```

</TabItem>

<TabItem value="any">

Du kan kombinere ulike selectors - div.viktig vil gjelde alle
diver som har klassen viktig, mens span.viktig er en annen
regel som bare gjelder span med denne klassen.  
Den siste regelen gjelder span som finnes inne i elementet
med id="valg"

```css
div.viktig { 
  color: green;
  padding: 5px;
}

span.viktig {
  color:red;
}

#valg span {
  font-size:1.2rem;
  color:blue;
}
```

</TabItem>


</Tabs>


### Bruk av css - regler

En css fil inneholder regler for hvordan elementer på en html side skal presenteres.

### Under HTML kapitelet laga vi en side som så slik ut:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="eksemple.js"></script>
    <link rel="stylesheet" href="eksempel.css">
    <title>Min side</title>
</head>

<body>
    <h1>Hei - dette er sida mi </h1>
        Litt tekst (skriv det du ønsker)
        <br> Mer tekst på flere linjer - vises som en linje.
        <p> Du kan bruke p for paragraf eller br for break for å få til avsnitt/linjeskift
        </p>
        Du kan også legge inn
        <hr> for å få en linje som deler sida
</body>

</html>
```

Legg merke til `<link rel="stylesheet" href="eksempel.css">`

Dette sier at html sida skal laste ned og ta i bruk **eksempel.css.** Denne filen har vi ikke laga ennå - så plasser markøren over  
**eksempel.css** \(du vil se _Cmd+Click to follow link_\) og Ctrl/Cmd + click på filnavnet. \(Ctrl windows, Cmd mac\)

Nå vil VSCode varsle om at filen ikke finnes, velg at du vil lage den nå.

Skriv inn følgende regler i filen

```css
h1 {
  color: blue;
}

body {
  background-color: teal;
}
```

Her har vi laga to regler: h1 { color:blue; } sier at alle &lt;h1&gt; tags skal vises med blå skrift.  
body { background-color: teal; } sier at alle elementer inne i &lt;body&gt; skal ha bakgrunnsfargen teal.



### css egenskaper

Dette er en liste over basis-egenskaper i css - disse skal du kunne.

* color - farge på skrift
* background-color - bakgrunsfarge
* font-size - skriftstørrelse
* position - plassering på skjermen
* left,top,right,bottom - avstand fra kanter
* width,height - størrelse \(typisk på en div\)
* background-image - bakgrunsbilde
* margin marg rundt elementet
* border en kantlinje rundt elementet


### Størrelse

Du kan overstyre størrelsen til et element med egenskapene
* width  bredde
* height  høyde
* padding  luft rundt innhold (inne i elementet)
* margin   luft rundt diven (utforbi elementet)

I tillegg kan du sette begrensninger på width, height
* min-width:12rem;
* max-width:800px;
* ditto for height

### css-selectors

Når du skriver en css-regel bruker du en css-selector til å bestemme hvilket/hvilke elementer regelen skal gjelde for.

**tag-selector**

```css
div {
  color: green;
}
```

Her gjelder regelen for alle **&lt;div&gt;** i dokumentet, de får grønn skriftfarrge.  
Dette er et eksempel på en **tag** - selector \(slik som div span p article table td li ol ul ...\)

**id-selector**

```css
#main {
  background-color: yellow;
}
```

Denne selectoren velger et element i dokumentet som har **id="main"** , f.eks &lt;div id="main"&gt;. Alle tagger kan gis en id, men hver id skal være unik - bare brukes en gang.
absolute

```css
.skyer {
  background-color:whitesmoke;
}
```

Dette er en class-selector, denne klassen kan settes på mange forskjellige elementer som vist under

```css
<div class="skyer"></div>
  <span class="skyer"></span>
  <p class="skyer"> </p>
```

Klasser brukes dersom regelen skal gjelde for mer enn ett element \(men ikke alle av denne typen\),  
for elementer av forskjellige typer.

**pseudo-selector**

```css
div:hover {
  color: blue;
  transition: 1s;
}
```

En pseudo-selector som gjelder for element når pekeren er over elementet. Kan brukes til å framheve det elementet  
pekeren er over - ofte en link \( &lt;a&gt; \). Transition gjør at endringen fra normalt utseende skjer gradvis \(1s\).

En liste over vanlige pseudo-class selectors

* :active a:active - en link som brukeren klikker på
* :checked radio eller checkbox, style for de som er valgt
* :focus typisk input element, input:focus - brukeren har markør inne i elementet
* :hover muspeker er over elementet, div:hover
* :nth-of-type\(\) tr:nt-of-type\(odd\) - alle odde rader i en tabell, kan også bruke \(even\)
* :valid typisk en input:valid - dersom det brukeren skriver er ok kan du vise dette med css
* :visited a:visited regel som gjelder for besøkte linker

**sammensatte selectors**

```css
div.skyer {
   /*  alle diver som har klassen skyer */
}

<div class="skyer">regelen gjelder meg</div>


#main p {
  /* alle paragrafer inne i elementet med id="main" */
}

<div id="main">
  <p>denne</p>
  <p>og denne</p>
</div>
```

**Etterkommere**

```css
div div p span {
  /* en span inne i en paragraf inne i en div i en div */
}

<div>
  <div>
    <p>
      <span>gjelder meg</span>
```

**Barn**

```css
div > span {
  /* alle span som er direkte inne i en div */
}

<div>
  <span>gjelder meg</span>
  <p>
    <span>men ikke meg - fordi jeg er inne i en p </span>
```

**Nære Naboer**

```css
h2 + p {
  /* alle p som følger rett etter en h2 */
}

<h2>Overskrift</h2>
<p> gjelder meg</p>
<p> men ikke meg</p>
```

**Fjerne Naboer**

```css
h2 ~ p {
  /* alle p som følger etter en h2 */
}

<h2>Overskrift</h2>
<p> gjelder meg</p>
<p> og meg også</p>
```



### Transition <a id="transition"></a>

Typisk bruk er for å framheve valg i menyer når musepeker er over alternativene.

```css
a {
  color: #fff;
  background-color: #333;
  transition: all 1s ease-out;
}

a:hover,
a:focus {
  color: #333;
  background-color: #fff;
}
```

Når bruker plasserer markøren over en link vil du se at endringene i style tar 1s og bruker ease-out.

```css
 transition: <property> <duration> <timing-function> <delay>;
```

eller på norsk: _transition: egenskap varighet timing-metode utsettelse._

Dermed betyr `transition: all 3s linear 1s;` at alle endringer skal ta 3s, være lineære og ha en delay \(utsettelse\) på 1s.

### Filter <a id="filter"></a>

```css
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);
```

Disse virker på alle elementer, men noen gir bare mening i forhold til bilder.

### Layout med grid

Lag en div med klasse wrapper `<div class="wrapper"> ... </div>`

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
```

Alternativer for `grid-template-columns: 1fr 1fr 1fr;`

Du kan endre forholdet mellom de forskjellige kolonnene slik: 2fr 1fr 1fr . Nå vil den første være dobbelt så stor som de to andre.

`grid-auto-rows: minmax(100px, auto);`  
Denne css reglen sier at hver rad skal ha minimumshøyde på 100px.

grid-gap: 10px er avstanden mellom hver rad/kolonne.

Du vil nå få en layout slik som under:

|  |  |  |
| :--- | :--- | :--- |
|  |  |  |
|  |  |  |

Du kan styre størrelsen på innholdet ved å lage en regel for elementene inne i grid.

```css
.grid-item {
  max-height: 200px;
  max-width: 200px;
}
```

### Layout med Flex

Flex er godt egna til å lage layout som tilpasser seg til ulike bredder på display. Dermed kan en lage regler som gjør at på en stor skjerm kan man se flere bilder ved siden av hverandre, mens på en mobil blir de vist nedover \(en i bredden\).

#### Sentrering med flex <a id="sentrering-med-flex"></a>

Git denne html koden: `<div class="parent> <div class="child"> </div> </div>`

Da vil følgende css sentere div.child midt inne i div.parent.

```css
.parent {
  display: flex;
  height: 300px; /* Or whatever */
}

.child {
  width: 100px;  /* Or whatever */
  height: 100px; /* Or whatever */
  margin: auto;  /* Magic! */
}
```


### Plassering av elementer

Du kan ta kontroll over plasseringen til elementer.
Bruk **left,top,bottom,right** til å angi hvilken kant du plasserer i forhold til.
`left:10px;`  betyr 10px fra venstre kant.

#### Position absolute

```css
#test {
  position:absolute;
  left: 10px;
  top: 10px;
}
```
Denne regelen vil plassere elementet med id="test" 10px fra venstre kant og 10px fra toppen.



#### Position relative

```css
#test {
  position:relative;
  left: 10px;
  top: 10px;
}
```
Her angir du en forskyvning fra der hvor nettleseren ville ha plassert elementet.


### CSS Nummerering

Vanligvis bruker du `<ol> <li>` for å lage nummererte lister. Du får da en liste nummerert som vist under:

1. Punkt ein
2. Punkt to


#### Alternativer til 1,2,3...

Du kan lage nummererte lister med andre tellemåter på denne måten:

```css 
ol {
  list-style-type: upper-alpha;
}
```

Typen kan være en av **decimal,lower-roman,upper-roman, ...**  
Du finner komplett liste på [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

Dersom du ønsker å nummerere andre elementer enn ol og li kan du bruke følgende css som et utgangspunkt:

```css
body {
  counter-reset: oppgave;    /* lager en teller med navnet oppgave */
}

div.oppgave::before {
  content: counter(oppgave) ") ";
  counter-increment: oppgave;
  counter-reset: deloppgave;    /* lager en teller for deloppgaver */
}

div.oppgave > p::before {
  content: counter(deloppgave, lower-latin) ") ";  
  counter-increment: deloppgave;
}
```

Her ønsker jeg at alle &lt;div class="oppgave"&gt; skal nummereres 1\) 2\) ...

Inne i slike div-er skal alle paragrafer nummereres med a\) b\) c\) ...

Legg merke til `counter(deloppgave, lower-latin)` - her gir jeg beskjed om at jeg ønsker a\) b\) ...  
som nummerering for denne telleren.

Du kan velge fra denne lista med nummereringer:

* decimal: 1,2,3, ...
* decimal-leading-zero : 01 02 ..
* lower-roman : i, ii, iii, iv ...
* lower-greek: α, β, γ ...
* lower-alpha, lower-latin: a,b,c...
* upper-xxx \(roman,greek,alpha,latin\)

#### En fancy nummerert liste

```css
ol {
  max-width: 350px;
  counter-reset: my-awesome-counter;
  list-style: none;
  padding-left: 40px;
}
ol li {
  margin: 0 0 0.5rem 0;
  counter-increment: my-awesome-counter;
  position: relative;
}
ol li::before {
  content: counter(my-awesome-counter);
  color: #fcd000;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  --size: 32px;
  left: calc(-1 * var(--size) - 10px);
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  top: 0;
  transform: rotate(-10deg);
  background: black;
  border-radius: 50%;
  text-align: center;
  box-shadow: 1px 1px 0 #999;
}
```

### Media queries

Med @media queries kan vi lage regler som virker forskjellig avhengig av om vi skal ha utskrift \(@media print\), vise på skjerm \(@media screen\) eller også undersøke bredden på skjermen \(@media screen and \(max-width:1024px \) { ... }

I eksemplet under skal vi vise bilder med layout grid \(6x\) dersom vi har en stor skjerm, grid \(4x\) dersom mellomstor, \(3x\) dersom liten, \(2x\) dersom veldig liten - og skifte til layout:flex dersom bredden er mindre enn 450px.

```css
:root {
  --display: grid;
  --gridlate: repeat(6, 1fr);
  --marg: 1em;
  --topmarg: 1em;
  --width: 200px;
}

@media all and (max-width: 1450px) {
  :root {
    --gridlate: repeat(4, 1fr);
  }
}

@media all and (max-width: 950px) {
  :root {
    --gridlate: repeat(3, 1fr);
    --marg: 0.5em;
  }
}

@media all and (max-width: 600px) {
    :root {
        --gridlate: repeat(2, 1fr);
        --marg: 0.2em;
    }
  }

@media all and (max-width: 450px) {
  :root {
    --display: flex;
    --marg:auto;
    --topmarg: 1em;
    --width: 300px;
  }
}

#main {
  display: var(--display);
  grid-template-columns: var(--gridlate);
  flex-direction: column;
}

#main > div {
    width: var(--width);
    height: calc(var(--width) - 50px);
    border: solid gray 1px;
    margin: var(--marg);
    margin-top:var(--topmarg);
}

#main > div:nth-of-type(odd) {
    background-color: red;
}
```

**Merk** at jeg bruker --variable som er definert i :root{ }.  
Dermed kan jeg endre verdiene på disse i de forskjellige @media-reglene og bruke samme css-regel for alle lenger nede. Der henter jeg verdien fra variablene med `var(--variabelnavn)` .

**Merk** at jeg beregner height på denne måten: height: calc\(var\(--width\) - 50px\);  
Dermed har jeg en bredde som er gitt av --width, og en høyde som beregnes ut fra samme verdi.

### Bruk av @media print

Når du skal skrive ut ønsker du ofte å fjerne elementer som ikke virker på papir - tenk på knapper og andre meny-elementer.  
Ofte ønsker du også å styre hvordan siden deles opp

```css
@media print {
  figure {
    page-break-inside: avoid;
  }
  article {
    page-break-after: always;
  }
  button, .menu {
    display: none;
  }
  h1,h2,h3,h4,h5,h6 {
    page-break-after: avoid;
  }
}
```

Her ønsker jeg ikke side-skift mellom bilde og forklarende tekst \(de er begge inne i fugure tag-en\). Jeg vil ha en ny side etter en article. Overskriften skal være på samme side som teksten den er tilknytta. Knapper skal ikke skrives ut. Ikke vis menyer \(som har klassen .menu\)