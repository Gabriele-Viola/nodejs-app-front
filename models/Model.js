const database = require('../db/connecion')

class Model {

    static table = ""

    static async all(){
        const [rows] = await database.query(`SELECT * FROM ${table}`)
        return rows
    }

    static async find(slug){
        const [rows] = await database.query(`SELECT * FROM ${table} WHERE slug=?`, [slug])
        return rows[0]
    }

    static async create(data) {
        const {name, slug, genre_id} = data
        const [result] = await database.query(
            `INSERT INTO ${table} (name, slug, genre_id) VALUES (?,?,?)`, [name, slug, genre_id]
        )
        return result.insertId
    }

    static async update(id, data){
        const {name, slug, genre_id} = data
        await database.query(
            `UPDATE ${table} SET name = ?, slug = ?, genre_id = ? WHERE id=?` , [name, slug, genre_id, id]
        )

    }
    static async delete(slug){
        await database.query(`DELETE FROM ${table} WHERE slug = ?`, [slug])
    }
}


module.exports = Model

