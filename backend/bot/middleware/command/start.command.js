const {bot} = require("../../connections/token.connection")
const { myCommand, dateTypes, dates, datesOptions, greeting } =require('../../../ButtonsName.js');

module.exports = bot.start(async (ctx)=> {
    // const {id,username} = ctx.chat
    try {
        const id = String(ctx.chat.id);
        const username = ctx.chat.username ?? "anon";
        await ctx.replyWithSticker(greeting)
        await ctx.sendMessage(`Привет ${username}! В этом чате можно настроить уведомления о важных событиях, например, дни рождения`)
        return ctx.sendMessage('Нажми на кнопку Настроить даты, там ты сможешь добавить событие')
    
        //сохраняем юзера в дб

        //отвечаем что получилось сохранить
        await ctx.reply(`${id},'123',${username}`)
    } catch (error) {
        console.log(error)
    }

    // console.log(login)
    // console.log(username)
    })