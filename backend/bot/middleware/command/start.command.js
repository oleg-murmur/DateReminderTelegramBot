const {bot} = require("../../connections/token.connection")
const { greeting } =require('../../../ButtonsName.js');
const { Telegraf} = require("telegraf");
const Markup = require('telegraf/markup')
require("dotenv").config();
module.exports = bot.start(async (ctx)=> {
    try {
        console.log( process.env.URL_SERVER,' process.env.URL_SERVER process.env.URL_SERVER process.env.URL_SERVER')
        const id = String(ctx.chat.id); // сохранять в бд
        const username = ctx.chat.username ?? "anon";
        await ctx.replyWithSticker(greeting)
        await ctx.sendMessage(`Привет ${username}! В этом чате можно настроить уведомления о важных событиях, например, дни рождения`)
        await ctx.reply('Нажми на кнопку ниже, там ты сможешь добавить событие. Уведомелние в чат придет в выбранную дату',
            Markup.inlineKeyboard([
                Markup.button.webApp('Открыть настройку событий', process.env.URL_SERVER)
    ])
    )
        //сохраняем юзера в дб
        //отвечаем что получилось сохранить
        // await ctx.reply(`${id},'123',${username}`)
    } catch (error) {
        console.log(error)
    }
    })