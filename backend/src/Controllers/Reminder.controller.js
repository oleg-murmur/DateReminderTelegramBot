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
        const {limit,userId} = req.query // вместо userId мб chatId
        if(limit) {
            query['limit']= limit
        }
        if(userId) {
            query['where']= {userId}
        }
        const result = await reminderModel.findAll({
            // where: {userId},
            ...query
        })
        return res.json(result)
    }
}
module.exports = ReminderController