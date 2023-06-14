const BaseController = require("./baseController");

class ParticipantsController extends BaseController {
  constructor(model, { eventsGroupsParticipants, neighbourhood }) {
    super(model);
    this.eventsGroupsParticipants = eventsGroupsParticipants;
    this.neighbourhood = neighbourhood;
  }

  getAllParticipants = async (req, res) => {
    try {
      const output = await this.model.findAll({ include: this.neighbourhood });
      return res.json({ success: true, data: output });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  insertBulk = async (req, res) => {
    const { participantJSON, eventId } = req.body;

    try {
      participantJSON.map(async (participant) => {
        const {
          name,
          postalCode,
          year,
          mobile,
          isMale,
          nationality,
          race,
          maritalStatus,
        } = participant;

        const existingParticipant = await this.model.findOne({
          where: { mobile: mobile },
        });
        console.log("Does this part exist?: ", existingParticipant);

        if (!existingParticipant) {
          try {
            const newParticipant = await this.model.create({
              name,
              postalCode,
              year,
              mobile,
              nationality,
              race,
              maritalStatus,
              isMale,
              isFirstTime: true,
            });

            await this.eventsGroupsParticipants.create({
              eventId,
              participantId: newParticipant.id,
            });

            return "Success";
          } catch (err) {
            return "Fail";
          }
        } else {
          const participantAlreadyUploaded =
            await this.eventsGroupsParticipants.findOne({
              where: {
                eventId: eventId,
                participantId: existingParticipant.dataValues.id,
              },
            });
          if (!participantAlreadyUploaded) {
            await existingParticipant.update({ isFirstTime: false });

            await this.eventsGroupsParticipants.create({
              eventId,
              participantId: existingParticipant.id,
            });

            return "Success";
          } else {
            return "Already Added";
          }
        }
      });

      return res.json({
        success: true,
        msg: "Successfully added all participants",
      });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "No participant JSON found" });
    }
  };

  // maybe we can "lazy load" by only loading first few (or use pagination)
  // and then use search queries to pull data on filter.
}

module.exports = ParticipantsController;

/*
insertBulk = async (req, res) => {
    // Get IDs of elements
    // Nationality
    const sgp = await this.nationality.findOne({
      where: { name: "Singapore Citizen" },
    });
    const sgpPR = await this.nationality.findOne({
      where: { name: "Singapore PR" },
    });
    const othersNationality = await this.nationality.findOne({
      where: { name: "Others" },
    });
    const getNationalityId = (nationality) => {
      if (nationality === "Singapore Citizen") {
        return sgp.id;
      } else if (nationality === "Singapore PR") {
        return sgpPR.id;
      } else {
        return othersNationality.id;
      }
    };
    // Race
    const chinese = await this.race.findOne({
      where: { name: "Chinese" },
    });
    const malay = await this.race.findOne({
      where: { name: "Malay" },
    });
    const eurasian = await this.race.findOne({
      where: { name: "Eurasian" },
    });
    const indian = await this.race.findOne({
      where: { name: "Indian" },
    });
    const othersRace = await this.race.findOne({
      where: { name: "Others" },
    });
    const getRaceId = (race) => {
      if (race === "Chinese") {
        return chinese.id;
      } else if (race === "Malay") {
        return malay.id;
      } else if (race === "Eurasian") {
        return eurasian.id;
      } else if (race === "Indian") {
        return indian.id;
      } else {
        return othersRace.id;
      }
    };
    // Marital Status
    const single = await this.maritalStatus.findOne({
      where: { name: "Single" },
    });
    const married = await this.maritalStatus.findOne({
      where: { name: "Married" },
    });
    const marriedKids = await this.maritalStatus.findOne({
      where: { name: "Married with Kids" },
    });
    const othersMarital = await this.maritalStatus.findOne({
      where: { name: "Others" },
    });
    const getMaritalId = (status) => {
      if (status === "Single") {
        return single.id;
      } else if (status === "Married") {
        return married.id;
      } else if (status === "Married with Kids") {
        return marriedKids.id;
      } else {
        return othersMarital.id;
      }
    };

    // ————————————————————————————————————————————— //

    const participantJSON = req.body;

    try {
      participantJSON.map(async (participant) => {
        const {
          name,
          postalCode,
          year,
          mobile,
          isMale,
          nationality,
          race,
          maritalStatus,
        } = participant;

        const existingParticipant = await this.model.findOne({
          where: { mobile: mobile },
        });

        if (!existingParticipant) {
          try {
            const nationalityId = getNationalityId(nationality);
            const raceId = getRaceId(race);
            const maritalStatusId = getMaritalId(maritalStatus);
            await this.model.create({
              name,
              postalCode,
              year,
              mobile,
              nationalityId,
              raceId,
              maritalStatusId,
              isMale,
              isFirstTime: true,
            });
            return "Success";
          } catch (err) {
            return "Fail";
          }
        } else {
          await existingParticipant.update({ isFirstTime: false });
          return "Success";
        }
      });
      return res.json({
        success: true,
        msg: "Successfully added all participants",
      });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "No participant JSON found" });
    }
  };
  */
