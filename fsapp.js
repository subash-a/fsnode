var fsys = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var filename = 'log.txt';
var filepath = 'logs/';
var logformat = ['time','level','log']
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
    var fdata = fsys.readFile(path.join(filepath,filename),'utf8',fileRead)
    
};

filterLogs = function (field) {
    console.log(field);
    
};

log = function (data) {
    console.log(data);
    var formattedLog = formatLogData(data,logformat);
    fsys.appendFile(path.join(filepath,filename),formattedLog,'utf8',onError);
};

function fileRead(data,error) {
    return data;
}

function formatLogData(data,format) {
    var text = "";
    for(k in format) {
	var key = format[k];
	text += data[key]+":";
    }
    text = text.substring(0,text.length-1);
    return text+"\r\n";
}

function onError(err) {
    if(err) console.log(err);
}

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
    case '/log':fn = log;
	break;
    default: break;
    }
    return fn;
}
