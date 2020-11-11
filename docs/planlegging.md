---
id: planlegging
title: Planlegging
---
I virkelig store prosjekter er det ofte aktuelt å skille grensesnittet og
funksjonaliteten fra hverandre. Det er fordi det ikke er gitt at et system
kun skal ha ett grensesnitt (for eksempel både web, mobil, applikasjon), og
at grensesnittet skal være utskiftbart uten å endre selve systemet i bunn. Vi
ønsker med andre ord at det er en svakest mulig binding mellom
grensesnittet og selve funksjonaliteten.

Til prosjekter av den størrelsen som vi ser på i denne boka, er
det imidlertid bedre å planlegge grensesnitt og funksjonalitet
sammen. Det er som oftest lite funksjonalitet i systemet
som ikke er direkte knyttet til grensesnittet når
applikasjonene er små.

Til å planlegge grensesnittet og funksjonaliteten er
det nødvendig med noen konkrete teknikker. Vi
skal i denne boka beskrive følgende teknikker:

* Flytdiagram
* Psedokode
* Handlingsdiagram
* Brukergrensesnittskisser (wireframes)

Det er ikke sagt at alle typer prosjekter trenger
å benytte alle disse teknikkene, og det kan også
være at din arbeidsmetode for planlegging
krever helt andre teknikker. Disse teknikkene
kan imidlertid være et utgangspunkt for
planleggingen.

## Flytdiagram
Et flytdiagram forteller noe om den såkalte kontrollflyten i programmet.
Dette innebærer hvilke valg som systemet skal ta, hvilken input systemet
skal hente, hvilken output systemet skal gi, samt hvilke prosesseringer/
beregninger som skal gjøres underveis.

Man tegner ofte et flytdiagram for hver operasjon som skal gjøres i
systemet, da med ett eller flere start- og avslutningspunkter på
prosessen. Flytdiagram kan både benyttes for å illustrere den
overordnede flyten i applikasjonen og detaljene i en enkelt
del. Ofte kan det være lurt å lage flytdiagrammer for flere
nivåer.

Til bruk i vår sammenheng har vi forenklet den
formelle standarden for flytdiagrammer en god
del og introduserer kun tre ulike elementer.

Disse er:
* Ellipser: Start- eller sluttpunkter for
sekvensen som kontrollflyten omhandler.
* Diamanter: Valg som systemet skal gjøre.
Selve testen står inne i diamanten, og vi setter
på etiketter på de ulike utfallene.
* Rektangler: Prosessering som systemet skal
gjøre. Dette tilsvarer én eller flere instruksjoner
i programkoden. Teksten i rektangelet gir en
kort oppsummering av hva prosesseringen gjør.
