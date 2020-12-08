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

### Dioden

Dioden har to terminaler (bein) som navnet sier (di
betyr to), en katode og en anode.

Dioden er en komponent som leder strøm den ene
veien og omtrent ingen strøm den andre veien. Dersom vi kobler batteriets positive pol til anoden og
negative pol til katoden, vil dioden lede strøm. Kobler
vi batteriet omvendt vil det ikke gå strøm gjennom
komponenten.


#### Hva brukes den til?

Dioder brukes for eksempel til å likerette vekselspenning.
Spenningen slik vi får den levert fra strømnettet i stikkontanten, er en vekselspenning. Dersom vi
måler polariteten til spenningen i stikkontakten, ville vi se at den endrer polaritet (retning) 100
ganger i sekundet. Eller den går fra å være positiv til være negativ og tilbake igjen 50 ganger i
sekundet.

Når spenningen har samme retning
hele tiden kaller vi den en likespenning. Når vi skal bruke elektriske
spenninger til elektronikk, f.eks. i en
radio, så trenger vi likespenning. Ved
hjelp av dioder kan vi omforme en
vekselspenning til en likespenning.

I riktig gamle dager, i radioens barndom, ble dioder brukt i krystallapparater for å motta AM-radio (AmplitudeModulerte signaler).
Dioden er også senere vært en viktig komponent i radio- og kommunikasjonsteknikk.


### Transistoren

Transistoren har tre tilkoblingsledninger
(bein). Disse betegnes som henholdsvis:
Base (b), emitter (e) og collector (c)3
. 

Det er viktig at de forskjellige tilkoblingsledningene kobles riktig i kretsen ellers vil den ikke
virke som den skal. Symbolet for transistoren
gis en betegnelse og en typekode (f.eks. T1 og BC547C). T står for Transitor, indeksen 1 angir at
det er transitor nr. 1 og BC547C er typen transistor.

Vi må passe på at vi ikke lar det gå for stor strøm gjennom transistorer, da vil de bli ødelagt.

#### Hva brukes den til?

Transistoren ble oppfunnet i 1947 av tre amerikanere. Siden den gang er den tatt i bruk på nær
sagt alle områder. Vi finner flere millioner i en mobiltelefon. En moderne datamaskin inneholder
flere milliarder transistorer. Videre finner vi transistorer i fjernsyn, radio, biler, videokamera, i
leketøy, klokker, mp3-spillere osv.

##### Hva er det med transistoren som gjør den så anvendelig til så mange forskjellige ting?


Transistoren brukes hovedsakelig på to måter. Enten til å forsterke svake elektrisk signaler eller
som elektrisk strømbryter. La oss først se på transistoren brukt som bryter.

#### Transistoren som bryter
Transistoren har tre terminaler (bein). Dersom vi tenker på transistoren som en bryter vil to av terminalene tilsvare de to strømførende ledningene til bryteren (figur 2.19 A). Lampa vil ikke lyse
siden ingen trykker på knappen (b).

Vi bytter ut bryteren med en transistor (figur 2.19 B) og ser at pæra fortsatt ikke lyser. Dette skyldes at styreterminalen (basen) til transistoren ikke er tilkoblet.
På figur 2.19 C har vi byttet ut tegningene av transistoren, lyspæra og batteriet med symboler. Vi
ser at styreterminalen, basen, på transistoren ikke er tilkoblet noe sted og pæra lyser ikke. Transistoren oppfører seg som en åpen bryter som ikke leder strøm.

Figur 2.19 Transistoren som bryter (av).

Hva får så pæra til å lyse? På figur 2.20 A) har vi trykket på bryteren slik at vi får en sluttet krets,
dvs. at det kan gå strøm fra batteriet, gjennom bryteren, lyspæra og tilbake til batteriet, og lyspæra
lyser.

Figur 2.20 Transistoren som bryter (på).

På figur 2.20 B) har vi byttet ut bryteren med en transistor. Vi har dessuten ført en ledning fra
basen (styreterminalen) på transistoren opp til + polen på batteriet. Det som da skjer er at det går
en liten strøm fra + polen på batteriet og inn i basen på transistoren. Denne strømmen gjør at transistor-”bryteren” åpner og leder den store strømmen som får lyspæra til å lyse. Vi har dessuten
lagt inn en motstand i baseledningen for å begrense strømmen.
Den som ser nøye på transistorsymbolet i figur 2.20 C), ser at det sitter en liten diode mellom
basen (b) og emitteren (e). Når vi legger basen til plusspolen på batteriet, begynner denne dioden
å lede strøm. Dette medfører at transistor-”bryteren” åpner og den store strømmen begynner å gå
mellom collectoren og emitteren. I datamaskiner brukes transistoren nesten utelukkende som
bryter.
#### Transistoren som forsterker
Den andre viktige anvendelsen for transistorer er som signalforsterkere.

De fleste har brukt
forsterkere i form
av lydforsterkere
(høttaleranlegg,
stereoanlegg, CDspillere, MP3-
spiller, tellefon
osv.). Når vi snakker inn i en
mikrofon, omdannes lydbølgene til
små elektriske
strømmer som
varierer i takt med
lydbølgene. Disse
små strømmene
føres gjennom
ledninger til en
elektronisk forsterker. Forsterkeren forsterker opp de små elektriske strømmene slik at de blir
store nok til å drive en høyttaler