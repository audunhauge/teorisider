---
id: testing
title: Testing
---
## Beskrivelse av en testplan

* Ikke beskriv programmet
* Beskriv hvordan teste
* Beskriv hva du tester
* Beskriv akseptable resultat av testene

## Eksempel på en testplan

Testplan for eksamen vår 2019.  
Skal teste funksjonen pixelcalculator som beregner antall pixler  
gitt bredde og høyde.

1. Test at app godtar bare gyldige verdier på bredde/høyde Skal akseptere tall i område \(1..1920\) for begge. Tester med negative tall, 0, 1, 200, 500, 1920, 1921, store tall. Forventer aksept for alle tall 1..1920. Forventer feilmelding for alle andre. RESULTAT: godtar alle tall mellom 1..1920
2. Test at app beregner riktig. Tester med 1x1 1x100, 1000x1, 513x265, 1920x1920 Forventer 1x1 gir 1pixels 0.0000001Mpix RESULTAT riktige verdier

## Brukertester

Uansett hvor mye tid vi bruker på å lage en god testspesifikasjon, vil denne
alltid være preget av at det er vi som har designet og lagd applikasjonen
som også definerer hvilke tester som skal utføres. Det vil derfor alltid
være handlinger som blir gjort eller input som blir brukt av de virkelige
brukerne, som vi ikke hadde i tankene.

Derfor er det svært viktig også å utføre såkalte brukertester. I disse testene
lar vi brukerne jobbe med applikasjonen vår mens vi observerer eventuelle
feil som avdekkes, hva brukeren synes er vanskelig å finne ut av, osv. Det
er viktig at brukeren "tenker høyt", slik at vi kan lære mest mulig om
hvordan brukere oppfatter vårt system.

I en slik brukertest er det vanlig å gi testpersonene en og en av
forhåndsdefinerte oppgaver, som hver representerer daglige gjøremål eller
spesielle situasjoner. Vi må også la brukerne gjøre disse uten å bryte inn
med hjelp eller andre innspill. Den eneste gangen vi bør hjelpe en bruker,
er om det er fare for at resten av testene ikke kan bli utført fordi brukeren
står helt fast.

Det er også viktig at vi forklarer brukerne hensikten med de oppgavene
de skal gjøre, og historien rundt. På den måten kan de sette seg inn i en
faktisk situasjon, og brukertesten blir mest mulig reell.