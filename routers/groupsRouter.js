const express = require("express");
const router = express.Router();

class GroupsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/:eventId/", this.controller.getAllEvent.bind(this.controller));
    router.get("/", this.controller.getAll.bind(this.controller));
    return router;
  }
}

module.exports = GroupsRouter;
