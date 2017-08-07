<<<<<<< HEAD
let fs=require("fs");
//阻塞
let data=fs.readFileSync("input.txt");
console.info(data.toString());
console.log("done data");

//非阻塞
fs.readFile("input.txt",function (err,data) {
  if(err){
    console.error(err);
  }
  console.info(data.toString());
});
console.log("done async");

=======
let fs=require("fs");
//阻塞
let data=fs.readFileSync("input.txt");
console.info(data.toString());
console.log("done data");

//非阻塞
fs.readFile("input.txt",function (err,data) {
  if(err){
    console.error(err);
  }
  console.info(data.toString());
});
console.log("done async");

>>>>>>> 8d72dc8fcc8b78f6d0a0af6973e42bba684d823e
