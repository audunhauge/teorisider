---
title: Rasjonale funksjoner
---


En rasjonal funksjon har formen $$ r(x) = \frac{f(x)}{g(x)} $$
hvor f(x) og g(x) er polynomer.

Nullpunktene til r(x) vil være de samme som for f(x).

Der g(x) har nullpunkt har r(x) vanligvis bruddpunkt eller et udefinert punkt.

## Eksempel
```math
r(x) = \frac{x-2}{x-1} 
```

plot[(x-2)/(x-1)]

Legg merke til at nullpunktet til r(x) er 2, som for telleren f(x).

Merk også at vi har et bruddpunkt (grafen er ikke kontinuerlig) 
for nullpunktet til g(x), x = 1

## Asymptoter

Når x blir veldig stor 
* zoom ut og flytt grafen slik at du ser x verdier ca 1000
* zoom inn igjen på x=1000 slik at du ser y-verdiene (ca -5,5)
* sjekk hvilken y verdi du har nå
* gjør det samme for x = -1000

Det du finner er at når x blir stor (i absoluttverdi) nærmer y seg 1.

Dette er logisk da vi har (1000-2) / (1000 -1) for x=1000 som blir ~ 1.
Denne grenseverdien kaller vi en horisontal asymptote.

En eventuell horisontal asymptote finnes lett dersom vi ignorerer konstantene:
```math
  r(x) \approx \frac{x}{x}
```
og ser at r(x) ~ x/x = 1 når x er veldig stor
