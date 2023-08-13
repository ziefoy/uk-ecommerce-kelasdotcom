const { Products }    = require('../models');
async function productDelete(req, res){
    const {id} = req.params
    var checkProduct = await Products.findOne({
        where:{
            id: id
        }
    })

    if(checkProduct == null){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Not Found", display_message:"Data not found", data: null}));
    }else{
        const productDelete = await Products.destroy({where:{id: id}}).then(function (result) {
            return result
        });
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message:"Profuct has been delete", data: null}));
    }

}

module.exports = productDelete