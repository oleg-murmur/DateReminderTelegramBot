const {Router} = require('express');
const routes = Router();
const ReminderRouter = require("./reminderRouter")
const UserRouter = require("./userRouter")


routes.use('/reminders', ReminderRouter)
routes.use('/user', UserRouter)
module.exports = routes