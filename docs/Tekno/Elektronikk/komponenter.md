---
title: Elektroniske komponenter
---


## Du skal kjenne til disse

|Navn |Bilde|Beskrivelse|
|-------|-----------|--|
| Resistor | <elec-tronic type="resistor"></elec-tronic>| En passiv motstand|
| Transistor  |<elec-tronic type="transistor"></elec-tronic>| Elektronisk bryter|
| Diode | <elec-tronic type="diode"></elec-tronic>|Slipper strøm en vei|
| Inductor  |<elec-tronic type="inductor"></elec-tronic>|Spole |
| Capacitor |<elec-tronic type="capacitor"></elec-tronic>| Kapasitans |
| LED  |<elec-tronic type="led"></elec-tronic> | Light emitting diode |


## Passive komponenter
Passive komponeneter er komponenter som ikke gir noen effektforsterkning, de opptrer ofte som
hjelpekomponenter for halvlederkomponentene (transitorer og dioder).

### Motstander (resistorer)
<elec-tronic type="resistor"></elec-tronic>|
Motstanden har to tilkoblingsledninger (bein) og har ofte fargede ringer som forteller hvilken resistans den har. Symbolet
ligner på den virkelige motstanden, og angis med en betegnelse og en verdi (f.eks. R1 og 27 k). R’en forteller oss at
denne komponenten er en Motstand, indeksen 1 at det er motstand nr. 1 og 27 k at den har verdien 27 000 Ohm. Det
spiller ingen rolle hvilken vei motstanden kobles. Legg
merke til at komponenten ofte kalles resistor og dens verdi, resistans. I dette heftet har vi valgt de
mer folkelige begrepet motstand, men velger å bruke resistans for verdien til motstanden siden
dette brukes i skolen.

#### Hva brukes den til?
I elektroniske kretser brukes motstander bl.a. til å begrense strømmer og til å gi andre komponenter (f.eks. transistorer) riktige arbeidsbetingelser. Ofte brukes motstander også til å gjøre en strøm
om til en spenning. Spenningspotensialet over en motstand vil variere i takt med strømmen gjennom den i overenstemmelse med Ohm’s lov.
Slik virker motstanden
I en elektrisk leder finnes mange frie ladninger (elektroner), som lett lar seg flytte av et elektrisk
felt (se kapittel 3). I en motstand er elektronene tettere bundet til atomkjernene og lar seg ikke så
lett flytte.

La oss ta utgangpunkt i en enkel elektrisk krets med et batteri, en motstand, R, og to ledninger.
Batterispenningen er U, i følge Kirchoffs andre lov vil summen av potensialforskjellene (spenningsfeltet) langs en sluttet krets alltid være lik null. Mesteparten av spenningsfeltet blir derfor
liggende over motstanden , mens en liten rest, U, ligger fordelt langs ledningene. En god elektrisk leder vil derfor så og si kortslutte det elektriske feltet.
Figur 2.2 Fordeling av det elektriske feltet , U, i en enkel sluttet krets.
Siden det er det elektriske feltet som driver elektronene framover, skulle en derfor tro at elektronene hadde problemer med å komme seg fram langs ledningene siden feltet i disse er så svakt,
mens de i motstanden skulle få stor fart da feltet her er mye sterkere.

Dette er også riktig, men siden elektronene møter
liten motstand i ledningene, vil de, på tross av at feltet er svakt, kunne akselerere over lengre strekninger
uten sammenstøt. I en motstand derimot vil de møte
større motstand og sammenstøtene vil være hyppige.
På tross av at de stadig bremses opp på grunn av sammenstøt, vil de raskt gjenvinne stor hastighet på
grunn av det sterke feltet. I sammenstøtene vil de
avgi energi og motstanden blir varm.

En ekvivalent til strømmen i en elektrisk krets er vist i figur 2.3. Her er spenningen representert
med tyngdekraften, elektronene med kuler og ledningene med renner. Motstanden er representert
med sperrer som hindrer kulene i fallet. Kulene vil som elektronene, avgi energi i fallet.
Motstander kan øve ulik motstand i kretsen avhengig av resistansen. En motstand med høy resistans vil øve stor motstand 
og strømmen vil bli liten. En motstand med lav resistans vil øve liten motstand og strømmen vil bli større.

### Kondensatorer (capasitor)

<elec-tronic type="capacitor"></elec-tronic>

Kondensatorer er to metall- eller folieplater som ligger tett inntil hverandre uten at de berører
hverandre. Jo større platene er, jo større verdi har kondensatoren. Kondensatorers verdi måles i
Farad (fork. F). Farad er imidlertid en meget stor måleenhet. Det er derfor vanlig å brukeF
(mikroFarad), nF (nanoFarad) og pF (pikoFarad) når vi angir verdien til en kondensator. Kondensatorens verdi kalles også kapasitans.
Kondensatorer angis med en betegnelse og en verdi (f.eks. C1 og 0,1 F). C’en forteller oss at
denne komponenten er en Capasitor, indeksen 1 at det er kondensator nr. 1 som har verdien
0,1 micro F.

#### Hva brukes den til?
Kondensatorer har mange ulike anvendelser. Siden de slipper gjennom vekselspenning og sperrer
for likespenning, brukes de ofte til å skille trinnene i en forsterker. Andre ganger brukes de til å
kortslutte vekselspenning til jord, eller sørge for å jevne ut spenningen når en ønsker å omdanne
vekselspenning til likespenning.