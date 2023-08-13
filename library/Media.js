
const fs = require('fs');
const sharp = require('sharp')

const exists = (path) => {
    try{
        return fs.statSync(path).isFile();
    }
    catch(e){
        return false
    }
}

module.exports = function Media(path, format, width, height){
    return new Promise((resolve, reject) => {
        let image = path;
        if(!exists(image)){
            return reject('image does not exists')
        }
        const readStream = fs.createReadStream(image);
        let transform = sharp();
        if (format){
            transform = transform.toFormat(format);
        }
        if (width || height){
            transform = transform.resize(width, height,{
                kernel: sharp.kernel.nearest,
                fit: sharp.fit.outside
            })
        }
        return resolve(readStream.pipe(transform))
    })
}