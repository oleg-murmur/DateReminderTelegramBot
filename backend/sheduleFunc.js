var cron = require('node-cron');
const {bot} = require("./bot/connections/token.connection")
const  { CronJob } = require('cron');
const dates = [
  {num: 1, schedule: '*/10 * * * * *', date: "05-05-2024",chatId: 2027875527},
  {num: 2, schedule: '*/2 * * * * *'},
  {num: 3, schedule: '*/5 * * * * *'},
] 
const sheduleFunc = (res) => {
  try {
    // const job = new CronJob(
    //   '* * * * * *', // cronTime
      function test() {
        dates.forEach((num)=> {
            if(num.date === "05-05-2024")
            bot.telegram.sendMessage(num.chatId, 'Привет! В этом чате можно настроить уведомления о важных событиях, например, дни рождения')
        })
      }
      test()
    // );
        console.log("message")

        } catch (error) {
            console.log(error)
        }
    return res.json("all good");
}


module.exports = {sheduleFunc}
