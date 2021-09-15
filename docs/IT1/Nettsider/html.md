---
title: HTML
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Strukturen på en web-side

I vs-code kan du lage en ny webside ved å opprette en ny fil \(gi den navnet test.html\) og skrive ! i editoren. Ved trykk på enter vil du da få følgende struktur:


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```


Legg merke til at alle tagger \(ord som står inne i &lt; &gt; \) har en start  og en slutt.

Du vil typisk endre på  Document slik at du får satt en riktig tittel for din webside.

:::info Oppgave
Endre tittelen til Eksempel
:::

Her skal du bytte tittel, endre Document til Min Side.Merk at alle ord som er inne i &lt;&gt; \(vinkelhaker\) er tagger, kommandoer som styrer strukturen på sida.

Du skal nå legge inn din egen tekst mellom taggene:

```html
<h1>Hei - dette er sida mi </h1>
Litt tekst (skriv det du ønsker)
<br>
Mer tekst
på flere linjer - vises som en linje.
<p> Du kan bruke p for paragraf eller br for break for å 
få til avsnitt/linjeskift
</p>
Du kan også legge inn 
<hr>
for å få en linje som deler sida
```

:::tip
Bruk Copy knappen (plasser markør på koden over) og lim inn i vs-code.
:::

Typisk vil du også lage en kobling til en style.css som angir farger og layout.
Denne legger vi inn mellom `<head>` og `</head>` som vist under:

```html {5}
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="eksempel.css">
  <title>Eksempel</title>
</head>

```

:::info Oppgave
Legg til linken som vist og lagre filen (Ctrl+S).  
Klikk (cmd+click) på filnavnet **eksempel.css** i vs-code, velg opprett ny fil.  
Du har nå laget en tom css fil - den skal vi fylle ut senere.
:::


### HTML tagger du skal kjenne

* h1 .. h6 --- gir overskrift, h1 størst, h6 minst 
* p --- gir en paragraf litt tekst 
* br --- bryter linja der den står 
* div --- lager en boks med innhold,  &lt;div&gt;mye innhold som tar full bredde &lt;/div&gt;
* span --- marker et område i en linje noen ord 
* a --- lager en hyperlink link &lt;a href="adresse"&gt;link&lt;/a &gt; 
* img - bilde  &lt;img src="filename.png"&gt;
* table --- lager en tabell \(eget kap om dette 
* form --- lager et skjema \(eget kap\)


## En webside med en liste

For å lage lister i html kan vi velge mellom to tags `ol` eller `ul`.

### OL - ordered list

En **ol** vil lage en nummerert punktliste.

```html
<ol>
  <li> Dette er første linje </li>
  <li> Dette er andre linje </li>
</ol>
```

Du kan overstyre tellemåten som vist under:

```html
<ol type="a">  /* a,b,c, ... */
<ol type="A">  /* A,B,C, ... */
<ol type="i">  /* i,ii,ii,iv,v, ... */
<ol type="I">  /* I,II,II,IV,V ... */
```

:::tip
Det er vanligvis bedre å bruke css til dette - sjekk [css](css.md#alternativer-til-123)
:::

### UL - unordered list

En **ul** vil lage en punktliste.

```html
<ul>
  <li> En linje med tekst </li>
  <li> Enda en linje </li>
</ul>
```

:::info Oppgave
Lag en nummerert list og en vanlig liste på sida di.  
Åpne eksempel.css og legg inn [denne regelen](css.md#en-fancy-nummerert-liste)
:::

## Plassering av elementer på skjermen

:::info Oppgave
Legg til en div etter den nummererte lista - gi den en id som vist under
:::

### En div med id

```html
<div id="test">Heisan</div>
```
:::info Oppgave
[Skriv en css regel](css.md#position-absolute) for denne diven.
Juster på avstanden fra venstre og fra topp slik at du får plassert diven midt på skjermen.
:::



## Bruk av semantiske elementer

Du kan lett lage en webside med **div** som hoved-byggekloss - men da blir
tanken bak litt skjult for den som skal vedlikeholde sida.

Derfor vil mange lage sider med tags som gir mer info om tanken bak strukturen.  
Disse kalles ofte for **semantiske** elementer. 
En vanlig tag slik som **div** forteller lite om hva innholdet er, mens
en tag slik som **address** gir grei beskjed om at innholdet skal være en adresse.

I **html** kan du bruke disse tags som fungerer noe likt div (med en del avvik).

* **header**  En overskrift/banner/innledning
* **nav**  navigasjonslinker meny/innholdsliste/index
* **main** hovedinnhold - sentralt tema for websida
* **section** en inndeling - bør ha en heading
* **article**  litt som section, men kan stå alene (som en blogpost)
* **aside**  litt perifert ekstra-stoff
* **footer**  typisk noe om forfatter, adresse osv
* **figure** inneholder et bilde og vanligvis en figcaption
* **h1 .. h6**   overskrifter 

De brukes typisk til å bygge opp denne strukturen

![Example banner](/img/structural.gif)


### Noen flere semantiske elementer

* **mark**  tilsvarere et ord markert med gul tusj
* **summary** brukes som ledetekst inne i **details**
* **time**  filmen starter, siste frist osv.
* **address**  typisk brukt inne i en **footer**
* **details**  ekstra tekst som vises dersom klikk på **summary**
* **figcaption** brukes i **figure**
* **dialog**  brukes for lage tekst til popups og lignende
