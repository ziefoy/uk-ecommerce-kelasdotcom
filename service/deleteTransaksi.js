const { Transactions }    = require('../models');
async function deleteTransaction(req, res){
    const deleteTransaction = await Users.destroy({where: {id:parseInt(req.params.id)}}).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Transactions has been delete ", data: deleteTransaction}));
}

module.exports = deleteTransaction