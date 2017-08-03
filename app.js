var express = require("express");
var app = express();



// home page
app.get("/", function(req, res){
	res.send("welcome");
});
//using route variables
app.get("/culture/:foodName", function(req, res){
	res.send("welcome to ");
});
// keep * here since it will make this the only route
//this is the default page
app.get("*", function(req, res){
	res.send("not welcome");
});


//start server
app.listen(3000);