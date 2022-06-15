const db = require("../db");

class DataController {
    async createData(req, res) {
       const {timeDate, title, amount, distance} = req.body;
       const newData = await db.query("INSERT INTO items (timeDate, title, amount, distance) values ($1, $2, $3, $4) RETURNING * ", [timeDate, title, amount, distance])
       res.json(newData.rows[0]);
    }
    async getData(req, res) {
        const allItems = await db.query("SELECT * FROM items");
        res.json(allItems.rows);
    }
}

module.exports = new DataController();