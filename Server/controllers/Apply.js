const Apply = require("../models/applyModel");

class Applys {
    static getAll = async (req, res, next) => {
        try {
            const { id, email } = req.query;
            let apply;
            if (id) {
                apply = await Apply.find({idPelamar: id}).populate([
                    {
                        path: 'vacancyId',
                        model: 'Vacancy',
                        select: 'role'
                    },
                    {
                        path: 'idPelamar',
                        model: 'User',
                        select: 'name cv email workNow profile'
                    }
                ]);
            } else {
                apply = await Apply.find({emailHrd: email}).populate([
                    {
                        path: 'vacancyId',
                        model: 'Vacancy',
                        select: 'role'
                    },
                    {
                        path: 'idPelamar',
                        model: 'User',
                        select: 'name cv email workNow profile'
                    }
                ]);
            }
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
            const { companyName, vacancyId, idPelamar, emailHrd, cv } = req.body;
            const newApply = {
                companyName,
                vacancyId,
                idPelamar,
                cv,
                emailHrd,
            };
            const apply = await Apply.create(newApply);
            res.status(201).json(apply);
        } catch (error) {
            next ({code: 500, message: error.message});
        }
    };

    static patch = async (req, res, next) =>  {
        try {
            let {id} = req.params;
            let {status} = req.body;

            const patch = await Apply.findByIdAndUpdate(id, {status}, {runValidators: true,new: true});
            res.status(200).json(patch)

        } catch(err) {
            next({code: 500, message: err.message})
        }
    }

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