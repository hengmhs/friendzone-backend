const express = require("express");
const router = express.Router();

class EventsRouter {
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

      this.controller.insertOne.bind(this.controller)
    );
    router.get(
      "/:eventId/",

      this.controller.getOne.bind(this.controller)
    );
    router.get(
      "/:eventId/participants",

      this.controller.getEventParticipants.bind(this.controller)
    );
    router.put(
      "/:eventId/participants",

      this.controller.editEventParticipant.bind(this.controller)
    );
    router.put(
      "/:eventId/bulk/participants",

      this.controller.bulkEditEventParticipant.bind(this.controller)
    );
    return router;
  }
}

module.exports = EventsRouter;
