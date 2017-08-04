var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//This cmd allows us to obtain req for a POST
app.use(bodyParser.urlencoded({extended: true}));

//this cmd tells the server where the stylesheets are
app.use(express.static("public"));

//no longer need to add .ejs to views
app.set("view engine", "ejs");
// home page
app.get("/", function(req, res){
	res.render("home.ejs");
	//res.send("welcome to my cookbook");
});
//<%=%> ADDS text to the html
//<% %>
app.get("/posts", function(req, res) {
    var posts = [
    	{title: "ziggy", author: "michael"},
    	{title: "is", author: "michael"},
    	{title: "best", author: "michael"}
    ];
    res.render("posts", {posts: posts});
});

//dog list app
app.get("/dogs", function(req, res) {
    var dogs = ["ziggy", "hennessy", "oreo", "bear", "tiger", "grace"];
    res.render("dogs", {dogs: dogs});
});

//adding meals
//need body-parser to obtain req
var meals = ["potatoes", "onions"];

app.post("/cookbook/add", function(req, res){
	var newMeal = req.body.newMeal;
	meals.push(newMeal);
	res.redirect("/cookbook/ideas");
});

app.get("/cookbook/ideas", function(req, res) {
    res.render("cookbook", {meals: meals});
});


app.get("/:dog", function(req, res) {
    var text = req.params.dog;
    res.render("love", {dogName: text});
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
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is running");
});