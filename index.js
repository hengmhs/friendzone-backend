//------------------ Imports ------------------//

const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const cors = require("cors");
require("dotenv").config();

//----------------- Routers -----------------//

const EventsRouter = require("./routers/eventsRouter");
const ParticipantsRouter = require("./routers/participantsRouter");

//---------------- Controllers ----------------//

const EventsController = require("./controllers/eventsController");
const ParticipantsController = require("./controllers/participantsController");

//--------------------- DB ---------------------//

const db = require("./db/models/index");
const { event, participant } = db;

//--------------------- Auth ---------------------//

const checkJwt = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
});

//---------------- Initialisation ----------------//

const eventsController = new EventsController(event);
const eventsRouter = new EventsRouter(eventsController, checkJwt).routes();
const participantsController = new ParticipantsController(participant);
const participantsRouter = new ParticipantsRouter(
  participantsController,
  checkJwt
).routes();

//-----------------------------------------------//

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventsRouter);
app.use("/participants", participantsRouter);

app.listen(PORT, () => {
  console.log(`Friendzone backend listening on port ${PORT}!`);
});
