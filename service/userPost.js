const { Users }    = require('../models');
const md5 = require('md5');

async function UserPost(req, res){
    console.log("req body", req.body)

    const { full_name, email, password, address } = req.body;
    let convertPassword = md5(password);

    const userCreate = await Users.create({
        full_name, 
        email, 
        password: convertPassword,
        address,
    }).then(function (result) {
        return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Registration Success ", data: userCreate}));
}

module.exports = UserPost