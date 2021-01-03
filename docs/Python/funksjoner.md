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
   # vi bruker newtons metode tre ganger, starter med x/2
   s = x/2
   s = (s + x/s) * 0.5
   s = (s + x/s) * 0.5
   s = (s + x/s) * 0.5
   return s
```

Legg merke til at koden `s = x/2` betyr at variabelen s skal få ny verdi:  
*uttrykket som står på høyre side av likhetstegnet.*  
Dette er altså ikke en likning, men en tilordning.

De tre neste linjene utfører hver sitt trinn i Newtons metode.  
I matematisk notasjon ville vi typisk skrevet noe slik:

<la-tex  leqno="true" displaymode="true">s_1 = 0.5 \cdot (s_0 + x/s_0)</la-tex>
<la-tex  leqno="true" displaymode="true">s_2 = 0.5 \cdot (s_1 + x/s_1)</la-tex>
<la-tex  leqno="true" displaymode="true">s_3 = 0.5 \cdot (s_2 + x/s_2)</la-tex>

(kan ikke skrive s_n = s_(n-1) da latex og markdown krangler foreløpig)

I python brukes samme variabel **s** om igjen - den gis ny verdi som er avhengig av den gamle.



### Test deg selv

Se om du får koden til å virke:

<quest-ion height="40" qid="84289"></quest-ion>

## Bruke funksjoner

Du må definere funksjoner før du kan bruke dem, men det finnes også en mengde innebygde funksjoner i python.
Mange av dem vi trenger finnes i biblioteket **math** , derfor vil du ofte se kode som vist under:

```python
import math
def sirkelAreal(r):
  return math.pi * r ** 2
  # math inneholder også konstanter som pi og e

def _trekantAreal(A,b,c):
  # bruker arealsetningen
  return 0.5 * b * c * math.sin(A)
  # merk at A er vinkel i radianer

def deg2rad(deg):
  # konverterer fra grader til radianer
  return math.pi * deg / 180

def trekantAreal(A,b,c):
  # brukervennlig versjon
  return _trekantAreal(deg2rad(A),b,c)

print(f'b=5,c=4 og A=53.13° gir areal {trekantAreal(36.8698,5,4)}')  
```

Skriv inn koden over i quizen - bruk alert() istedenfor print

<quest-ion height="40" qid="84290"></quest-ion>

## En enkel difflikning

Anta at vi kaster en ball med vx= 3 m/s og vy=4m/s.
Startposisjon er (0,2) (alle tall i meter).

Vi lager kode som estimerer hvor langt kastet blir:

```python
from browser import alert

# bruker en klasse til å samle egenskapene ballen har
# posisjon og fart
class Ball:
  x = 0
  y = 2
  vx = 3
  vy = 4

b = Ball()
# b er nå en variabel av typen Ball, b har egenskapene 
#   som er definert i klassen, x,y,vx,vy
#   b.x gir oss x-posisjonen til ballen

dt = 0.01
i = 0
# antar at ballen lander innen 3s
while i < 300:
  b.x += b.vx*dt
  b.y += b.vy*dt
  b.vy -= 9.8*dt
  i += 1
  if b.y < 0:
    # negativ y betyr at vi har landa
    # et bedre estimat er midt mellom forrige punkt og dette
    break

# viser beregna x verdi (lengde på kastet)
alert(b.x)
```

Test  om koden virker:

<quest-ion height="45" qid="84290"></quest-ion>

Lag en variabel **prev** som lagrer forrige b.x og se om 
(b.x+prev)/2 er et bedre estimat. Test i quizen over.
