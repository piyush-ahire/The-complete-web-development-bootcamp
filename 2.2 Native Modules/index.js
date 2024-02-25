// to import a module 
const fs = require("fs");
//to create a file
// fs.writeFile("message.txt", "hello from node", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

fs.readFile('message.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 