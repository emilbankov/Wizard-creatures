const Creature = require("../models/Creature.js")

exports.create = (creatureData) => Creature.create(creatureData);