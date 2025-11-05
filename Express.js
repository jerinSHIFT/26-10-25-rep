

//  const{concatStrings} = requestAnimationFrame("./src/str-ops.js");// animation ta browser animation er jonno use hoi  ..
 
//  console.log(concatStrings("I am a dev","learning nodejs"));
// main.js
// const { concatStrs, getCharCount } = require("./str-ops.js"); //import function 

// // console.log(concatStrs("I am a dev", "learning nodejs","using vs code"));

// console.log(getCharCount(

//     concatStrs("I am a dev", "learning nodejs","using vs code")

// ));

// another way
//----------------
const strOps = require("./str-ops.js"); //import function 

console.log( strOps.getCharCount(

    strOps.concatStrs("I am a dev", "learning nodejs","using vs code")

));

// 1️ .Node.js er  HTTP module import kora
const http = require("http");

// 2️ sever create kora
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK status
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from Node.js!\n");
});

// 3️  server open kora ...
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/`);
});
