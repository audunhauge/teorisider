---
id: adder
title: En digital adder
---

## Digitalt utstyr - CPU

En CPU er en Central Prosessing Unit - den delene av en datamaskin som utfører logikk og beregninger.

## Adder

En adder er en elektronisk krets som kan legge sammen to binærtall.
Denne operasjonen utgjør en sentral del av oppgavene til en CPU.
Vi skal lage en side som simulerer virkemåten til en del av en slik adder.

Inne i en CPU vil en elektronisk krets av transistorer utføre det arbeidet vi simulerer.
For å få en rask krets brukes ofte andre metoder enn den vi simulerer.  
I vår krets må vi vente på at carry (mente) skal sendes fra boks til boks.
Dermed vil addisjon av 8bitpar ta 8 x tiden for å addere ett bit-par.


### Skisse

 <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
     <g id="halfadd">
         <line stroke="#000" y2="32" x2="105" y1="31" x1="73" />
         <line stroke="#000" y2="57" x2="106" y1="57" x1="41.5" />
         <line stroke="#000" y2="48" x2="171" y1="48" x1="148" />
         <line stroke="#000" y2="100" x2="120" y1="50" x1="120" />
         <line stroke="#000" y2="0" x2="120" y1="50" x1="120" />
         <rect stroke="#000" height="64" width="50" y="16" x="105" fill="#fff" />
         <text font-size="16" y="35" x="110" stroke-width="0">a</text>
         <text font-size="16" y="60" x="110" stroke-width="0">b</text>
         <text font-size="16" y="50" x="140" stroke-width="0">s</text>
         <text font-size="16" y="75" x="115" stroke-width="0">c</text>
     </g>
     <use href="#halfadd" x="0" y="80" />
  </g>
</svg>

### Oppgave

Lag en webside med denne svg figuren inne i en div.

For å ta kopi av figuren: inspect - finn svg taggen, edit-as-html, ta kopi og paste inn i en div på sida di.

:::info
Du trenger oppdatert versjon av Minos.js for at kodene slik som {c1:=1+2} skal virke.  
Sjekk også [kortform for if](../Programmering/betingelser#kortform-for-if) for en forklaring
på `(aa && bb) ? 1 : 0`.
:::

#### Plassering av checkboxene

Lag denne strukturen i html

```html
  <div id="adder">
      <div id="tegning">
          <!-- lim inn svg taggen her -->
      </div>
      #first
  </div>
```
Dette er diven #first:

```html
<div id="first">
    <div class="ia">{a?1:0} <input type="checkbox" id="a"></div>
    <div class="ib">{b?1:0} <input type="checkbox" id="b"></div>
    <div class="ic"> {c1:=(a&&b)?1:0}</div>
    <div class="is"> {s1:=a!=b?1:0}</div>
</div>
```



Bruk css til å plassere checkboxene på rett plass.  
De skal plasseres over den første boksen på utsiden av pilene/strekene
med tilsvarende navn.

Sett position:relative for figur,  
position:absolute for #first, .ia .ib .ic .is


### Utvid til en 8-bit adder

Sjekk ut svg koden og se om du klarer å lage 8 slike figurer: (abcs)*8  
Legg merke til at svg-koden bare definerer en figur, men to figurer vises.  
Bruk samme metode til å legge til 6 ekstra bokser, plasser dem nedover (juster y).

Merk at du må utvide størrelsen på svg området - fra 400 til noe større.