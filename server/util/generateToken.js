import jwt from "jsonwebtoken"



const generateToken = (userID) => {

    const payload = {
        sub: userID,
    };
    const options = {
        expiresIn: "1h"
    };

    const secretOrPrivateKey = process.env.TOKEN_SECRET

    const token = jwt.sign(payload, secretOrPrivateKey, options)
    console.log('token', token)
    return token
}



export { generateToken };