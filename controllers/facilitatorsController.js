const BaseController = require("./baseController");

class FacilitatorsController extends BaseController {
  constructor(model) {
    super(model);
  }

  insertOne = async (req, res) => {
    const { name } = req.body;

    // push these details to events table
    return res.json({ content: name });
  };
}

module.exports = FacilitatorsController;
