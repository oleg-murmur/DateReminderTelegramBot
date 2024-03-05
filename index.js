const TelegramApi = require('node-telegram-bot-api')


const token = '7057135857:AAHjooymhIexyjHG9cPpNY0p_GlNNjEx-HQ'

const bot = new TelegramApi(token, {polling: true})

const myCommand = [
    {command: '/start', description: 'Начальное приветствие1'},
    {command: '/info', description: 'Начальное приветствие2'}
]

const dates = {
    type: '', // день рождение
    date: '', // 14 июня
    text: '', // Ваня др
    repeat: '', // none - не повторять, one, every year
}

const datesOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Создать дату', callback_data: 'addDate'}],
            [{text: 'Удалить дату', callback_data: 'DelDate'}],
            [{text: 'Изменить дату', callback_data: 'Изменить дату'}],
            [{text: 'Просмотреть все даты', callback_data: 'Просмотреть все даты'}],
        ]
    })
}
const dateTypes = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'День рождения', callback_data: 'Birthday'}],
            [{text: 'Корпоратив', callback_data: 'корпоратив'}],
            [{text: 'Локальный праздник', callback_data: 'свой праздник'}]
        ]
    })
}


const start = () => {
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        console.log(msg)
    
    
        if(text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/9.webp')
            return bot.sendMessage(chatId, 'Привет! В этом чате можно настроить уведомления о важных событиях, например, дни рождения')
        }
        if(text === '/info') {
            await bot.setMyCommands(myCommand)
            return bot.sendMessage(chatId, `Выбери, что нужно сделать`,datesOptions)
        }
        return bot.sendMessage(chatId, `я тебя не понимаю`)

    })


    bot.on('callback_query', async msg => {
        const data = msg.data
        const chatId = msg.message.chat.id
        

        console.log(msg)
        if(data === 'addDate') {
            // await bot.sendMessage(chatId, data)
            await bot.sendMessage(chatId, `Выбери тип события`,dateTypes)
        }
        // if(data === 'DelDate') {
        //     await bot.sendMessage(chatId, data)
        // }
        if(data === 'Birthday') {
            await bot.sendMessage(chatId, data)
        }
    })
}
start()


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