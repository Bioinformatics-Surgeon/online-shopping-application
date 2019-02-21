const express = require("express")
const app = express()
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || "3000";



let fakeDB = [];
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
});


app.post('/items', function(req, res){
    const item = req.body;
    fakeDB.push(item);
    console.log(fakeDB);

    res.send("item added");
})

app.get('/items', function(req, res){
    res.send(fakeDB)
})





app.listen(PORT, function(){
    console.log("listening on PORT:"+PORT)
})