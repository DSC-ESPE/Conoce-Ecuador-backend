const { request, response } = require("express")

const Response = {}

Response.success =  (request, response, body = null, status = 200, callback) => {
    //añadir cabeceras ....
    response.status(status).send({error: "", data: body});
    if(callback){
        callback(body)
    }
} 

Response.error = (request, response, error = null, status = 400, callback) => {
    //añadir cabeceras ....
    response.status(status).send({error: error, data: null});
    if(callback){
        callback(body)
    }
} 

Response.checkRequest = (request) => {
    
    return new Promise((res, rej) => {
        rej("error en el cross-origin");
    })
}


module.exports =  Response;
