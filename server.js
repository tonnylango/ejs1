var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var expressLayouts = require('express-ejs-layouts')

var app = express()

app.use(bodyParser());
app.use(cors());
app.use(expressLayouts)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render('home',{
        layout : 'layout',
        title : 'Home page',
        foo : 'bar',
        people : [
            {name : 'dave'},
            {name : 'jerry'}
        ]
    });
});

app.get('/about', function(req, res){
    res.render('about')
})

app.listen(8000, function(){
    console.log("Heard on 8000")
})