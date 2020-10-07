const { request, response } = require("express");
const express = require("express");
const Response = require("../../network/interceptor");

const { getUser } = require("./controller");

const router = express.Router();

router.get("/", (request, response) => {
  Response.checkRequest(request)
    .then(() => getUser())
    .then( (user) => Response.success(request, response, user, 208, null)  )
    .catch((error) => Response.error(request, response, error, 400, null));
});

module.exports = router;
