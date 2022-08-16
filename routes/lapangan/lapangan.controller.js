const {
    add,
    get,
    getId,
    update,
    del
} = require('./lapangan.service')
const { v4: uuid } = require('uuid');
module.exports = {
    controllerAdd:(req,res)=>{
        const data_lapangan = {
            id_lapangan: uuid(),
            nama : req.body.nama,
            jenis_lapangan : req.body.jenis_lapangan,
            jumlah : req.body.jumlah,
            harga_per_jam : req.body.harga_per_jam,
            jam_operasional : req.body.jam_operasional,
            kontak : req.body.kontak,
            koordinat : req.body.koordinat,
            alamat : req.body.alamat,
            image : req.body.image
        }
        add(data_lapangan,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_lapangan
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
        const data_lapangan = req.params.id
        getId(data_lapangan,(err,results)=>{
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
        const data_lapangan = {
            id_lapangan : req.params.id,
            nama: req.body.nama,
            jenis_lapangan : req.body.jenis_lapangan,
            jumlah : req.body.jumlah,
            harga_per_jam : req.body.harga_per_jam,
            jam_operasional : req.body.jam_operasional,
            kontak : req.body.kontak,
            koordinat : req.body.koordinat,
            alamat : req.body.alamat,
            image : req.body.image
        }
        update(data_lapangan,(err,results)=>{
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
        const data_lapangan = req.params.id
        del(data_lapangan,(err,results)=>{
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
