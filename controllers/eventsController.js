const BaseController = require("./baseController");

class EventsController extends BaseController {
  constructor(model) {
    super(model);
  }

  getEventParticipants = async (req, res) => {
    const { eventId } = req.params;
    // get all participants from events-participants-groups model where event_id = eventId
    return res.json("response for ", eventId);
  };

  addEvent = async (req, res) => {
    const { eventDetails } = req.body;
    // push these details to events table
    return res.json({ content: eventDetails });
  };
}

module.exports = EventsController;
