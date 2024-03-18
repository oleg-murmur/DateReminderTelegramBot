const myCommand = [
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Настройки событий'},
]
const greeting = 'https://tlgrm.eu/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/9.webp'

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
            [{text: 'Изменить дату', callback_data: 'ChangeDate'}],
            [{text: 'Просмотреть все даты', callback_data: 'ShowAllDates'}],
        ]
    })
}
const dateTypes = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'День рождения', callback_data: 'ДР'}],
            [{text: 'Корпоратив', callback_data: 'корпоратив'}],
            [{text: 'Локальный праздник', callback_data: 'свой праздник'}]
        ]
    })
}
module.exports = {
    myCommand,
    dateTypes,
    dates,
    datesOptions,
    greeting

}