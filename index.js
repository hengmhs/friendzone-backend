//------------------ Imports ------------------//

const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const cors = require("cors");
require("dotenv").config();

//----------------- Routers -----------------//

const EventsRouter = require("./routers/eventsRouter");
const ParticipantsRouter = require("./routers/participantsRouter");
const FacilitatorsRouter = require("./routers/facilitatorsRouter");
const GroupsRouter = require("./routers/groupsRouter");

//---------------- Controllers ----------------//

const EventsController = require("./controllers/eventsController");
const ParticipantsController = require("./controllers/participantsController");
const FacilitatorsController = require("./controllers/facilitatorsController");
const GroupsController = require("./controllers/groupsController");

//--------------------- DB ---------------------//

const db = require("./db/models/index");
const { event, participant, facilitator, group } = db;

//--------------------- Auth ---------------------//

const checkJwt = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

//---------------- Initialisation ----------------//

const eventsController = new EventsController(event, db);
const eventsRouter = new EventsRouter(eventsController, checkJwt).routes();
const participantsController = new ParticipantsController(participant, db);
const participantsRouter = new ParticipantsRouter(
  participantsController,
  checkJwt
).routes();
const facilitatorsController = new FacilitatorsController(facilitator);
const facilitatorsRouter = new FacilitatorsRouter(
  facilitatorsController,
  checkJwt
).routes();
const groupsController = new GroupsController(group, db);
const groupsRouter = new GroupsRouter(groupsController, checkJwt).routes();

//-----------------------------------------------//

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventsRouter);
app.use("/participants", participantsRouter);
app.use("/facilitators", facilitatorsRouter);
app.use("/groups", groupsRouter);

app.listen(PORT, () => {
  console.log(`Friendzone backend listening on port ${PORT}!`);
});
