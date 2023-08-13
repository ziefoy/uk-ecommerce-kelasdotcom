const { Users }    = require('../models');
const md5 = require('md5');

async function UserPost(req, res){
    console.log("req body", req.body)
    
    const { email, password } = req.body;
    let convertPassword = md5(password);

    const userCreate = await Users.findOne({
        where:{
            email, 
            password: convertPassword,
        }
    }).then(function (result) {
        return result
    });
    console.log(userCreate);
    if (userCreate != null){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message:"Login Success ",data: null}));
    }else{
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Failed", display_message:"Login Failed",data: null}));
    }

}

module.exports = UserPost