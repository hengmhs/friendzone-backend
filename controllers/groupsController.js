const BaseController = require("./baseController");

class GroupsController extends BaseController {
  constructor(model) {
    super(model);
  }

  getAllEvent = async (req, res) => {
    const { eventId } = req.params;
    try {
      const eventGroups = await this.model.findAll({
        where: {
          eventId: eventId,
        },
        order: [["name", "ASC"]],
      });
      return res.json(eventGroups);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  insertBulk = async (req, res) => {
    const { eventId } = req.params;
    const { groupArray } = req.body;
    try {
      groupArray.map(async (group) => {
        const { name, facilitatorId } = group;
        await this.model.create({
          name,
          facilitatorId,
          eventId,
        });
      });
      return res.json({ success: true });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  /*
  insertOne = async (req, res) => {
    const { eventId } = req.params;
    const { name, facilitatorId } = req.body;
    try {
      const insertedEvent = await this.model.create({
        name,
        facilitatorId,
        eventId,
      });
      return res.json({ success: true, content: insertedEvent });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };
  */
}

module.exports = GroupsController;
