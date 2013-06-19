var fsys = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var showFile = function(err,data) {
    console.log(data);
};

var handler = function (req,res) {
    var urlobj = url.parse(req.url,true);    
    var fn = route(urlobj.pathname);
    fn(urlobj.query);
    res.writeHead(200);
    res.end();
};

http.createServer(handler).listen("8080","localhost");

uploadLogs = function (logfile) {
    console.log(logfile);
    
};

setLogFormat = function (format) {
    console.log(format);
    
};

getLogs = function (id) {
    console.log(id);
    
};

filterLogs = function (field) {
    console.log(field);
    
};

log = function (data) {
    console.log(data);
    
};

function route(path) {
    var fn = function(){};
    switch(path) {
    case '/upload': fn = uploadLogs;
	break;
    case '/setlogformat': fn = setLogFormat;
	break;
    case '/getlogs': fn = getLogs;
	break;
    case '/filterlogs':fn = filterLogs;
	break;
    case '/log': 
    default: fn = log;
	break;
    }
    return fn;
}
