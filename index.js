var express = require('express');
var app = express();
var port = 3000;
app.get('/',function (request,response){
	response.send("bai 1 nodeJS")
});
app.listen(port);