const fs = require('fs');
const { listenerCount } = require('process');

async function print(path) {
  const dir = await fs.promises.opendir(path);
  const list = [];
  for await (const dirent of dir) {
    if(!dirent.isDirectory())  list.push(dirent.name);
  }
  console.log(list);
}
print('./docs/Planlegging').catch(console.error);
module.exports = {
  someSidebar: {
    JSTeori: (`variable,string,JStheory/array,lokker,`
      + `funksjoner,beregninger,betingelser,objects,klasser,`
      + `mapset,praktisk,Planlegging/testing,skjema,filformat,`
      + `webapi,canvas,custom`).split(","),
    Planlegging: ('Planlegging/firesteg,Planlegging/kravspek,Planlegging/planlegging,'
    +'Planlegging/testing,Planlegging/dokumentasjon'
    +'').split(","),
    Sammendrag: ['uke34',
    'uke35',
    'uke36',
    'uke37',
    'uke38',
    'uke4043',
     ],
    Fagplan: ['laereplanmal'],
    Prøver: ['prove1','prove2p','proves1']

  },
};
