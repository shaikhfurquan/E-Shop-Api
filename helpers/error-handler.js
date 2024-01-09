

export const errorHandler = (err, req, res, next) => {
    //jwt authentication error handler
    if(err.name === 'UnauthorizedError'){
        return res.status(401).json({
            success : false,
            error : err,
            message : "Ther user is not authorized" 
            
        })
    } 

    //validation error handler
    if(err.name === 'ValidationError'){ 
        return res.status(401).json({
            success : false,
            error : err,            
        })
    }

    //default to 500 server error
    return res.status(500).json({
        success : false,
        err : err.message
    })
}