const { Products }    = require('../models');
async function productGet(req, res){
    const {id} = req.params
    const productGet = await Products.findAll({where:{id: id}}).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"List Success ", data: productGet}));
}

module.exports = productGet