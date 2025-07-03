// un tableau de dix mots de votre choix que vous assignerez à la variable words.
var express = require('express');
var router = express.Router()
const Game = require("../models/games")

let words = [
'pyrope', 'vecteur', 'roses', 'projet', 'nsutite', 'soupe', 'brocoli', 'biere', 'ragot', 'chat', 'design', 'libellule', "Subtil", "Nuance", "Clair", "Savoir", "Poser", "Tact", "Sujet", "Juste", "Tenir", "Angle"
]

router.get('/new', (req, res)=>{
    let index = Math.floor(Math.random()*(words.length-1))
    let word = words[index];

    const newGame = new Game({
        win: true,
        lettres: word.length,
        mot: word.toUpperCase(),
        date: new Date(),
        image: `image${index}`
    })

    newGame.save().then(()=>res.json({
        result: true,
        gameId: newGame._id,
        wordLength: newGame.lettres,
        word: newGame.mot,
        image: newGame.image
    }))
})

module.exports = router