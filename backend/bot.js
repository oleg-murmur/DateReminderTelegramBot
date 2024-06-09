const TelegramApi =  require('node-telegram-bot-api');
// const axios = require('axios');
const { myCommand, dateTypes, dates, datesOptions, greeting } =require('./ButtonsName.js');
const  { CronJob } = require('cron');
const token = "7057135857:AAGL3QFh0JsDwmwz2CyFbJ24no-W_1_eBbA"
const {bot} = require("./bot/connections/token.connection.js")


const start = () => {
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        console.log(msg)
        await bot.setMyCommands(myCommand)
        const job = new CronJob(
            '* * * * * *', // cronTime
            function () {
                bot.sendMessage(chatId, 'You will see this message every second');
                console.log("work")
            }, // onTick
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );

    
        // job.stop()
        if(text === '/start') {
            await bot.telegram.sendMessage(chatId, greeting)
            return bot.telegram.sendMessage(chatId, 'Привет! В этом чате можно настроить уведомления о важных событиях, например, дни рождения')
        }
        if(text === '/info') {
            return bot.telegram.sendMessage(chatId, `Выбери, что нужно сделать`,datesOptions)
        }
        return bot.telegram.sendMessage(chatId, `я тебя не понимаю`)
    })


    // bot.on('callback_query', async msg => {
    //     const data = msg.data
    //     const chatId = msg.message.chat.id
        
    //     console.log(msg)
    //     if(data === 'addDate') {
    //         return bot.sendMessage(chatId, `Выбери тип события`,dateTypes)
    //     }
    //     if(data === 'ДР') {
    //         return bot.sendMessage(chatId, 'Кто-то видимо плохо помнит дни рождения, напиши сюда Имя именинника или коротко информацию о нем, чтобы не забыть, с чем связана дата')
    //     }
        // if(data === 'DelDate') {
        //     await bot.sendMessage(chatId, data)
        // }
    // })
}


const addDateFunc = async() => {
    bot.on('callback_query', async msg => {
        const text = msg.text
        const chatId = msg.message.chat.id
        await bot.sendMessage(chatId, `Выбери тип события`,dateTypes)
    })
}
const deleteDateFunc = async () => {}
const changedDateFunc = async () => {}
const getAllDatesFunc = async () => {}

module.exports = {start}