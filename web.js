var express = require('express');
var app = express();
var routes = require('./routes/index');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));
app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
