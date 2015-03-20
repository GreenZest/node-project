var express = require("express"),
    app = express();
    url = require('url'),
    orm = require('orm');
var animals = ['cat','dog'];

app.use(orm.express("sqlite:db.sqlite",{
    define: function (db,models,next) {
        models.animal = db.define('animal', {
            name: String,
            paws: Number,
            gender: String,
            eats: String
        });
        models.human = db.define('human', {
            name: String,
            sex: String,
            beard: Boolean
        });
        next();
    }
}));

app.get('/', function(req,res){
    res.end(animals.join(', '))
});

app.get('/new_animal/:name', function(req,res){
    var new_name = req.params.name;
    console.log(new_name);
    animals.push(req.params.name);
    res.end(animals.join(', '));
});

app.listen(process.env.PORT,process.env.IP);
// console.log("lalala on port 40000");