// Controller for Employment resource
// This should be read-only (eg. No create/update/delete)
//    --> make sure routes do not exist for other methods

<<<<<<< HEAD
const Employment = require('../models/employment').Employment;

module.exports = {
  getAllBySSN(req, res) {
    //TODO
    res.status(501).send({ message: "get employments by SSN not yet implemented" });
  },

  list(req, res) {
    //TODO
    res.status(501).send({ message: "list employments not yet implemented" });
  },
=======
const Employment = require('../models').Employment;

module.exports = {
  getAllBySSN(req, res) {
    //res.status(501).send({ message: "Not yet implemented" });
    Employment.findAll({
      where: { ssn: req.params.ssn }
    }).then(emps => {
      if (emps && emps.length > 0) {
        res.status(200)
          .json({ "error": false, "message": "success", "data": emps });
      }
      else {
        res.status(404)
          .json({ "error": true, "message": "Bad SSN. No Data.", "data": null });
      }
    });

  }
>>>>>>> front-end
}
