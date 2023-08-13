const { Users }    = require('../models');
async function getUser(req, res){
    const getUser = await Users.findAll().then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"User Has been successfuly read ", data: getUser}));
}

module.exports = getUser