var express = require("express");
var app = express();

// home page
app.get("/", function(req, res){
	res.send("welcome");
});

// cookbook 1.0


//start server
app.listen(3000);