const express = require("express");
const router = express.Router();

class FacilitatorsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    router.get(
      "/",
      this.checkJwt,
      this.controller.getAll.bind(this.controller)
    );
    router.post(
      "/",
      this.checkJwt,
      this.controller.insertOne.bind(this.controller)
    );
    return router;
  }
}

module.exports = FacilitatorsRouter;
