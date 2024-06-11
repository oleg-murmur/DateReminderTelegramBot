var cron = require('node-cron');
const {bot} = require("./bot/connections/token.connection")
const  { CronJob } = require('cron');
const reminderModel = require("./models/Reminde")
const dates = [
  {num: 1, schedule: '*/10 * * * * *', date: "05-05-2024",chatId: 2027875527},
  {num: 2, schedule: '*/2 * * * * *'},
  {num: 3, schedule: '*/5 * * * * *'},
] 
const formattedDate = require('./GetDateNow')

let date = formattedDate()

const sheduleFunc = async (req,res) => {
  const query = {}
  const {limit} = req.query
        if(limit) {
            query['limit']= limit
        }
        const result = await reminderModel.findAll({
            ...query
        })
        console.log(result, 'result')
  try {
      function sendMessageByChatId() {
        result.forEach((num)=> {
            if(num.remindeDate === date)
            bot.telegram.sendMessage(num.chatId, `Привет! Ты оставлял себе напоминание в этот день: ${num.remindeText}`)
        })
      }
      sendMessageByChatId()
      console.log("message")
        } catch (error) {
            console.log(error)
        }
}


module.exports = {sheduleFunc}
