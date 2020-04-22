const express = require('express');
const app = express();
const db = require("./queries")

app.engine('html', require('ejs').renderFile)

app.use(express.static('./views'))

app.get('/', async (req, res) => {
    const order = await db.getOrders()
    const clients = await db.getData()
    res.render('index.ejs', { cli: clients })
    console.log(clients);
})
db.addMenuPosition()


app.listen(8080);