const express = require("express");
const router = express.Router();

class GroupsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    router.get(
      "/:eventId/",
      this.checkJwt,
      this.controller.getAllEvent.bind(this.controller)
    );
    router.get(
      "/",
      this.checkJwt,
      this.controller.getAll.bind(this.controller)
    );
    router.post(
      "/:eventId",
      this.checkJwt,
      this.controller.insertBulk.bind(this.controller)
    );
    router.put(
      "/:eventId",
      this.checkJwt,
      this.controller.editBulk.bind(this.controller)
    );
    router.delete(
      "/:eventId/:groupId",
      this.checkJwt,
      this.controller.deleteGroup.bind(this.controller)
    );
    return router;
  }
}

module.exports = GroupsRouter;
