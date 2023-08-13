const { DATE } = require('sequelize');
const { Transaction }    = require('../models');


async function transactionsPost(req, res){
    console.log("req body", req.body)
    
    const { user_id, product_id } = req.body;

    const countTransaction = await Transaction.findAll().then(function (result) {
        return result
    }); 
    let totalTrasactions = countTransaction.length+1
    let orderNumber = "TRA"+totalTrasactions;
    console.log(orderNumber);
    const trasactions = await Transaction.create({
        user_id, 
        product_id, 
        order_number: orderNumber
    }).then(function (result) {
        return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Transaction Success", data: null}));
}

module.exports = transactionsPost