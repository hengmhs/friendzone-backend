const express = require("express");
const router = express.Router();

class GroupsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/:eventId/", this.controller.getAllEvent.bind(this.controller));
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/:eventId", this.controller.insertBulk.bind(this.controller));
    router.put("/:eventId", this.controller.editBulk.bind(this.controller));
    router.delete(
      "/:eventId/:groupId",
      this.controller.deleteGroup.bind(this.controller)
    );
    return router;
  }
}

module.exports = GroupsRouter;
