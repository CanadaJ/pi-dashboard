
var sys = require('sys');
var exec = require('child_process').exec;
var express = require('express');

var app = express();

app.use(express.compress());
app.use(express.static(__dirname+ '/public'));

app.get('/api/disk', function(req, res) {
	exec('df -h', function(error, stdout, stderr) {
		res.send({response: stdout});
	});
});

app.get('/api/temp', function(req, res) {
	var cpu_temp = '';
	var gpu_temp = '';
	exec('cat /sys/class/thermal/thermal_zone0/temp', function(error, stdout, stderr) {
		if(error !== null) {
			cpu_temp = stderr;
		} else {
			cpu_temp = 'CPU Temp: ' + ((stdout - (stdout % 10)) / 1000);
		}
		exec('/opt/vc/bin/vcgencmd measure_temp | cut -c6-9', function(error, stdout, stderr) {
			if(error !== null) {
				gpu_temp = stderr;
			} else {
				gpu_temp = 'GPU Temp: ' + stdout;
			}
			res.send({response: cpu_temp + '\n' + gpu_temp});
		});
	});	
});

app.get('/api/net/all', function(req, res) {
	exec('ifconfig', function(error, stdout, stderr) {
		if(error !== null) {
			res.send(stderr);
		} else {
			res.send({response: stdout});
		}
	});
});

app.listen(process.env.PORT || 3000);
console.log('listening on 3000');
