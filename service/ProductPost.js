var multiparty = require('multiparty');
const randomstring	= require("randomstring");
const path 			= require('path');
const fs 			= require('fs');

const { Products }    = require('../models');


async function ProductPost(req, res){
    console.log("req body", req.body)
    var form = new multiparty.Form();
    form.parse(req, async function(err, fields, files) {
        var ext             = path.extname(files.image[0].originalFilename);
        var objExt          = ext.split(".")
        var filename        = randomstring.generate(6);
        var readerStream    = fs.createReadStream(files.image[0].path);
        var dest_file       = path.join(process.env.IMAGES_DIRECTORY, filename + "." + objExt[objExt.length - 1]);
        var writerStream    = fs.createWriteStream(dest_file);
        readerStream.pipe(writerStream);
        var productCreate = await Products.create({
            name: fields.name[0],
            description: fields.description[0],
            price: fields.price[0],
            image: filename + "." + objExt[objExt.length - 1]
        }
        ).then(Barang => {
            return Barang;
        })
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message:" Product Has Been Create ", data: productCreate}));
    });
}

module.exports = ProductPost