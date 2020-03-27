const express = require('express')
const cors = require('cors')
const app = express()
const DB = require('./modules/mongo/mongo')
const mongo = require('mongoose')
const path = require('path')
const port = 4000

const db = new DB(mongo);

app.use(express.json())
app.use(express.static(path.join(__dirname, 'assets')))
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/people', async (req, res) => {
  res.send({
    people: await db.getPeople()
  })
})

app.put('/person', (req, res) => {
  db.addPerson(req.body);
  res.sendStatus(200);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));