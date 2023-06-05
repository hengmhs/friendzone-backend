const BaseController = require("./baseController");

class FacilitatorsController extends BaseController {
  constructor(model) {
    super(model);
  }

  insertOne = async (req, res) => {
    const { name } = req.body;
    try {
      const insertedFacil = await this.model.create({
        name,
      });
      return res.json({ success: true, content: insertedFacil });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = FacilitatorsController;
