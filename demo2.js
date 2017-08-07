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

