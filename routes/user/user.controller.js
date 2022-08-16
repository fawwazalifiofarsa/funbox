const {
    add,
    get,
    getId,
    update,
    del,
    serviceGetUserByEmail
} = require('./user.service')
const {genSaltSync, hashSync, compareSync} = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
module.exports = {
    controllerAdd:(req,res)=>{
        const data_user = {
            id_user : uuid(),
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            phone : req.body.phone,
            image : req.body.image
        }
        const salt = genSaltSync(10);
        data_user.password = hashSync(data_user.password, salt);
        add(data_user,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_user
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
        const data_user = req.body.id
        getId(data_user,(err,results)=>{
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
        const data_user = {
            id_user : req.params.id,
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            phone : req.body.phone,
            image : req.body.image
        }
        
        update(data_user,(err,results)=>{
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
                    data:results
                })
            }
        })
    },
    controllerDelete:(req,res)=>{
        const data_user = req.body.id
        del(data_user,(err,results)=>{
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
        serviceGetUserByEmail(body.email,(err,results)=>{
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
                const jsonwebtoken = sign({result:results},"secretuser")
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
