---
title: Lese og skrive Filer 
---

## Lese en json fil fra url

:::info
Dette virker bare når filene serves fra en url (localhost eller website).
:::

```javascript
let url = "elevliste.json";
fetch(url).then(r => r.json())
  .then(data => behandle(data))
  .catch(e => console.log("Dette virka ikke."))
```

## Lese en fil fra brukers maskin

TLDR; for varselet under, websida må serves via https, bruker må klikke for å aktivere.

:::caution
Like many other powerful APIs, calling showOpenFilePicker() must be done in a secure context, and must be called from within a user gesture.
:::

### Les fil ved knappeklikk

Merk at **filehandle** defineres utenfor eventlistener slik at den er tilgjengelig senere.  
Merk også at dette er **async** funksjoner.

```javascript
let fileHandle;
butOpenFile.addEventListener('click', async () => {
  // Destructure the one-element array.
  [fileHandle] = await window.showOpenFilePicker();
  // Do something with the file handle.
  const file = await fileHandle.getFile();
  const contents = await file.text();
  textArea.value = contents;
});
```

## Lagre til en fil på brukers maskin

**getNewFileHandle** lar bruker velge et filnavn/fil som vi skal lagre til.  
**writeFile** brukes da etterpå til å skrive ønska innhold til filen (f.eks fra et **textarea**).

```javascript
async function getNewFileHandle() {
  const options = {
    types: [
      {
        description: 'Text Files',
        accept: {
          'text/plain': ['.txt'],
        },
      },
    ],
  };
  const handle = await window.showSaveFilePicker(options);
  return handle;
}

async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();
}
```

## Hent en liste med filer fra en mapp

```javascript
const butDir = document.getElementById('butDirectory');
butDir.addEventListener('click', async () => {
  const dirHandle = await window.showDirectoryPicker();
  for await (const entry of dirHandle.values()) {
    console.log(entry.kind, entry.name);
  }
});
```

## Detaljert gjennomgang

Linken her tar deg til dokumentasjon (november 2020) om
[file system access](https://web.dev/file-system-access/)