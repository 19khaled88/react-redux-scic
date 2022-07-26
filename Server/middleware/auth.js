const jwt = require('jsonwebtoken')

const auth = (req, res,next)=>{
    const token = req.header("x-auth-token")

    if(!token) return res.status(401).send('Unauthenticated access')

    try{
        const secretekey = process.env.SECRETE_KEY
        const user = jwt.verify(token, secretekey)
        req.user = user 
        next()
    }catch(error){
        res.status(400).send('Invalid access')
    }
}

const isAdmin=(req, res, next)=>{
    auth(req, res, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).send('Unauthorised access')
        }
    })
}

module.exports = {auth, isAdmin}