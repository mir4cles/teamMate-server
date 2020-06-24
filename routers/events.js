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
    include: ["attending"],
    // order: [[User, "createdAt", "ASC"]],
  });
  res.status(200).send({ message: "ok", events });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Event id is not a number" });
  }

  const event = await Event.findByPk(id, {
    include: ["attending"],
  });

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

router.post("/:id/rsvp", auth, async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  const eventId = req.params.id;

  if (event === null) {
    return res.status(404).send({ message: "This event does not exist" });
  }

  const { id } = req.body;

  if (!id) {
    return res
      .status(400)
      .send({ message: "An rsvp must have a valid userId" });
  }

  const user = await User.findByPk(id);
  const rsvp = await Rsvp.findOrCreate({
    where: {
      userId: id,
      eventId: eventId,
    },
    defaults: {
      attending: "yes",
    },
  });
  console.log("rsvp", rsvp[1]);
  if (!rsvp[1]) {
    return res
      .status(400)
      .send({ message: "User is already attending this event" });
  } else {
    return res
      .status(201)
      .send({ message: "Rsvp successful", rsvp, user, event });
  }
});

router.delete("/:id/rsvp", auth, async (req, res, next) => {
  try {
    const eventId = parseInt(req.params.id);
    const userId = parseInt(req.user.id);
    const event = await Event.findByPk(eventId);
    console.log("data in request body", req.body);
    console.log("id in request body", userId);

    if (event === null) {
      return res.status(404).send({ message: "Event not found" });
    }

    if (!userId) {
      return res.status(405).send({ message: "User not found" });
    }

    const deleted = await Rsvp.destroy({
      where: {
        userId: userId,
        eventId: eventId,
      },
    });
    console.log("rsvp to delete", deleted);
    return res.status(204).send({ message: "Rsvp cancelled", event });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
