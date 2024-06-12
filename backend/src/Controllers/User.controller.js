const UserModel = require("../../models/User")
const {db} = require("../../models/db.connection")
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

 
 class UserController {

    async Registration(req,res,next)
    { 
        const query = {}
        const {name, chatId,userId} = req.body

        const result = await UserModel.create({
            name,userId
        })
        return res.json(result)
    }

    async Login(req,res,next) {

    
        return res.json('work2')
    }

    async checkStatusAuth(req,res,next) 
    {
        res.json('work3')
    }
}
module.exports = UserController