---
id: prove1
title: prøve it2 1. November 2020
---

:::tip
+ Alle skal løse Oppgave 1. 
+ Velg en av oppgavene fra Oppgave 2.
+ Lever besvarelsen på itslearning - lag en fil med
  html, css og js.
+ Alle hjelpemidler tillatt (utenom kommunikasjon).
:::

## Oppgave 1

Lag et skjema hvor bruker kan skrive inn 
et fargenavn og få ut hexkoden for denne fargen.

programmet skal MINST støtte disse fargene:

| Farge | Hex |
| ------|-----|
| rød   | #ff0000 |
| grønn | #00ff00 |
| blå   | #0000ff |
| gul   | #ffff00 |

Under ser du en skisse for skjema.
Du kan bruke en input eller en select for farge.

<| |> skal være en knapp, |___| er input

```
  Skriv inn farge |___rød__|

    <|Vis farge|>

Du valgte fargen rød - den har koden #FF0000

```

## Oppgave 2

1. Legg til kode slik at fargen brukeren skriver vises på skjema

2. Utvid programmet slik at bruker kan registrere nye farger med hexcoder.
Det kan være på samme skjema.

Skisse

```
Registrer ny farge med kode:

  Fargenavn |____|    Hex |____|
  <|registrer>
```

Disse nye fargene skal da kunne brukes i det første skjemaet (de kan være på samme side).

## Innlevering

Lag en ny fil av typen .txt og lim inn kode fra html,css og js - skisse under:
```
########### HTML #########
< html>
  < body> osv
< /html>

########### CSS #########
#main {

}
.color {

}

########### JS OPPG1 ###########
// @ts-check
function setup() {
  // kode for del 1
}

########### JS OPPG2 ###########
// @ts-check
function setup() {
  // kode for del 1
  // ny kode for del 2
}
```