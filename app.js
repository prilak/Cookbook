var express = require("express");
var app = express();



// home page
app.get("/", function(req, res){
	res.send("welcome");
});
//using route variables
app.get("/culture/:foodName/:iterations", function(req, res){
	console.log(req.params.foodName);
	//res.send("welcome to " + req.params.foodName);
	var text = "";
	if(req.params.foodName=="beef") text += "moo ";
	for(var i = 0; i<req.params.iterations; i++){
		text += req.params.foodName;
	}
	res.send(text);
});
// keep * here since it will make this the only route
//this is the default page
app.get("*", function(req, res){
	res.send("not welcome");
});


//start server
app.listen(process.env.PORT, process.env.IP);