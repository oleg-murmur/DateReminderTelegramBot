const {bot} = require("../../connections/token.connection")
const  { CronJob } = require('cron');

module.exports = bot.on("message", async (ctx)=> {
    // const {id,username} = ctx.chat
    try {
const job = new CronJob(
	'* * * * * *', // cronTime
	function () {
		ctx.telegram.sendMessage("denyitwice", 'You will see this message every second');
        console.log("work")
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

    // console.log(login)
    // console.log(username)
    })