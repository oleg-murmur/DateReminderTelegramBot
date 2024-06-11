const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./src/index')
require("dotenv").config();
const {sheduleFunc} = require('./sheduleFunc')
const {bot} = require("./bot/connections/token.connection")
const  { CronJob } = require('cron');
const {db} = require('./models/db.connection')
const app = express()
const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json()); 
var cron = require('node-cron');
const dates = [
  {num: 1, schedule: '*/10 * * * * *', date: "05-05-2024",chatId: 2027875527},
  {num: 2, schedule: '*/2 * * * * *'},
  {num: 3, schedule: '*/5 * * * * *'},
]

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

  db.authenticate()
  db.sync().then(()=> {
    app.listen(port, ()=> {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    })
  })

app.get('/', (req, res) => {
  cron.schedule('0 8 * * *', () => {
    sheduleFunc(req, res)
  });
  res.json({"result": "ok"})
})

app.use('/api', routes)

module.exports = app