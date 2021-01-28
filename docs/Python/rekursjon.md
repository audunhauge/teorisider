---
title: Rekursjon
---

### Nullpunkt til en funksjon

Vi skal programmere en løsning som finner nullpunkt til en gitt funksjon.
Jeg har valgt `f(x) = x³ +2` som eksempelfunksjon.

```math 
f(x) = x^2+2dfgdfgdfg
dfgdfg
dfg
dfg
dfg
```


Jeg velger halveringsmetoden, vi antar at `f(a)*f(b) < 0` slik at vi har minst
en kryssing av x-aksen, antar også at funksjonen er kontinuerlig.

Rekursjon - det at en funksjon bruker seg selv - er en metode som er godt egna til å oversette
en matematisk algoritme til et program.

Typisk dersom vi har kode som refrerer til tidligere verdier: Sn = Sn-1 osv, da vil rekursjon
være en egna metode.

Alternativet til rekursjon er å lage en løkke, men da må vi selv føre regnskap med verdiene på
variablene som endrer seg for hver iterasjon.

I eksemplet under er endpunktene **a** og **b** de som endrer seg - merk
at solve(a,b) bruker seg selv med solve(a,c) eller solve(c,b). **c** er midtpunktet
og metoden velger enten a eller b avhengig av hvor nullpunktet må være.

I en rekursiv funksjon er det helt nødvendig å starte med **slutt-kriteriet** for funksjonen
før den kaller opp seg selv (starter seg selv på nytt).
Uten betingelse for slutt vil funksjonen kalle seg selv opp i en uendelig løkke
(som tar brått slutt når maskinen ikke har mer minne tilgjebgelig).

For solve() har jeg to kriterier for å avslutte - enten antall iterasjoner er > 200
eller avstand mellom a,b er mindre enn 0.000...1 (ønska presisjon).


```python
from browser import window,alert


def fu(x):
  return x*x*x +2

# startverdiene - vet at f(a) < 0 og f(b) > 0
a = -1.5
b = 1
# skal plotte punktene som er undersøkt
punkter = [ [a,fu(a)] , [b,fu(b)] ]

# halveringsmetoden, n teller antall ganger vi halverer.
# a er nedre grense, b er øvre, antar at f(a) * f(b) < 0 dvs motsatt fortegn
# merk at denne løsningen regner ut fu() til samme x verdi flere ganger
#   med litt kløkt kunne vi ta vare på de y-verdiene vi har beregna
#   og som vi trenger i neste interval
def solve(a,b,n=0):
  if n > 200:
    return (a,n)
    # avbryter dersom vi ikke finner noe nullpunkt
  if abs(a-b) < 0.000001:
    return (a,n)
    # vi har et så lite interval at vi gir oss
  n += 1
  nede = fu(a)
  oppe = fu(b)
  c = (a+b)/2
  midt = fu(c)
  # vi skal plotte punktene etterpå
  punkter.append([c,midt])
  if (midt * nede) < 0:
    return solve(a,c,n)
  else:
    return solve(c,b,n)

# merk at solve(a,b) finner midtpunkt c og tar så solve(a,c) eller solve(c,b)
# tankegangen er:  
#    jeg har en løsning som finner nullpunkt mellom a,b 
#    dersom avstanden (a-b) er liten - da er det et nullpunkt
#    ellers så beregner jeg et midtpunkt og bruker løsningen på et mindre intervall
#    jeg må bare sjekke at intervallet inneholder en kryssing av x-aksen
#    dvs f(a)*f(c) er negativ eller f(c)*f(b) er negativ
#    trenger bare sjekke en av dem, da vi forutsetter at f(a)*f(b) < 0

# solve() gir tilbake to verdier, nullpunkt og antall iterasjoner
(nullpunkt,iter) = solve(a,b)

# vis svarene
alert(nullpunkt)
alert(iter)

# tegn grafen
options = {
 "target"  :"#fu",
 "data"  : [
            { "fn":"x*x*x+2"},
            { "points":punkter, 
              "fnType":'points',
              "graphType":'scatter'
            }, 
           ]
}
window.functionPlot(options)

```

Du kan teste koden her:

<quest-ion height="45" qid="84310"></quest-ion>