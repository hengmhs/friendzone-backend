const express = require("express");
const router = express.Router();

class ParticipantsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    router.get(
      "/",
      this.checkJwt,
      this.controller.getAllParticipants.bind(this.controller)
    );
    router.post(
      "/",
      this.checkJwt,
      this.controller.insertBulk.bind(this.controller)
    );
    return router;
  }
}

module.exports = ParticipantsRouter;
