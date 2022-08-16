const {
    add,
    get,
    getId,
    update,
    del,
    serviceGetAdminByEmail
} = require('./admin.service');
const {genSaltSync, hashSync, compareSync} = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
module.exports = {
    controllerAdd:(req,res)=>{
        const data_admin = {
            id_admin: uuid(),
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        }
        const salt = genSaltSync(10);
        data_admin.password = hashSync(data_admin.password, salt);
        add(data_admin,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_admin
                })
            }
        })
    },
    controllerGet:(req,res)=>{
        get((err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
    controllerGetId:(req,res)=>{
        const data_admin = req.params.id
        getId(data_admin,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
    controllerUpdate:(req,res)=>{
        const data_admin = {
            id_admin : req.params.id,
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        }
        update(data_admin,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    success : 0,
                    message : "Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    message:"Data Updated"
                })
            }
        })
    },
    controllerDelete:(req,res)=>{
        const data_admin = req.parmas.id
        del(data_admin,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    success:0,
                    message:"Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    message:"Delete Success"
                })
            }
        })
    },

    controllerLogin:(req,res)=>{
        const body = req.body;
        serviceGetAdminByEmail(body.email,(err,results)=>{
            if(err){
                console.log(err)
            }if(!results){
                return res.json({
                    success:0,
                    message:"Invalid email"
                })
            }
            const result = compareSync(body.password,results.password)
            console.log(result);
            console.log(results.password);
            console.log(body.password);
 
            if(result ){
                results.password = undefined
                const jsonwebtoken = sign({result:results},"secretadmin")
                return res.json({
                    success:1,
                    message:"Login succesfuly, Your Acount Already Use",
                    account: results,
                    token:jsonwebtoken
                })
            }else{
                return res.json({
                    success:0,
                    message:"Password invalid"
                })
            }
        })
    }
}
