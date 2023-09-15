const allowedOrigins = [
    'https://www.google.com',
    'http://localhost:5001/'
]

const corsOptions = {
    origin: (origin,callback) => {
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        } else{
            callback(new Error('Not Allowed by CORS'))
        }   
    },
    optionsSuccessStatus: 200
}

export default corsOptions