var path = require("path")
// console.log(path)
let dirName = path.dirname("C:/Users/LEGION/Desktop/mernlpu/nodejs/path")
console.log(dirName)
console.log((path.extname("C:/Users/LEGION/Desktop/mernlpu/nodejs/path.js")))
console.log((path.basename("C:/Users/LEGION/Desktop/mernlpu/nodejs/path.js")))

// path.parse(path) => return an object that contains properties
//dir
//root
//base
// name
//ext
console.log(path.parse("C:/Users/LEGION/Desktop/mernlpu/nodejs/path.js"))

let paath = path.format({
    root:"c:/ignored",
    dir:"c:/Users/LEGION/Desktop/mernlpu/nodejs",
    base:"path.js",
    ext:".js/ignored",
    name:"path/ignored"
})
console.log(paath)