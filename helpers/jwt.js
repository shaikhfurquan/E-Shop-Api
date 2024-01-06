import expressJwt from 'express-jwt';

const authJwt = () => {
    const secret = process.env.SEC_KEY;

    return expressJwt({
        secret,
        algorithms: ['HS256'],

    }).unless({
        path :[
            {url : /products(.*)/ , method : ['GET' , 'OPTIONS']},
            {url : /categories(.*)/ , method : ['GET' , 'OPTIONS']},
            {url : '/users/login' , method : ['POST' , 'OPTIONS']}
        ]
    })
};



export default authJwt;
