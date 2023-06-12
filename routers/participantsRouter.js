const express = require("express");
const router = express.Router();

class ParticipantsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAllParticipants.bind(this.controller));
    router.post("/", this.controller.insertBulk.bind(this.controller));
    return router;
  }
}

module.exports = ParticipantsRouter;
