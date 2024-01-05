import expressJwt from 'express-jwt';

const authJwt = () => {
    const secret = process.env.SEC_KEY;

    return expressJwt({
        secret,
        algorithms: ['HS256'],

    })
};



export default authJwt;
