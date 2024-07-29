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

app.get('/runFunc', (req, res) => {
  let { runStatus } = req.body
  if(runStatus) {
  cron.schedule('*/10 * * * * *', async() => {
    console.log('start func')
    await sheduleFunc(req, res)
  });
  res.json({"result": "ok"})
}else {
  res.json({"runStatus": "stoppped"})
}
})
app.use('/api', routes)


module.exports = app