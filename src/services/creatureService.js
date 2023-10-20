const Creature = require("../models/Creature.js")

exports.create = (creatureData) => Creature.create(creatureData);
exports.getAll = () => Creature.find();
exports.getSingleCreature = (creatureId) => Creature.findById(creatureId).populate("votes");
exports.update = (creatureId, creatureData) => Creature.findByIdAndUpdate(creatureId, creatureData);
exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);
exports.getMyCreatures = (ownderId) => Creature.find({ owner: ownderId }).populate("owner");
exports.addVotesToCreature = async (creatureId, userId) => {
    const creature = await this.getSingleCreature(creatureId);
    creature.votes.push(userId);
    const hasVoted = creature.votes?.map((v) => v?.toString() === userId);

    return creature.save();
};