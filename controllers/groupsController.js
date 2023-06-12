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
      });
      eventGroups.sort((group1, group2) => {
        return Number(group1.name) - Number(group2.name);
      });
      return res.json({ success: true, data: eventGroups });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  insertBulk = async (req, res) => {
    const { eventId } = req.params;
    const { groupArray } = req.body;
    try {
      const insertedGroups = await Promise.all(
        groupArray.map(async (group) => {
          const { name, facilitatorId } = group;
          const createdGroup = await this.model.create({
            name,
            facilitatorId,
            eventId,
          });
          return createdGroup;
        })
      );
      return res.json({ success: true, data: insertedGroups });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  editBulk = async (req, res) => {
    const { eventId } = req.params;
    const { groupArray } = req.body;
    try {
      const updatedGroups = await Promise.all(
        groupArray.map(async (group) => {
          const { name, facilitatorId } = group;
          const selectedGroup = await this.model.findOne({
            where: {
              eventId: eventId,
              name: name,
            },
          });
          const updatedGroup = await selectedGroup.update({
            facilitatorId: facilitatorId,
          });
          return updatedGroup;
        })
      );
      return res.json({ success: true, data: updatedGroups });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  deleteGroup = async (req, res) => {
    const { eventId, groupId } = req.params;
    try {
      const count = await this.model.destroy({
        where: { eventId: eventId, id: groupId },
      });
      return res.json({
        success: true,
        data: `Deleted ${count} group with id ${groupId}`,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Couldn't delete group." });
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
