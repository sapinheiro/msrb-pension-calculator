// Controller for Employee resource
// This should be read-only (eg. No create/update/delete)
//    -> make sure routes do not exist for other methods

<<<<<<< HEAD
const Employee = require('../models/employee').Employee;

module.exports = {
  getBySSN(req, res) {
    //TODO
    res.status(501).send({ message: "Get employee by SSN not yet implemented" });
  },

  list(req, res) {
    //TODO
    res.status(501).send({ message: "List employees not yet implemented" });
  },
=======
const Employee = require('../models').Employee;

module.exports = {
    getBySSN(req, res) {
      Employee.findOne({
        where: {ssn: req.params.ssn}
      }).then(emp => {
        if (emp) {
          console.log(emp);
          res.status(200)
            .json({"error": false, "message": "success", "data": emp});
        }
        else {
          res.status(404)
            .json({"error": true, "message": "Bad SSN. No Data.", "data": null});
        }
      });
    }
>>>>>>> front-end
}
