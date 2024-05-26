class ReminderController {


    async getall(req,res,next)
    { 

        return res.json('work1')
    }

    async create(req,res,next) {

    
        return res.json('work2')
    }

    async delete(req,res,next) 
    {
        res.json('work3')
    }
}
module.exports = ReminderController