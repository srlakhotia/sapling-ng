
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  bodyParser = require('body-parser');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);

/****** FOR HTML ******/
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

/**** FOR JADE *******/
app.set('view engine', 'jade');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  // TODO
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/pageTitle', api.pageTitle);


// JSON DATA
// TODO: just for an example, so to be removed later
app.get('/data/contactList', api.contactList);
app.post('/data/contactList/add', api.contactList.add);
app.put('/data/contactList/remove', api.contactList.remove);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
