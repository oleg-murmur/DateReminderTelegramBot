const {bot} = require("../../connections/token.connection")
const { greeting } =require('../../../ButtonsName.js');
const { Telegraf} = require("telegraf");
const Markup = require('telegraf/markup')

module.exports = bot.start(async (ctx)=> {
    try {
        const id = String(ctx.chat.id); // сохранять в бд
        const username = ctx.chat.username ?? "anon";
        await ctx.replyWithSticker(greeting)
        await ctx.sendMessage(`Привет ${username}! В этом чате можно настроить уведомления о важных событиях, например, дни рождения`)
        await ctx.reply('Нажми на кнопку Настроить даты, там ты сможешь добавить событие',
            Markup.inlineKeyboard([
                Markup.button.webApp('Открыть настройку событий', 'https://5d28-46-233-198-180.ngrok-free.app')
    ])
    )
        //сохраняем юзера в дб
        //отвечаем что получилось сохранить
        // await ctx.reply(`${id},'123',${username}`)
    } catch (error) {
        console.log(error)
    }
    })