const BaseController = require("./baseController");

class EventsController extends BaseController {
  constructor(model, { participant }) {
    super(model);
    this.participant = participant;
  }

  getEventParticipants = async (req, res) => {
    const { eventId } = req.params;
    // get all participants from events-participants-groups model where event_id = eventId
    return res.json("response for ", eventId);
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
