const Vacancy = require("./../models/vacancyModel");
const axios = require('axios')

class VacancyController {
    static getAll = async (req, res, next) => {
        try {
            let data;

            if (req.query.category) {
                let query = new RegExp(req.query.category)
                data =  await Vacancy.find({role: {$regex: query, $options: 'i'}});
            } else if (req.query.hrdEmail) {
                data = await Vacancy.find({hrdEmail: req.query.hrdEmail});
            } else {
                data = await Vacancy.find()
            }

            let theMuse = await axios.get('https://www.themuse.com/api/public/jobs?location=Flexible%20%2F%20Remote&page=2');
            theMuse = theMuse.data.results.map(el => {
                return {
                    role: el.name.match(/\w+\s\w+/i)[0],
                    companyName: el.company.name,
                    link: el.refs.landing_page,
                    status: 'open'
                }
            });

            if (req.query.category) {
                let query = new RegExp(req.query.category, 'gi')
                theMuse = theMuse.filter(el => el.role.match(query))
            } if (req.query.hrdEmail) {
                theMuse = [];
            }

            res.status(200).json([...data,...theMuse])
            // console.log(theMuse.data.results)
            
            // res.status(200).json(data)
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
            let {companyName, 
                role, 
                job_description, 
                hrdEmail, 
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
            goodToHave ? goodToHave = goodToHave.split(',') : null
            
            const data = await Vacancy.create({
                companyName, 
                role, 
                job_description, 
                hrdEmail, 
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
    static patch = async (req, res, next) => {
        try {
            const {status} = req.body;
            const {id} = req.params;

            const data = await Vacancy.findByIdAndUpdate(id, {status});

            res.status(200).json({
                message: 'updated'
            })

        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
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