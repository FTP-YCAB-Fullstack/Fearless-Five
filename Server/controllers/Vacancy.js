const Vacancy = require("./../models/vacancyModel");

class VacancyController {
    static getAll = async (req, res, next) => {
        try {
            const data = await Vacancy.find();
            res.status(200).json(data)
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    static getId = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await Vacancy.findById(id);
            res.status(200).json(data)
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    static post = async (req, res, next) => {
        try {
            let {companyId, 
                role, 
                job_description, 
                hrdId, 
                rangeSalary,
                responsibility,
                requirements,
                benefit,
                mandatorySkills,
                goodToHave
            } = req.body;

            mandatorySkills = mandatorySkills.split(',')
            benefit = benefit.split(',')
            requirements = requirements.split(',')
            responsibility = responsibility.split(',')
            goodToHave ? goodToHave = responsibility.split(',') : null
            
            const data = await Vacancy.create({
                companyId, 
                role, 
                job_description, 
                hrdId, 
                rangeSalary,
                responsibility,
                requirements,
                benefit,
                mandatorySkills,
                goodToHave}
            );

            res.status(201).json(data)
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    // static patch = async (req, res, next) => {
    //     try {
    //         let {id} = req.params
    //         let {companyId, 
    //             role, 
    //             job_description, 
    //             hrdId, 
    //             rangeSalary,
    //             responsibility,
    //             requirements,
    //             benefit,
    //             mandatorySkills,
    //             goodToHave
    //         } = req.body;

    //         for (let i in req.body) {
    //             if (!req.body[i]) delete req.body[i]
    //         }

    //         mandatorySkills ? mandatorySkills = mandatorySkills.split(',') : null
    //         benefit ?  benefit = benefit.split(',') : null
    //         requirements ? requirements = requirements.split(',') : null
    //         responsibility ? responsibility = responsibility.split(',') : null
    //         goodToHave ? goodToHave = responsibility.split(',') : null

    //         const update = await Vacancy.findByIdAndUpdate(id, {
    //             companyId, 
    //             role, 
    //             job_description, 
    //             hrdId, 
    //             rangeSalary,
    //             responsibility,
    //             requirements,
    //             benefit,
    //             mandatorySkills,
    //             goodToHave
    //         }, {runValidators: true, new: true});

    //         res.status(200).json(update)

    //     } catch(err) {
    //         next({code: 500, message: err.message})
    //     }
    // }
    static deleteId = async (req, res, next) => {
        try {
            const {id} = req.params
            const data = await Vacancy.findByIdAndRemove(id);
            res.sendStatus(204)
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
}

module.exports = VacancyController