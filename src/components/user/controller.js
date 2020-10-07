const { request } = require("express")


const getUser = () => {
    return new Promise( (resolve, reject) => {
        resolve({_id: "asd232", name: "dany"});
    })
}

module.exports = {
    getUser
}