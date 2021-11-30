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


### Skisse

 <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">    
   <g>           
    <g id="halfadd">
     <line stroke="#000" y2="32" x2="105" y1="31" x1="73" />
     <line stroke="#000" y2="57" x2="106" y1="57" x1="41.5" />
     <line stroke="#000" y2="48" x2="171" y1="48" x1="148" />
     <line stroke="#000" y2="68" x2="171" y1="68" x1="148" />
     <rect stroke="#000" height="64" width="50" y="16" x="105" fill="#fff"/>
    </g>
    <use href="#halfadd" x="0" y="80"/>
    <use href="#halfadd" x="0" y="160"/>
    <use href="#halfadd" x="0" y="240"/>
  </g>
</svg>

### Oppgave

* Lag en webside med denne svg figuren inne i en div.
* Plasser en input av typen checkbox og med navnet a til venstre for den øverste inngangen.
* Plasser en input av typen checkbox og med navnet b til venstre for den nederste inngangen.
* Plasser en input av typen checkbox og med navnet c til høyre for den eneste utgangen.

For å ta kopi av figuren: inspect - finn svg taggen, edit-as-html, ta kopi og paste inn i en div på sida di.

#### Plassering av checkboxene

lage denne strukturen i html

```html
  <div id="adder">
      <div id="tegning">
          <!-- lim inn svg taggen her -->
      </div>
      (div#ia>input#a[type="checkbox"])*3
      <!-- bytt #ia #a til #ib #b etterpå, ditto for c  -->
  </div>
```


Sett position:relative for figur, position:absolute for #ia,#ib,#ic


