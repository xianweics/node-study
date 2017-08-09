let fs = require('fs');
fs.stat('input.txt', function (err, fd) {
    console.info(fd)
});

fs.open('input.txt', 'r+', function (err, fd) {
    let buf = new Buffer(1024);
    if (err) {
        console.error(err)
    }
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.error(err)
        }
        console.log('start read', bytes);
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
            fs.close(fd, function (err) {
                if (err) {
                    console.error(err)
                }
                console.log('close files');
            })
        }
    })
});