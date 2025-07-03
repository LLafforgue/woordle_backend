// un tableau de dix mots de votre choix que vous assignerez à la variable words.
var express = require('express');
var router = express.Router()
const Game = require("../models/games")

let words = [
'pyrope', 'vecteur', 'roses', 'projet', 'nsutite', 'soupe', 'brocoli', 'biere', 'ragot', 'chat', 'design', 'libellule', "Subtil", "Nuance", "Clair", "Savoir", "Poser", "Tact", "Sujet", "Juste", "Tenir", "Angle"
]

router.get('/', (req, res)=>{
    let index = Math.floor(Math.random()*(words.length-1))
    let word = words[index];
    res.json({result: true,
             word
    })
})

module.exports = router