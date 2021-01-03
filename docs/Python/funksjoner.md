---
title: Funksjoner i python
---

## Definere en funksjon

Du definerer en funksjon som vist under

```python
def funksjonsnavn(parameter):
   kropp
   return verdi
```

Typisk vil du skrive kode som utfører en beregning som _kropp_ og 
gi tilbake den beregna _verdi_ med en **return**.
Parameter vil være en eller flere variabelnavn slik som (x) eller (a,b,c).  
Tenk på variable i algebra - her navngir du de variablene du bruker i beregningene dine.

Som et eksempel kan vi lage en funksjon som aproksimerer kvadratroten av et tall:

```python
def kvadrot(x):
   // vi bruker newtons metode tre ganger, starter med x/2
   s = x/2
   d = (s -x/s)/2
   s = s - d
   // se fotnote
   d = (s -x/s)/2
   s = s - d
   d = (s -x/s)/2
   s = s - d
   return s
```
[^fotnote]

[^fotnote]: <la-tex leqno="true" displaymode="true">s_1 = (s_0 - x/s_0)/2</la-tex>

## Test deg selv

Se om du får koden til å virke:

<quest-ion height="40" qid="84289"></quest-ion>




