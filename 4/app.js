var express = require("express"),
    app = express();
    
var animals = ['cat','dog'];

app.get('/', function(req,res){
    res.end('woohoo')
});

app.get('/new_animal/:name', function(req,res){
    animals.push(req.params.name);
    res.end(animals.join(', '));
})

app.listen('4000');
console.log();