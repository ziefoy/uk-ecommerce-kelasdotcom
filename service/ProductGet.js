const { Products }    = require('../models');
async function productGet(req, res){
    const productGet = await Products.findAll().then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: productGet}));
}

module.exports = productGet