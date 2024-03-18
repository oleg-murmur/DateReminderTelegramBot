
const express = require('express')
const bodyParser = require('body-parser')
const {sheduleFunc} = require('./sheduleFunc')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use( bodyParser.json() ); 
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

app.get('/data', (req, res, next) => {
    return res.json({"data": [{ id: 1, date: '2022-04-15', name: 'Встреча с друзьями123' },
    { id: 2, date: '2022-04-20', name: 'Презентация проекта123' },
    { id: 3, date: '2022-04-25', name: 'День рождения123' }]});
  });

app.post('/', (req, res) => {
    let data = req.body
    console.log(req.body)
  res.json({data})
})
sheduleFunc()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})