---
id: binary
title: Binærtall og tegnsett
---

## Binærtall og tegnsett

### Binærtall og Hexadesimale tall

I datamaskiner lagrer vi informasjon som en av to mulige tilstander - 
enten på (1) eller av (0). Dette er den minste informasjonsmengden vi kan lagre
i en datamaskin og kalles en **BIT**.

Nå er en bit for lite til å lagre noe særlig interessant, så vi setter dem sammen til større grupper - typisk bruker vi en **BYTE** som består av 8 BITS.

Med en BYTE kan vi lagre alle tegnene fra alfabetet og andre symboler. Antall forskjellige verdier vi kan lagre med en BYTE er $ 2^8 = 256 $

For å skrive et binærtall deler vi det oftest i grupper på 8 bits (en byte). 
Ulempen er at binærtall blir veldig lange (mange siffer), derfor bruker vi
også hexadesimale tall til å skrive binærtall.

Vi grupperer binærtallet i grupper på 4 BITS og gjør hver gruppe om 
til et hex-siffer (0..9A..F). Tabellen under viser sammenhengen.


```bs
Dec    Binær         Hex    
 0    0000 0000        00
 1    0000 0001        01
 2    0000 0010        02
 3    0000 0011        03
 4    0000 0100        04
 5    0000 0101        05
 6    0000 0110        06
 7    0000 0111        07
 8    0000 1000        08
 9    0000 1001        09
10    0000 1010        0A
11    0000 1011        0B
12    0000 1100        0C
13    0000 1101        0D
14    0000 1110        0E
15    0000 1111        0F
16    0001 0000        10
````




### Tegnsett

Med en BYTE har vi som sagt 256 forskjellige verdier.


Dette er tilstrekkelig til at vi kan lage en koding slik at tallet 64 = 'A', 65 = 'B' osv. Vi kan uten problemer kode inn alle bokstaver - tall og symboler som vi typisk bruker i europeiske språk.

En standard koding med en byte pr bokstav er ASCII - du kan kode alle europeiske tegnsett 
med denne metoden, A=64, B=65 osv.

For å lagre et utvida symbolsett (tenk på japansk eller kinesisk) bruker vi idag UTF-8 som virker slik:

* Dersom bit8 er null - slik som 00110110 - da er det et vanlig ascii tegn.
* Dersom bit8 er 1 - slik som 10010101 - da er det et utvida symbol (2-4) bytes.

Antall ekstra bytes er koda på tilsvarende måte - dermed kan UTF-8 representere alle
ascii tegn med en byte, mens f.eks japanske skrifttegn kan bruke opptil 4 bytes pr symbol.



