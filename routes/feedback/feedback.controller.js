const {
    add,
    get,
    getId,
    update,
    del
} = require('./feedback.service')
module.exports = {
    controllerAdd:(req,res)=>{
        const data_feedback = {
            id_user : req.body.id_user,
            id_lapangan : req.body.id_lapangan,
            rating : req.body.rating,
            ulasan : req.body.ulasan
        }
        add(data_feedback,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_feedback
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
        const data_feedback = req.params.id
        getId(data_feedback,(err,results)=>{
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
        const data_feedback = {
            id_feedback : req.params.id,
            id_user: req.body.id_user,
            id_lapangan : req.body.id_lapangan,
            rating : req.body.rating,
            ulasan : req.body.ulasan
        }
        update(data_feedback,(err,results)=>{
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
        const data_feedback = req.params.id
        del(data_feedback,(err,results)=>{
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
    }
}
