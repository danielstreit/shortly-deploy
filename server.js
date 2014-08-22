var app = require('./server-config.js');

var port = process.env.PORT || 4568;
var url = process.env.URL || 'localhost';

app.listen(port, url);

console.log('Server now listening on port ' + port);
