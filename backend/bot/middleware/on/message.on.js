const {bot} = require("../../connections/token.connection")
const  { CronJob } = require('cron');

module.exports = bot.on("message", async (ctx)=> {
    // const {id,username} = ctx.chat
    try {
const job = new CronJob(
	'* * * * * *', // cronTime
	function () {
		// ctx.telegram.sendMessage("denyitwice", 'You will see this message every second');
        // ctx.telegram.sendMessage(2027875527, 'You will see this message every second');
        bot.telegram.sendMessage(2027875527, 'Привет! В этом чате можно настроить уведомления о важных событиях, например, дни рождения')
        // await bot.telegram.sendMessage(id, `Привет ${username}! В этом чате можно настроить уведомления о важных событиях, например, дни рождения`)
        // return bot.telegram.sendMessage(id, 'Нажми на кнопку Настроить даты, там ты сможешь добавить событие')
    
        // console.log("work")
	}, // onTick
	null, // onComplete
	true, // start
	'America/Los_Angeles' // timeZone
);
// const job = new CronJob({
//     cronTime: "* * * * * *",
//     onTick: ()=> console.log("work"),
//     onComplete: ()=> console.log("end"),
//     startNow: true,
// });
        console.log("message")
        // job.stop()
    } catch (error) {
        console.log(error)
    }
    })