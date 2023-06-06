const BaseController = require("./baseController");

class EventsController extends BaseController {
  constructor(model, { participant, eventsGroupsParticipants }) {
    super(model);
    this.participant = participant;
    this.eventsGroupsParticipants = eventsGroupsParticipants;
  }

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
      order: [["statusId", "DESC"]],
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
  };
}

module.exports = EventsController;
