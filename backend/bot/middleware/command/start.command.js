const {bot} = require("../../connections/token.connection")

module.exports = bot.start(async (ctx)=> {
    // const {id,username} = ctx.chat
    try {
        const id = String(ctx.chat.id);
        const username = ctx.chat.username ?? "anon";

        //сохраняем юзера в дб

        //отвечаем что получилось сохранить
        await ctx.reply(`${id},'123',${username}`)
    } catch (error) {
        console.log(error)
    }

    // console.log(login)
    // console.log(username)
    })