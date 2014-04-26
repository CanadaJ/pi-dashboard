
var sys = require('sys');
var exec = require('child_process').exec;
var express = require('express');

var app = express();

function puts(error, stdout, stderr) {sys.puts(stdout)}

app.use(express.compress());
app.use(express.static(__dirname+ '/public'));

app.get('/api/disk', function(req, res) {
	//res.send(exec("/public/scripts/disk.sh", puts));
	res.send('blah');
})

app.listen(process.env.PORT || 3000);
console.log('listening on 3000');