const model = require("./../../models/index")
const tamu = model.tamu

module.exports = {
    controllerGetTamuFromTamu: async(req, res)=> {
        await tamu.findAll({
            attributes: ["nama", "catatan"]
        })
        .then(result=> {
            res
            .json({
                data: result
            })
        })
        .catch(err=> {
            res
            .json({
                err: err
            })
        })
    },

    controllerGetTamuFromAdmin: async(req, res)=> {
        await tamu.findAll({
            attributes: ["nama", "alamat", "telepon", "catatan"]
        })
        .then(result=> {
            res
            .json({
                data: result
            })
        })
        .catch(err=> {
            res.json({
                err: err
            })
        })
    },

    controllerAddTamu: async(req, res)=> {
        let {
            nama, alamat, telepon, catatan
        } = req.body
        let datas = {
            nama: nama,
            alamat: alamat,
            telepon: telepon,
            catatan: catatan
        }

        await tamu.create(datas)
        .then( async result=> {
            let tamuData = await tamu.findAll({
                attributes: ["nama", "catatan"]
            })
            res
            .json({
                data: datas,
                dataTamu: tamuData
            })
        })
        .catch(err=> {
            res.json({
                err: err
            })
        })
    },

    controllerDeleteTamu: async(req, res)=> {
        let {id} = req.params
        await tamu.destroy({
            where: {
                id: id
            }
        })
        .then(result=> {
            res
            .json({
                message: "data was deleted"
            })
        })
        .catch(err=> {
            res.json({
                err: err
            })
        })
    }
}