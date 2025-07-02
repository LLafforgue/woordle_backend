const mongoose = require("mongoose")

const gameSchema = mongoose.Schema({
    win: Boolean,
    lettres: Number,
    mot: String,
    date: Date,
    image: String
    
}) 

const Game = mongoose.model('games', gameSchema)

module.exports = Game