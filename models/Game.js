const database = require('../db/connecion')

class Game {
    static async all(){
        const [rows] = await database.query('SELECT * FROM games')
        return rows
    }

    static async find(slug){
        const [rows] = await database.query('SELECT * FROM games WHERE slug=?', [slug])
        return rows[0]
    }

    static async create(data) {
        const {name, slug, genre} = data
        const [result] = await database.query(
            'INSERT INTO games (name, slug, genre) VALUES (?,?,?)', [name, slug, genre]
        )
        return result.insertId
    }

    static async update(slug, data){
        const {name, slug, genre} = data
        await database.query(
            'UPDATE games SET name = ?, slug = ?, genre = ?', [name, slug, genre]
        )

    }
    static async delete(slug){
        await database.query('DELETE FROM games WHERE slug = ?', [slug])
    }
}


module.exports = Game

