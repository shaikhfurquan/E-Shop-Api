import expressJwt from 'express-jwt';

const authJwt = () => {
    const secret = process.env.SEC_KEY;

    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked :  isRevoked,
    }).unless({
        path :[
            {url : /products(.*)/ , method : ['GET' , 'OPTIONS']},
            {url : /categories(.*)/ , method : ['GET' , 'OPTIONS']},
            '/users/login',
            '/users/create',

        ]
    })
};

async function isRevoked(req, payload, done) {
    if(!payload.isAdmin){
        done(null, true) 
    }
    done()
}

export default authJwt;
