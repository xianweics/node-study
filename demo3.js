let fs=require("fs");
let data='';
let rs=fs.createReadStream('input.txt');
rs.on('data',function (r) {
    data+=r;
});
rs.on('end',function () {
    console.log(data+'\n', 'done');
});
rs.on('error',function (err) {
    console.info(err)
});


let rw=fs.createWriteStream('input1.txt');
rw.write('this is a test1');
rw.end();
rw.on('finish',function () {
    console.log('write done');
});

rw.on('error',function (err) {
    console.log(err)
});



