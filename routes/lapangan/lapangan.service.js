const db = require('../../config/connection.js');
const { v4: uuid } = require('uuid');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into lapangan set ?`,
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
        db.query(`select * from lapangan`,
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
        db.query(`select * from lapangan where id_lapangan = ?`,
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
        db.query(`select * from lapangan where id_lapangan=?`,
        [data.id_lapangan],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update lapangan set ? where id_lapangan = ?`,
                [
                    data,
                    data.id_lapangan
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select id_lapangan from lapangan where id_lapangan = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from lapangan where id_lapangan = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}
