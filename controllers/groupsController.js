const BaseController = require("./baseController");

class GroupsController extends BaseController {
  constructor(model) {
    super(model);
  }

  getAllEvent = async (req, res) => {
    const { eventId } = req.params;
    console.log("getAllEvent is called");
    try {
      const eventGroups = await this.model.findAll({
        where: {
          eventId: eventId,
        },
      });
      return res.json(eventGroups);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  /*
  editEventParticipant = async (req, res) => {
    const { eventId } = req.params;
    const { participantId, statusId, isAttended } = req.body;
    try {
      const eventParticipant = await this.eventsGroupsParticipants.findOne({
        where: {
          eventId: eventId,
          participantId: participantId,
        },
      });
      await eventParticipant.update({
        statusId: statusId,
        isAttended: isAttended,
      });
      return res.json(eventParticipant);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  getEventParticipants = async (req, res) => {
    const { eventId } = req.params;
    // get all participants from events-participants-groups model where event_id = eventId
    const eventParticipants = await this.eventsGroupsParticipants.findAll({
      where: {
        eventId: eventId,
      },
      include: this.participant,
    });
    return res.json(eventParticipants);
  };

  getOne = async (req, res) => {
    const { eventId } = req.params;
    try {
      const event = await this.model.findOne({
        where: { id: eventId },
      });
      return res.json({ success: true, event });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  insertOne = async (req, res) => {
    const { name, startTime, endTime, date, venue, eventType, password } =
      req.body;
    try {
      const insertedEvent = await this.model.create({
        name,
        startTime,
        endTime,
        date,
        venue,
        eventType,
        password,
      });
      return res.json({ success: true, content: insertedEvent });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };*/
}

module.exports = GroupsController;
