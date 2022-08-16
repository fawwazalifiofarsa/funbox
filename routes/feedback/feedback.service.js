const db = require('../../config/connection.js');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into feedback set ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,results)
            }
        })
    },
    get:(callBack)=>{
        db.query(`select * from feedback`,
        [],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, results)
            }
        })
    },
    getId:(data,callBack)=>{
        db.query(`select * from feedback where id_feedback = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,results)
            }
        })
    },
    update:(data,callBack)=>{
        db.query(`select * from feedback where id_feedback=?`,
        [data.id_feedback],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update feedback set ? where id_feedback = ?`,
                [
                    data,
                    data.id_feedback
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select id_feedback from feedback where id_feedback = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from feedback where id_feedback = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}
