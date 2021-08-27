const jwt = require('jsonwebtoken');

module.exports = function auth(req,res,next)
{
    const token = req.header('token');
    if(!token) return res.send('No token or wrong! '+ token);
    try{
          const verified = jwt.verify(token,process.env.TOKEN_SECRET);
          req.luser = verified;
          console.log('A token was verified');
          next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
}