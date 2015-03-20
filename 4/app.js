var express = require("express"),
    app = express();
    url = require("url")
    
var animals = ['cat','dog'];

app.use(function(req,res,next){
    console.log(url.parse(req.url)pathname);
    console.log();
    console.log();
    next();
});

app.get('/', function(req,res){
    res.end('woohoo')
});

app.get('/new_animal/:name', function(req,res){
    var new_name = req.params.name;
    console.log(new_name);
    animals.push(req.params.name);
    res.end(animals.join(', '));
});

app.listen(process.env.PORT,process.env.IP);
// console.log("lalala on port 40000");