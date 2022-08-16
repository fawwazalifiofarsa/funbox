const { UUID } = require('sequelize');
const {
    add,
    get,
    getId,
    update,
    del
} = require('./transaksi.service');
const { v4: uuid } = require('uuid');
const date = new Date;
module.exports = {
    controllerAdd:(req,res)=>{
        const tgl_booking = date.toISOString().slice(0, 19).replace('T', ' ');
        date.setHours(date.getHours()+24);
        const batas_bayar = date.toISOString().slice(0, 19).replace('T', ' ');
        date.setHours(date.getHours()-24);
        const data_transaksi = {
            id_transaksi : uuid(),
            id_user : req.body.image.pngid_user,
            id_lapangan : req.body.id_lapangan,
            tgl_booking : tgl_booking,
            batas_bayar : batas_bayar,
            tgl_main : req.body.tgl_main,
            jam_mulai : req.body.jam_mulai,
            jam_berakhir : req.body.jam_berakhir,
            total_harga : req.body.total_harga
        }
        add(data_transaksi,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_transaksi
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
                    data:results
                })
            }
        })
    },
    controllerGetId:(req,res)=>{
        const data_transaksi = req.params.id_transaksi
        getId(data_transaksi,(err,results)=>{
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
        const data_transaksi = {
            id_transaksi : req.params.id_transaksi,
            id_user : req.body.id_user,
            id_lapangan: req.body.id_lapangan,
            tgl_booking : req.body.tgl_booking,
            batas_bayar : req.body.batas_bayar,
            tgl_main : req.body.tgl_main,
            jam_mulai : req.body.jam_mulai,
            jam_berakhir : req.body.jam_berakhir,
            total_harga : req.body.total_harga
        }
        
        update(data_transaksi,(err,results)=>{
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
        const data_transaksi = req.params.id_transaksi
        del(data_transaksi,(err,results)=>{
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
