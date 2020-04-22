const express = require('express');
const app = express();
const db = require("./queries")

app.engine('html', require('ejs').renderFile)

app.use(express.static('./views'))

app.get('/', async (_, res) => {
    const menu_position = await db.getMenuPositions()
    res.render('index.ejs', {pos: menu_position})
    console.log(menu_position);
})
db.addMenuPosition()


app.listen(8080);