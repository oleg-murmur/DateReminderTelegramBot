
const {Router} = require('express');
const ReminderController = require('./Controllers/Reminder.controller');

const routes = Router();
const reminderController = new ReminderController();

routes.get('/getall', reminderController.getall);
routes.get('/getbyuser', reminderController.getAllByUserId);
routes.post('/create', reminderController.create);
routes.post('/delete', reminderController.delete);
// routes.get('/delete', reminderController.delete);


module.exports = routes