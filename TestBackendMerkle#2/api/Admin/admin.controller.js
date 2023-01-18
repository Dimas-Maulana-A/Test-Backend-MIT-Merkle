const model = require('./../../models/index')
const admin = model.admin

const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

module.exports={
    controllerGetAdmin : async(req, res)=> {
        await admin.findAll({
            attributes: ["email"]
        })
        .then(result=> {
            res.json({
                data: result
            })
        })
        .catch(err=> {
            res.json({
                err: err
            })
        })
    },
    controllerGetAdminById: async(req, res)=> {
        let {id} = req.params
        await admin.findOne({
            where: {
                id: id
            },
            attributes: ["email"]
        })
        .then(result=> {
            res.json({
                data: result
            })
        })
        .catch(err=> {
            res.json({
                err: err
            })
        })
    },
    controllerAddAdmin: async(req, res)=> {
        try {
            let {email, password} = req.body

            let salt = await bcrypt.genSalt()
            let hashPass = await bcrypt.hash(password, salt)

            let datas = {
                email: email,
                password: hashPass
            }

            admin.create(datas)
            .then(result=> {
                res.json({
                    data: datas
                })
            })
            .catch(err=> {
                res.json({
                    err:err
                })
            })

        } catch (error) {
            res.json({
                err: error
            })
        }
    },
    controllerLogin: async(req, res)=> {
        try {
            let {email, password} = req.body
            await admin.findOne({
                where: {
                    email: email
                }
            })
            .then(async result=> {
                let compares =await bcrypt.compare(password ,result.password)
                if(!compares){
                    res.json({
                        message: "password salah"
                    })
                }else{
                    let signs = jwt.sign({email, password}, process.env.TOKEN)
                    res.json({
                        email: result.email,
                        token: signs
                    })
                }

            })
        } catch (error) {
            res.json({
                message: "Email tidak ditemukan"
            })
        }
    }
}