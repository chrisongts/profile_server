var express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts');

module.exports = function() {
  var app = express();

  app.use(cors());
  app.options('/products/:id', cors());
  app.get('/products/:id', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
  });
  // app.listen(80, function(){
  // console.log('CORS-enabled web server listening on port 80');
  // });

  // initialize the required module
  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  }else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.use(expressLayouts);

  require('../app/routes/index.routes.js')(app);

  // How to send the response header with Express.js
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

  app.use(express.static('./public'));
  return app;

};
