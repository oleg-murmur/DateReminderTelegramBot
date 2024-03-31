
const express = require('express')
const bodyParser = require('body-parser')
const {sheduleFunc} = require('./sheduleFunc')
const {start} = require('./bot')
const  redis = require('redis');
const cors = require('cors')
const port = 3000
let REDIS_URL= 'redis://localhost:6379'
const REDIS_PORT=6379
let USER_NAME='username'
const app = express()
// redisClient = redis.createClient(REDIS_PORT);
// redisClient.connect()
// })();
app.use(cors())
app.use( bodyParser.json() ); 
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

const formatOutput = async (username, numOfRepos) => {
  return `${username} has ${numOfRepos} repos`;
  };
const getRepos = async (username, numOfRepos) => {
  try {
    const username = req.params[USER_NAME];

    const response = await fetch(`https://api.github.com/users/${username}`);

    const {public_repos} = await response.json();

    redisClient.set(username,public_repos);
    res.send(formatOutput(username,public_repos))
  } catch (error) {
    console.log(error);
    res.status(500)
  }
  }
const cache = (req,res,next) => {
  const username = req.params[USER_NAME];

  redisClient.get(username, (err,data)=> {
    if(data !== null) {
      console.log('this data is already cached');
      res.send(formatOutput(username,data));
    }else{
      next();
    }
  });
  }

// app.get(`/repos/:${USER_NAME}`, cache, getRepos);


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
start()
// sheduleFunc()
// redisConnect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})