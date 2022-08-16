const db = require('../../config/connection.js');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into transaksi set ?`,
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
        db.query(`select * from transaksi`,
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
        db.query(`select * from transaksi where id_transaksi = ?`,
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
        db.query(`select * from transaksi where id_transaksi=?`,
        [data.id_transaksi],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update transaksi set ? where id_transaksi = ?`,
                [
                    data,
                    data.id_transaksi
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select id_transaksi from transaksi where id_transaksi = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from transaksi where id_transaksi = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}
