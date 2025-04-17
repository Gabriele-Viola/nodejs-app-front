const Model = require("./Model");

class Game extends Model {
    static table = "games"

    name = this.name
    slug = this.slug
    genre_id = this.genre_id
}

module.exports = Game