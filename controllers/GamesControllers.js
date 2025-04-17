// const games = require('../db/Games')

const connection = require("../db/connecion")
const Game = require("../models/game")
const { connect } = require("../Routes/web")

const index = async (req, res) => {

    const games = await Game.all()

    res.render('index', {games} )

}

const show = async (req, res) => {

    const slug = req.params.slug

    const game = await Game.find(slug)

    return res.render('show',{game})
        
  
}


module.exports = {
    index,
    show
}