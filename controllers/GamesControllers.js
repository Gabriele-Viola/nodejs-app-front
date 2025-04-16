const games = require('../db/Games')

const index = (req, res) => {
    res.render('index', {games} )
}

const show = (req, res) => {
    const slug = req.params.slug
    const game = games.find(game => game.slug === slug) || false
    let message 

    console.log();
    
    if(!game){
        message = `nessun risultato per ${slug}`
        return res.render('show', {message, game})
    }
    message = 'ecco qua'
    return res.render('show',{ message, game})
}


module.exports = {
    index,
    show
}