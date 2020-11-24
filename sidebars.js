const fs = require("fs");
const map = {};
const base = 'docs/';
// only first level can mix dirs and files
function build(path, map) {
  console.log("Recur:",path,map);
  const dir = fs.readdirSync(base + path,{withFileTypes:true});
  for (const dirent of dir) {
    if (dirent.isDirectory()) {
      if (Array.isArray(map)) {
        const sub = { type: "category", label: dirent.name, items: [] };
        map.push(sub);
        build(path + dirent.name + "/", sub.items);
      } else {
        const sub = [];
        map[dirent.name] = sub;
        console.log(dirent.name);
        build(path + dirent.name + "/", sub);
      }
    } else {
      if (Array.isArray(map)) {
        map.push({type:'doc',id:path + dirent.name.replace('.md','') });
      } else {
        console.log("Came here",dirent.name,map);
      }
    }
  }
}

  console.log("heisan");
  build("", map);
  console.log(map);

  module.exports = {
   map
  };

