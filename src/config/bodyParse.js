const bodyParser = require("body-parser");

const bodyParseConfig  = (server) => {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: false}))
}

module.exports = bodyParseConfig;