const { Users }    = require('../models');
async function deleteUser(req, res){
    const deleteUser = await Users.destroy({where: {id:parseInt(req.params.id)}}).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"User has been delete", data: deleteUser}));
}

module.exports = deleteUser