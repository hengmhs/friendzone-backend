const express = require("express");
const router = express.Router();

class FacilitatorsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.put("/", this.controller.insertOne.bind(this.controller));
    return router;
  }
}

module.exports = FacilitatorsRouter;
