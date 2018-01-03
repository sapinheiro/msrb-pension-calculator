const employeeController = require('../controllers').employee;
const employmentController = require('../controllers').employment;

<<<<<<< HEAD

=======
>>>>>>> front-end
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Welcome to the Pension API",
  }));

<<<<<<< HEAD

  //TODO how are params like ssn passed? just as an id tacked on?

  // employee routes
  app.get('/api/employee/:ssn', employeeController.getBySSN);
  app.get('/api/employee', employeeController.list)

  // employement routes
  app.get('/api/employment/:ssn', employmentController.getAllBySSN)
  app.get('/api/employment', employmentController.list)
=======
  // employee routes
  app.get('/api/employee/:ssn', employeeController.getBySSN);

  // employement routes
  app.get('/api/employment/:ssn', employmentController.getAllBySSN);
>>>>>>> front-end
};
