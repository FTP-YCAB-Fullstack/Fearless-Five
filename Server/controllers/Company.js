const Company = require("../models/perusahaanModel");

class Perusahaan {
  static getall = async (req, res, next) => {
    try {
      const company = await Company.find();
      res.status(200).json({
        company,
      });
    } catch (error) {
      next({code: 500, message: error.message});
    }
  };
  static getById = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const company = await Company.findById(_id);
      if (!company) return next({code: 404, message: 'Not Found'})
      res.status(200).json({
        company,
      });
    } catch (error) {
      next({ code: 500, message: error.message });
    }
  };
  static post = async (req, res, next) => {
    try {
      const { name } = req.body;
      const newPerusahaan = {
        name,
      };
      const perusahaan = await Company.create(newPerusahaan);
      res.status(201).json(perusahaan);
    } catch (error) {
      next({ code: 500, message: err.message });
      console.log(error);
    }
  };
  static deleteId = async (req, res, next) => {
    try {
      const { _id } = req.params;
      await Company.findByIdAndRemove(_id);

      res.sendStatus(204)

    } catch (error) {
      next({ code: 500, message: error.message });
    }
  };
}

module.exports = Perusahaan;
