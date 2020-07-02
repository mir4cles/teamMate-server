const { Router } = require("express");
// const auth = require("../auth/middleware");
const Team = require("../models").team;
// const TeamMate = require("../models").teamMate;
// const Rsvp = require("../models").rsvp;
// const Comment = require("../models").comment;
// const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const teams = await Team.findAndCountAll({
    limit,
    offset,
  });
  res.status(200).send({ message: "ok", teams });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Team id is not a number" });
  }

  const team = await Team.findByPk(id, {});

  if (team === null) {
    return res.status(404).send({ message: "Team not found" });
  }

  res.status(200).send({ message: "ok", team });
});

module.exports = router;
