const { Users }    = require('../models');
const md5 = require('md5');

async function UserPut(req, res){
    console.log("req body", req.body)

    const { id, full_name, email, password, address } = req.body;
    let convertPassword = md5(password);

    const checkUser = await Users.findOne({
        where: {
            id:id
        }
    })

    if (checkUser == null){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(404);
        res.end(JSON.stringify({message: "Failed", display_message:"data not found", data: null}));
    }    
    else{
        const userUpdate = await Users.update({
            full_name, 
            email, 
            password: convertPassword,
            address,
        },{
            where: {
                id:id
            }
        }).then(function (result) {
            return result
        });
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message:"Update Success ", data: userUpdate}));
    
    }
}
module.exports = UserPut