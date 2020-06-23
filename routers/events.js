const { Router } = require("express");
const auth = require("../auth/middleware");
const Event = require("../models").event;
const Team = require("../models").team;
const TeamMate = require("../models").teamMate;
const Rsvp = require("../models").rsvp;
const Comment = require("../models").comment;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const events = await Event.findAndCountAll({
    limit,
    offset,
    include: ["attandees"],
    // order: [[User, "createdAt", "ASC"]],
  });
  res.status(200).send({ message: "ok", events });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Event id is not a number" });
  }

  const event = await Event.findByPk(id, {});

  if (event === null) {
    return res.status(404).send({ message: "Event not found" });
  }

  res.status(200).send({ message: "ok", event });
});

router.post("/", auth, async (req, res) => {
  const {
    title,
    startDate,
    endDate,
    location,
    sportType,
    description,
    outdoor,
    maxPlayers,
    id,
  } = req.body;

  if (req.body.length === 0) {
    return res.status(400).send({ message: "No input" });
  }

  const event = await Event.create({
    title,
    startDateTime: startDate,
    endDateTime: endDate,
    location,
    sportType,
    description,
    outdoor,
    maxPlayers,
    userId: id,
  });

  return res.status(201).send({ message: "Event created", event });
});

module.exports = router;
