---
title: Enkel webside
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Design av en enkel webside

Vi starter på vanlig måte, lag en mappe med navnet **fugler**.  
Lag ny fil - **fugler.html**, skriv !, ordne tittel til "Fugler" og legg
til link for **fugler.css**.  
Framgangsmåten er [vist detaljert her](html.md#strukturen-på-en-web-side).

Vi skal prøve å lage en side med denne strukturen:

```dummy

             [Overskrift](Norges fugler)

 * Meiser         [overskrift](Meisefugler)
 * Ender              
 * Gjess             [Nummerert liste a,b,c, ...]
 * Troster             a  Kjøttmeis
                       b  Blåmeis

  (bilde av kjøttmeis)  (bilde av blåmeis)   ....                     
```

### Bruk av **div** til å strukturere sida

Vi kan dele sida opp med `<div>` som vist under:

```html
<div id="overskrift"> ... </div>
<div id="meny"> ... </div>
<div id="gruppering"> 
    Meisefugler (med kode slik at dette er en overskrift)
    (kode for å lage en ordna liste)
</div>
```

Senere skal vi se på andre tags - slik som **article,header,footer** osv som er mer presise enn div.
Ofte vil du se at mange websider bruker div til nesten alt og bare setter en klasse på div-en for å
bestemme hva den brukes til. Det er bedre å bruke mer spesialiserte tags slik som *header* - da vil de som skal vedlikeholde sida lettere se intensjonen bak designet.

:::info Oppgave
Start på design av denne sida.  
Husk at du kan plassere diver [som beskrevet her](html.md#en-div-med-id).
:::


