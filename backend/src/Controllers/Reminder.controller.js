const reminderModel = require("../../models/Reminde")
const {db} = require("../../models/db.connection")
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

class ReminderController {

    async getall(req,res,next)
    { 
        const query = {}
        const {limit} = req.query
        if(limit) {
            query['limit']= limit
        }
        const result = await reminderModel.findAll({
            ...query
        })
        return res.json(result)
    }

    async create(req,res,next) {
        const query = {}
        const {date,eventName, chatId,userId} = req.body

        const result = await reminderModel.create({
            chatId,remindeDate: date,remindeText: eventName,userId
        })
        return res.json(result)
    }

    async getAllByUserId(req,res,next) 
    {
        const query = {}
        const {limit,chatId} = req.query // вместо userId мб chatId
        if(limit) {
            query['limit']= limit
        }
        if(chatId) {
            query['where']= {chatId}
        }
        const result = await reminderModel.findAll({
            ...query
        })
        return res.json(result)
    }
    async delete(req,res,next) 
    {
        const query = {}
        const {id} = req.body
        const result = await reminderModel.destroy({
            where: {id}
        })
        return res.json(result)
    }
}
module.exports = ReminderController