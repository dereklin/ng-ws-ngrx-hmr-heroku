var express = require('express');
var path = require('path');
var app = express();
var cool = require('cool-ascii-faces');

var routes = require('./routes/index');
var users = require('./routes/users');
var test1 = require('./routes/test1');
var shoppingBag = require('./routes/shopping-bag');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));

app.use('/', routes);
app.use('/users', users);

app.use('/api/v1/shoppingBag', shoppingBag);


app.use('/test1', test1);

/*
app.get('/', function(request, response) {
  var result = ''
  var times = process.env.TIMES || 5
  for (i=0; i < times; i++)
    result += cool();
  response.send(result);
});
*/

var pg = require('pg');
var connectionString = "postgres://tvkzjrtaeqyrmh:d97-kAkjMTUiAmJicoQXlSv1Nq@ec2-107-22-170-37.compute-1.amazonaws.com:5432/d7a0pvb05stsae?ssl=true";

app.get('/db', function (request, response) {
  pg.connect(connectionString, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { console.log(process.env.DATABASE_URL);
    	  
    	  response.send(result.rows); }
    });
  });
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
