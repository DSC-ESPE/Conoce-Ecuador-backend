const userEntpoints = require("../components/user/entpoints");

const routes = server =>  {
    server.use("/user", userEntpoints);
}

module.exports = routes;