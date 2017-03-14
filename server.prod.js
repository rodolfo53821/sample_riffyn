var express = require('express');
var app = express();
/*Production pipeline not setup. This is not the best approach*/

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/distribution', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
