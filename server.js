
var sys = require('sys');
var exec = require('child_process').exec;
var express = require('express');

var app = express();

app.use(express.compress());
app.use(express.static(__dirname+ '/public'));

app.get('/api/disk', function(req, res) {
	exec("df -h", function(error, stdout, stderr) {
		res.send(stdout);
	})
})

app.listen(process.env.PORT || 3000);
console.log('listening on 3000');