const express = require("express");
const router = express.Router();

class EventsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    router.get("/:eventId/", this.controller.getOne.bind(this.controller));
    router.get(
      "/:eventId/participants",
      this.controller.getEventParticipants.bind(this.controller)
    );
    router.put(
      "/:eventId/participants",
      this.controller.editEventParticipant.bind(this.controller)
    );
    return router;
  }
}

module.exports = EventsRouter;
