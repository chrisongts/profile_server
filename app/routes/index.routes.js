module.exports = function(app) {
  var index = require('../controllers/index.server.controller');
  //
  //
  // var about = require('../controllers/about.server.controller');
  //
  //
  // var contact = require('../controllers/contact.server.controller');

  // var staticpages = require('../controllers/staticpages.controller');

  var usersController = require('../controllers/users.controller')

  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

  // ACTUAL ROUTING
  // static page routes
  // app.get('/', staticpages.renderHome);
  // app.get('/about', staticpages.renderAbout);
  // app.get('/contact', staticpages.renderContact);

  // static page routes
  app.get('/users', usersController.index);
}
