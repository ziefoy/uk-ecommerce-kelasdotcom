const jwt   = require('jsonwebtoken');
function generateJWT(username) {
    const today = new Date();
    const exp   = new Date(today);
    exp.setDate(today.getDate() + 600);
    console.log("time", Math.floor(exp.getTime() / 1000));
    return jwt.sign({
      username:username,
      exp: Math.floor(exp.getTime() / 1000)
    }, 'binar');
    //"binar"itu adalah secret key

}
function verifyJWT(token) {
    return jwt.verify(token, process.env.JWT_SECRET || "binar", (err, data) => {
      if(err){
        return err;
      }else{
        return data;
      }
    });
}

function response(res, status, message, display_message, data){
    var result = {
        status : status,
        message : message,
        display_message : display_message,
        data : data,
        
    };
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(result, null, 2));
}
exports.generateJWT     = generateJWT;
exports.verifyJWT       = verifyJWT;
exports.response        = response;
