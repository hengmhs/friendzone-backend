const BaseController = require("./baseController");

class EventsController extends BaseController {
  constructor(
    model,
    { participant, group, eventsGroupsParticipants, neighbourhood }
  ) {
    super(model);
    this.participant = participant;
    this.eventsGroupsParticipants = eventsGroupsParticipants;
    this.group = group;
    this.neighbourhood = neighbourhood;
  }

  bulkEditEventParticipant = async (req, res) => {
    console.log("Reached!");
    const { participantArray } = req.body;
    try {
      const editedParticipants = await Promise.all(
        participantArray.map(async (person) => {
          const { egpId, groupId } = person;
          const selectedParticipant =
            await this.eventsGroupsParticipants.findOne({
              where: {
                id: egpId,
              },
            });
          await selectedParticipant.update({
            groupId: groupId,
          });
          return selectedParticipant;
        })
      );
      return res.json({ success: true, data: editedParticipants });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  editEventParticipant = async (req, res) => {
    const { eventId } = req.params;
    const { participantId, statusId, isAttended, groupId } = req.body;
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
        groupId: groupId,
      });
      return res.json({ success: true, data: eventParticipant });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  getEventParticipants = async (req, res) => {
    const { eventId } = req.params;
    // get all participants from events-participants-groups model where event_id = eventId
    try {
      const eventParticipants = await this.eventsGroupsParticipants.findAll({
        where: {
          eventId: eventId,
        },
        order: [["statusId", "DESC"]],
        include: this.participant,
      });

      const fullEventParticipants = await Promise.all(
        eventParticipants.map(async (participant) => {
          const neighbourhood = await this.neighbourhood.findOne({
            where: {
              id: participant.dataValues.participant.dataValues.postalCode,
            },
          });

          const data = {
            ...participant.dataValues,
            neighbourhood: neighbourhood
              ? neighbourhood.dataValues.location
              : "Not Found",
          };
          console.log(data);
          return data;
        })
      );

      console.log("full list", fullEventParticipants);
      return res.json({ success: true, data: fullEventParticipants });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
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
