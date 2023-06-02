const BaseController = require("./baseController");

class ParticipantsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // maybe we can "lazy load" by only loading first few (or use pagination)
  // and then use search queries to pull data on filter.
}

module.exports = ParticipantsController;
