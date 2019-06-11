var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}


function ensureExists(path, mask, cb) {
    if (typeof mask == 'function') { // allow the `mask` parameter to be optional
        cb = mask;
        mask = 0777;
    }
    fs.mkdir(path, mask, function(err) {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
            else cb(err); // something else went wrong
        } else cb(null); // successfully created folder
    });
}

ensureExists(__dirname + '/upload', 0744, function(err) {
    if (err) // handle folder creation error
    else // we're all good
});
    
//https://stackoverflow.com/questions/21194934/node-how-to-create-a-directory-if-doesnt-exist
