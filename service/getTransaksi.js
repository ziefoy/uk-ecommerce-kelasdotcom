const { Transactions }    = require('../models');
async function transaksiGet(req, res){
    const getTransaksi = await Transactions.findAll().then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Transaction Has been successfuly read ", data: getTransaksi}));
}

module.exports = transaksiGet