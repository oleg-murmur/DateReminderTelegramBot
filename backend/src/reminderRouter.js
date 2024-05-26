
const {Router} = require('express');
const ReminderController = require('./Controllers/Reminder.controller');

const routes = Router();
const reminderController = new ReminderController();

routes.post('/getall', reminderController.getall);
routes.post('/create', reminderController.create);
routes.get('/delete', reminderController.delete);


module.exports = routes