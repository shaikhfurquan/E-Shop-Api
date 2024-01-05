import {expressjwt} from "express-jwt";

function authJwt() {
    const secret = process.env.SEC_KEY;
    console.log(secret);
    return expressjwt({ secret, algorithms: ['HS256'] });
}

export default authJwt
