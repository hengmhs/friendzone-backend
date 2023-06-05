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

  insertOne = async (req, res) => {
    const { name, startTime, endTime, date, venue, eventTypeId, password } =
      req.body;
    try {
      const insertedEvent = await this.model.create({
        name,
        startTime,
        endTime,
        date,
        venue,
        eventTypeId,
        password,
      });
      return res.json({ success: true, content: insertedEvent });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = EventsController;
