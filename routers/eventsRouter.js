const express = require("express");
const router = express.Router();

class EventsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.addEvent.bind(this.controller));
    router.get(
      "/:eventId",
      this.controller.getEventParticipants.bind(this.controller)
    );
    return router;
  }
}

module.exports = EventsRouter;
