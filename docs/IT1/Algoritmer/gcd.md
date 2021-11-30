---
id: gcd
title: Beregning av største felles divisor
---

### Euclids algoritme

Gitt to tall **a** og **b**  
Vi skal finne største felles divisor - det største tallet som begge kan deles på.

### Pseudokode

```bs
så lenge som b er ulik 0
  t settes lik b
  b settes til a % b
  a settes til t
gi tilbake a
```

### Lag en app som beregner gcd for to tall bruker skriver inn

```bs
Skriv inn a : |____|
Skriv inn b : |____|
(Beregn gcd)

Største felles divisor for a,b er xxx
```

Ved klikk på knappen gcd skal funksjonen gcd kjøres med parameter a,b.
Under ser du hvordan gcd skal defineres:

```js
const gcd = (a,b) => {
    // oversett pseudokoden til js
    // så lenge som ==> if
    // t settes til/lik b ==> t = b
    // gi tilbake a ==> return a
}
```