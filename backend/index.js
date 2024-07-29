const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./src/index')
require("dotenv").config();
const {sheduleFunc} = require('./sheduleFunc')
const {db} = require('./models/db.connection')
const app = express()
const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json()); 
var cron = require('node-cron');

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

  let cronTask = null;

  app.get('/runFunc', (req, res) => {
      let { runStatus } = req.query;
  
      if (runStatus === 'true') {
          if (cronTask === null) {
              cronTask = cron.schedule('*/10 * * * * *', async () => {
                  console.log('start func');
                  await sheduleFunc(req, res);
              });
              res.json({ "result": "started" });
          } else {
              res.json({ "result": "already running" });
          }
      } else if (runStatus === 'false') {
          if (cronTask !== null) {
              cronTask.stop();
              cronTask = null;
              res.json({ "result": "stopped" });
          } else {
              res.json({ "result": "not running" });
          }
      } else {
          res.status(400).json({ "error": "Invalid runStatus value" });
      }
  });
app.use('/api', routes)


module.exports = app