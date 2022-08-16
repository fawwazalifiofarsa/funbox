const db = require('../../config/connection.js');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into admin set ?`,
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
        db.query(`select * from admin`,
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
        db.query(`select * from admin where id_admin = ?`,
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
        db.query(`select * from admin where id_admin=?`,
        [data.id_admin],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update admin set ? where id_admin = ?`,
                [
                    data,
                    data.id_admin
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select id_admin from admin where id_admin = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from admin where id_admin = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    },
    serviceGetAdminByEmail: (email,callBack)=>{ 
        db.query(
            `select * from admin where email=? `,
            [email],(err,results)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null,results[0])
                }
            }
        )
    }
}
