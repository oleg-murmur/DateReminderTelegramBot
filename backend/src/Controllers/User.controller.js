 class UserController {


    async Registration(req,res,next)
    { 

        return res.json('work1')
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