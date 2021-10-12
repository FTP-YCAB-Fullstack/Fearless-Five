const Apply = require("../models/applyModel");

class Applys {
    static getAll = async (req, res, next) => {
        try {
            const apply = await Apply.find();
            res.status(200).json({
                apply,
            });
        } catch (error) {
            next({code: 500, message: error.message})
        }
    };

    static getById = async (req, res, next) => {
        try {
            const { _id } = req.params;
            const apply = await Apply.findById(_id);
            if (!apply) return next({code: 404, message: "Not Found"})
            res.status(200).json({
                apply,
            });
        } catch (error) {
            next({code: 500, message: error.message})
        }
    };

    static post = async (req, res, next) => {
        try {
            const { companyId, vacancyId, emailPelamar, namaPelamar, emailHrd, namaHrd } = req.body;
            const newApply = {
                companyId,
                vacancyId,
                emailPelamar,
                namaPelamar,
                emailHrd,
                namaHrd
            };
            const apply = await Apply.create(newApply);
            res.status(201).json(apply);
        } catch (error) {
            next ({code: 500, message: error.message});
        }
    };

    static deleteId = async (req, res, next) => {
        try {
            const { _id } = req.params;
            await Apply.findByIdAndRemove(_id);
            res.sendStatus(204)
        } catch (error) {
            next({code: 500, message: error.message});
        }
    };
}

module.exports = Applys;